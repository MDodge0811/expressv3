import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Search from './Search';

const App = () => {
	const [superheroes, setSuperHeroes] = useState(null);
	const [query, setQuery] = useState({
		alterEgo: '',
		firstAppearance: '',
		heroName: '',
		publisher: '',
	});

	useEffect(() => {
		let url = `http://localhost:3001/?`;
		if (query.firstAppearance !== '') {
			url = url.concat(`first_appearance=${query.firstAppearance}&`);
		}
		if (query.publisher !== '') {
			url = url.concat(`publisher=${query.publisher}&`);
		}
		if (query.alterEgo !== '') {
			url = url.concat(`alter_ego=${query.alterEgo}&`);
		}
		if (query.heroName !== '') {
			url = url.concat(`superhero=${query.heroName}&`);
		}
		(async () => {
			console.log(url);
			const { data } = await axios.get(url);
			setSuperHeroes(data);
		})();
	}, [query]);

	const renderComponent = () => {
		if (superheroes === null) {
			return <div>loading...</div>;
		} else {
			return superheroes.map((hero) => {
				return (
					<ul>
						<li>Superhero: {hero.superhero}</li>
						<li>Alter Ego: {hero.alter_ego}</li>
						<li>First Appearance: {hero.first_appearance}</li>
						<li>Publisher: {hero.publisher}</li>
						<li>Associated Characters: {hero.characters}</li>
					</ul>
				);
			});
		}
	};

	return (
		<div>
			<div>
				<Search onSubmit={(object) => setQuery(object)} />
			</div>
			{renderComponent()}
		</div>
	);
};

export default App;
