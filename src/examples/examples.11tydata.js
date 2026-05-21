import allExamples from '../_data/allExamples.js';

const isProduction = process.env.ELEVENTY_ENV === 'production';

const today = new Date();
today.setHours(23, 59, 59, 999);

export default {
	eleventyComputed: {
		publishDate(data) {
			const example = allExamples.find(e => e.slug === data.slug);
			return example ? example.publishDate : null;
		},
		permalink(data) {
			if (!isProduction) return undefined;
			const example = allExamples.find(e => e.slug === data.slug);
			if (!example) return undefined;
			return new Date(example.publishDate) <= today ? undefined : false;
		},
	},
};
