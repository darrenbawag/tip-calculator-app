const CustomTip = ({ customTip, handleChangeCustomTip }) => {
	return (
		<input
			className="input__custom-tip"
			type="number"
			id="custom-tip"
			name="custom-tip"
			value={customTip}
			onChange={handleChangeCustomTip}
			placeholder="Custom"
		/>
	);
};

export default CustomTip;
