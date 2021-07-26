const People = ({ numPeople, handleChangeNumPeople, person }) => {
	return (
		<div className="input__wrap">
			<label className="input__label">Number of People</label>
			<div className="input__group">
                <img className="input__icon" src={person} alt="person sign" />
				<input
					className="input__text"
					type="text"
					value={numPeople}
					onChange={handleChangeNumPeople}
					placeholder="0"
				/>
			</div>
		</div>
	);
};

export default People;
