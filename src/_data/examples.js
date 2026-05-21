import allExamples from './allExamples.js';

const isProduction = process.env.ELEVENTY_ENV === 'production';

const today = new Date();
today.setHours(23, 59, 59, 999);

const newWindow = 14 * 24 * 60 * 60 * 1000; // 14 days in ms

export default allExamples
	.filter(e => {
		if (!isProduction) return true;
		return new Date(e.publishDate) <= today;
	})
	.map(e => {
		const pub = new Date(e.publishDate);
		return {
			...e,
			isPublished: pub <= today,
			isNew: pub <= today && (today - pub) <= newWindow,
		};
	});
