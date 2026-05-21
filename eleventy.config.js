import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import sharp from "sharp";
import { readFile, writeFile } from "fs/promises";

function pngToIco(pngBuffer) {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0);
	header.writeUInt16LE(1, 2);
	header.writeUInt16LE(1, 4);
	const entry = Buffer.alloc(16);
	entry.writeUInt8(32, 0);
	entry.writeUInt8(32, 1);
	entry.writeUInt8(0, 2);
	entry.writeUInt8(0, 3);
	entry.writeUInt16LE(1, 4);
	entry.writeUInt16LE(32, 6);
	entry.writeUInt32LE(pngBuffer.length, 8);
	entry.writeUInt32LE(22, 12);
	return Buffer.concat([header, entry, pngBuffer]);
}

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addFilter("capitalize", str => str ? str.charAt(0).toUpperCase() + str.slice(1) : str);
	eleventyConfig.addFilter("markCode", str => str ? str.replace(/`([^`]+)`/g, (_, code) => `<code>${code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`) : str);
	eleventyConfig.addFilter("formatDate", dateStr => dateStr ? new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }) : '');
	eleventyConfig.addFilter("published", arr => Array.isArray(arr) ? arr.filter(e => e.isPublished) : arr);

	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/favicon.svg");
	eleventyConfig.addPassthroughCopy("src/favicon-dev.svg");
	eleventyConfig.addPassthroughCopy("src/og-image.svg");
	eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });

	eleventyConfig.on("eleventy.after", async () => {
		const ogSvg = await readFile("./src/og-image.svg");
		await sharp(ogSvg).resize(1200, 630).png().toFile("./public/og-image.png");

		const faviconSvg = await readFile("./src/favicon.svg");
		const faviconPng = await sharp(faviconSvg).resize(32, 32).png().toBuffer();
		await writeFile("./public/favicon.png", faviconPng);
		await writeFile("./public/favicon.ico", pngToIco(faviconPng));

		const faviconDevSvg = await readFile("./src/favicon-dev.svg");
		const faviconDevPng = await sharp(faviconDevSvg).resize(32, 32).png().toBuffer();
		await writeFile("./public/favicon-dev.png", faviconDevPng);
		await writeFile("./public/favicon-dev.ico", pngToIco(faviconDevPng));
	});

	return {
		dir: {
			input: "src",
			output: "public",
			includes: "_includes",
			data: "_data",
		},
	};
}
