import Tip from "./Tip";
import CustomTip from "./CustomTip";

const Tips = ({ tip, customTip, handleClickTip, handleChangeCustomTip }) => {
	return (
		<div className="input__wrap">
			<label className="input__label">Select Tip %</label>
			<div className="input__tips">
				<Tip
					idTip="5%"
					targetTip="5"
					tip={tip}
					handleClickTip={handleClickTip}
				/>

				<Tip
					idTip="10%"
					targetTip="10"
					tip={tip}
					handleClickTip={handleClickTip}
				/>

				<Tip
					idTip="15%"
					targetTip="15"
					tip={tip}
					handleClickTip={handleClickTip}
				/>

				<Tip
					idTip="25%"
					targetTip="25"
					tip={tip}
					handleClickTip={handleClickTip}
				/>

				<Tip
					idTip="50%"
					targetTip="50"
					tip={tip}
					handleClickTip={handleClickTip}
				/>

				<CustomTip
					customTip={customTip}
					handleChangeCustomTip={handleChangeCustomTip}
				/>
			</div>
		</div>
	);
};

export default Tips;
