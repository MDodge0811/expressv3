function composeHeroQuery(heroesQueryObject) {
	let queryString = '';
	if (heroesQueryObject.keyword !== '') {
		queryString = queryString.concat(`keyword=${heroesQueryObject.keyword}&`);
	}
	return queryString;
}

export default composeHeroQuery;
