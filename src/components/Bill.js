const Bill = ({ bill, handleChangeBill, dollar }) => {
	return (
		<div className="input__wrap">
			<label className="input__label">Bill</label>
			<div className="input__group">
                <img className="input__icon" src={dollar} alt="dollar sign" />
				<input
					className="input__text"
					type="text"
					value={bill}
					onChange={handleChangeBill}
					placeholder="0"
				/>
			</div>
		</div>
	);
};

export default Bill;
