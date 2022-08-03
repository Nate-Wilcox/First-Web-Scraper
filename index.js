/* === Constant variables === */
const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();

/* === URL of Page Being Scraped === */
const url = 'https://www.washingtonpost.com/';

/* === Javascript === */
axios(url)
	.then((response) => {
		const html = response.data;
		const $ = cheerio.load(html);
		const articles = [];

		/* === Parsing Data === */
		$('.card-left', html).each(function () {
			const title = $(this).text();
			const link = $(this).find('a').attr('href');
			articles.push({
				title,
				link,
			});
		});
		/* === Console out data collected === */
		console.log(articles);
	})
	/* === Error Catching === */
	.catch((err) => console.log(error));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
