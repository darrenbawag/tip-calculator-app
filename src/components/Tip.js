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
					aria-label={idTip}
				/>
			</label>
			<div className={`input__tip ${targetTip === tip ? "active" : ""}`}>
				{idTip}
			</div>
		</div>
	);
};

export default Tip;
