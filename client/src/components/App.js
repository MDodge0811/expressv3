import React, { useEffect, useState } from 'react';

import Search from './Search';
import HeroesList from './HeroesList';
import { url } from '../api/superheroesApi';
import composeHeroQuery from '../helpers/composeHeroQuery';

const App = () => {
	const [superheroes, setSuperHeroes] = useState(null);
	const [query, setQuery] = useState({
		keyword: '',
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		(async () => {
			try {
				const { data } = await url.get(`?${composeHeroQuery(query)}`);
				setSuperHeroes(data);
				setLoading(false);
			} catch (err) {
				console.log(err.message);
				setError(err.message);
				setLoading(false);
			}
		})();
	}, [query]);

	const ifLoadingOrError = () => {
		if (error) {
			return (
				<div>
					<p>Your request returned the error:</p>
					<p>{error}</p>
				</div>
			);
		}
		if (loading) {
			return <div>Wrangling Heroes!</div>;
		}
	};

	return (
		<div>
			<div>
				<Search onSubmit={(object) => setQuery(object)} />
			</div>
			{ifLoadingOrError()}
			<HeroesList heroState={superheroes} loading={loading} error={error} />
		</div>
	);
};

export default App;
