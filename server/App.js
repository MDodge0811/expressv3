const express = require('express');
const cors = require('cors');
const fs = require('fs');
const util = require('util');
const _ = require('lodash');
const { Console } = require('console');
const port = 3001;

const app = express();

app.use(cors());

const readFile = util.promisify(fs.readFile);

const getData = async (filename) => {
	try {
		const data = await readFile(filename, 'utf8');
		const parsedData = JSON.parse(data);
		return parsedData;
	} catch {
		console.log('there was an error');
	}
};

const search = (query, json) => {
	const results = json.filter((object) => {
		let check = true;
		for (let key in query) {
			check = false;
			if (object[key].toLowerCase().includes(query[key].toLowerCase())) {
				check = true;
			}
			if (!check) {
				break;
			}
		}
		if (!!check) {
			return object;
		}
	});
	return results;
};

app.get('/', async (req, res) => {
	const data = await getData('./superheroes.json');
	const results = search(req.query, data);
	res.send(results);
});

app.listen(3001, () => console.log(`Listening on ${port}`));
