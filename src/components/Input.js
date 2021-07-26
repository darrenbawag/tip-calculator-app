import Bill from "./Bill";
import Tips from "./Tips";
import People from "./People";

const Input = ({
	bill,
	tip,
	customTip,
	numPeople,
	handleChangeBill,
    handleClickTip,
	handleChangeCustomTip,
	handleChangeNumPeople,
    dollar,
    person
}) => {
	return (
		<div className="input">
			<Bill bill={bill} handleChangeBill={handleChangeBill} dollar={dollar} />

			<Tips
				tip={tip}
				customTip={customTip}
				handleClickTip={handleClickTip}
				handleChangeCustomTip={handleChangeCustomTip}
			/>

			<People numPeople={numPeople} handleChangeNumPeople={handleChangeNumPeople} person={person} />
		</div>
	);
};

export default Input;
