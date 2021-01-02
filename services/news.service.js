const http = require("https");

const options = {
	"method": "GET",
	"hostname": "coronavirus-smartable.p.rapidapi.com",
	"port": null,
	"path": "/news/v1/US/",
	"headers": {
		"x-rapidapi-key": "22539d0047mshaba23ae76c1a0c3p1d7388jsn5281cea1a33d",
		"x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		// console.log(body.toString());
	});
});

req.end();
