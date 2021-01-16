import React, { useState } from 'react';
import {
	HERONAME,
	ALTEREGO,
	FIRSTAPPEARANCE,
	PUBLISHER,
} from '../helpers/placeholders';

const Search = (props) => {
	const [heroName, setHeroName] = useState('');
	const [alterEgo, setAlterEgo] = useState('');
	const [firstAppearance, setFirstAppearance] = useState('');
	const [publisher, setPublisher] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const queryObject = {
			heroName,
			alterEgo,
			firstAppearance,
			publisher,
		};

		props.onSubmit(queryObject);
	};

	const handleChange = (placeholder, text) => {
		if (placeholder === HERONAME) {
			console.log(`Name`);
			setHeroName(text);
		}
		if (placeholder === ALTEREGO) {
			console.log(`alter`);
			setAlterEgo(text);
		}
		if (placeholder === FIRSTAPPEARANCE) {
			console.log(`appear`);
			setFirstAppearance(text);
		}
		if (placeholder === PUBLISHER) {
			console.log(`pub`);
			setPublisher(text);
		}
	};

	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<input
				type="text"
				value={heroName}
				placeholder="Hero Name"
				onChange={(e) => handleChange(HERONAME, e.target.value)}
			/>
			<input
				type="text"
				value={alterEgo}
				placeholder="Alter Ego"
				onChange={(e) => handleChange(ALTEREGO, e.target.value)}
			/>
			<input
				type="text"
				value={firstAppearance}
				placeholder="First Appearance"
				onChange={(e) => handleChange(FIRSTAPPEARANCE, e.target.value)}
			/>
			<p>
				<label>Publisher</label>
				<select id="publisher-list">
					<option
						value="Marvel Comics"
						onClick={(e) => handleChange(PUBLISHER, e.target.value)}
					>
						Marvel
					</option>
					<option
						value="DC Comics"
						onClick={(e) => handleChange(PUBLISHER, e.target.value)}
					>
						DC
					</option>
				</select>
			</p>
			<button>Submit</button>
		</form>
	);
};

export default Search;
