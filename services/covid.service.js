const axios = require('axios').default;

const CovidService = {
  getStats: function(country) {
    var options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      params: { country: country },
      headers: {
        'x-rapidapi-key': 'ba8be4669fmshee0e414c4ce2a90p1a3daajsn012f6ec8285e',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      },
    };

    // console.log(options)
    return axios.request(options);
  },
};

module.exports = CovidService;
