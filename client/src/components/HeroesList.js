const HeroesList = ({ heroState, loading, error }) => {
	if (loading || error) {
		return <div></div>;
	}
	if (!heroState.length) {
		return (
			<div>
				<p>Oh no! We didn't find anything!</p>
			</div>
		);
	} else {
		return heroState.map((hero) => {
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

export default HeroesList;
