const Bill = ({ bill, handleChangeBill, dollar }) => {
	return (
		<div className="input__wrap">
			<label className="input__label" htmlFor="bill">Bill</label>
			<div className="input__group">
                <img className="input__icon" src={dollar} alt="dollar sign" />
				<input
					className="input__text"
					type="number"
					id="bill"
					name="bill"
					value={bill}
					onChange={handleChangeBill}
					placeholder="0"
				/>
			</div>
		</div>
	);
};

export default Bill;
