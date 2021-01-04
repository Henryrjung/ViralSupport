const axios = require("axios").default;
const Parser = require ("rss-parser")
const parser = new Parser()

const NewsService = {
	getNews: () => {
		const options = {
			method: 'GET',
			url: 'https://coronavirus-smartable.p.rapidapi.com/news/v1/US/',
			// params: {country: country },
			headers: {
			  'x-rapidapi-key': '22539d0047mshaba23ae76c1a0c3p1d7388jsn5281cea1a33d',
			  'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
			},
		};

		return axios.request(options);
	},

	getLocalNews: (country) => {
		const options = {
			method: 'GET',
			url: 'https://coronavirus-smartable.p.rapidapi.com/news/v1/US/',
			params: {country: country },
			headers: {
			  'x-rapidapi-key': '22539d0047mshaba23ae76c1a0c3p1d7388jsn5281cea1a33d',
			  'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
			},
		  };


		return axios.request(options);
	},

	getNationalNews: (country) => {
		const options = {
			method: 'GET',
			url: 'https://coronavirus-smartable.p.rapidapi.com/news/v1/US/',
			params: {country: country },
			headers: {
			  'x-rapidapi-key': '22539d0047mshaba23ae76c1a0c3p1d7388jsn5281cea1a33d',
			  'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
			},
		  };


		return axios.request(options);
	},
};


module.exports = NewsService;
