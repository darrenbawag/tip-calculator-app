const Tip = ({ idTip, targetTip, tip, handleClickTip }) => {
	return (
		<div className="input__tip-wrap">
			<label htmlFor={idTip}>
				<input
					className="input__radio"
					id={idTip}
					type="radio"
					name="tip"
					value={targetTip}
					onClick={handleClickTip}
				/>
				<div className={`input__tip ${targetTip === tip ? "active" : ""}`}>{idTip}</div>
			</label>
		</div>
	);
};

export default Tip;
