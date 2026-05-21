import allExamples from './allExamples.js';

const isProduction = process.env.ELEVENTY_ENV === 'production';

const today = new Date();
today.setHours(23, 59, 59, 999);

const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);

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
			isNew: pub <= today && pub >= startOfToday,
		};
	});
