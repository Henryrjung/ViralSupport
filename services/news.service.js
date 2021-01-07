const axios = require("axios").default;
// const Parser = require ("rss-parser")
// const parser = new Parser()

const NewsService = {
	getNews: () => {
		const options = {
			method: 'GET',
			url: 'https://coronavirus-smartable.p.rapidapi.com/news/v1/US/',
			headers: {
			  'x-rapidapi-key': 'ba8be4669fmshee0e414c4ce2a90p1a3daajsn012f6ec8285e',
			  'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com'
			}
		};

		return axios.request(options);
	},
};


module.exports = NewsService;
