import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import sharp from "sharp";
import { readFile } from "fs/promises";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addFilter("capitalize", str => str ? str.charAt(0).toUpperCase() + str.slice(1) : str);
	eleventyConfig.addFilter("markCode", str => str ? str.replace(/`([^`]+)`/g, '<code>$1</code>') : str);

	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	eleventyConfig.addPassthroughCopy("src/favicon.svg");
	eleventyConfig.addPassthroughCopy("src/og-image.svg");

	eleventyConfig.on("eleventy.after", async () => {
		const ogSvg = await readFile("./src/og-image.svg");
		await sharp(ogSvg).resize(1200, 630).png().toFile("./public/og-image.png");

		const faviconSvg = await readFile("./src/favicon.svg");
		await sharp(faviconSvg).resize(32, 32).png().toFile("./public/favicon.png");
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
