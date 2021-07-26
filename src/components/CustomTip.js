const CustomTip = ({ customTip, handleChangeCustomTip }) => {
	return (
		<input
			className="input__custom-tip"
			type="text"
			value={customTip}
			onChange={handleChangeCustomTip}
			placeholder="Custom"
		/>
	);
};

export default CustomTip;
