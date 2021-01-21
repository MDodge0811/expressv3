const express = require('express');
const cors = require('cors');
const fs = require('fs');
const util = require('util');

const port = 3001;

const app = express();

app.use(cors());

const readFile = util.promisify(fs.readFile);

const getJson = async (filename, charset = 'utf8') => {
	try {
		const data = await readFile(filename, charset);
		const parsedData = JSON.parse(data);
		return parsedData;
	} catch {
		console.log('there was an error');
	}
};

const search = (query, json) => {
	const results = json.filter((object) => {
		for (let key in object) {
			if (object[key].toLowerCase().includes(query.keyword.toLowerCase())) {
				return object;
			}
		}
	});
	return results;
};

app.get('/', async (req, res) => {
	try {
		const data = await getJson('./superheroes.json');
		if (req.query.keyword) {
			const results = search(req.query, data);
			res.send(results);
		} else {
			res.send(data);
		}
	} catch {
		res.sendStatus(404);
	}
});

app.listen(3001, () => console.log(`Listening on ${port}`));
