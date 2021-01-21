import React, { useState } from 'react';

const Search = (props) => {
	const [keyword, setKeyword] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const queryObject = {
			keyword,
		};

		props.onSubmit(queryObject);
	};

	const handleChange = (text) => {
		setKeyword(text);
	};

	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<input
				type="text"
				value={keyword}
				placeholder="Search"
				onChange={(e) => handleChange(e.target.value)}
			/>
			<button>Submit</button>
		</form>
	);
};

export default Search;
