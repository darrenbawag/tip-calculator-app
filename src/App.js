import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";
import Footer from "./components/Footer";

const regex1 = /^([1-9][0-9]*)(?:[.]\d*)?$/;
const regex2 = /^(0|[1-9][0-9]*)(?:[.]\d*)?$/;
const regex3 = /^([1-9][0-9]*)$/;
const logo = "/images/logo.svg";
const dollar = "/images/icon-dollar.svg";
const person = "/images/icon-person.svg";

const App = () => {
  const [ bill, setBill ] = useState("");
  const [ tip, setTip ] = useState("");
  const [ customTip, setCustomTip ] = useState("");
  const [ numPeople, setNumPeople ] = useState("");

  const handleChangeBill = (e) => {
    if (regex1.test(String(e.target.value)) || e.target.value === "") {
			setBill(e.target.value);
		}
  };

  const handleClickTip = (e) => {
    setCustomTip("");
    setTip(e.currentTarget.value);
  };

  const handleChangeCustomTip = (e) => {
    if (regex2.test(String(e.target.value)) || e.target.value === "") {
			setTip("");
			setCustomTip(e.target.value);
		}
  };

  const handleChangeNumPeople = (e) => {
    if (regex3.test(String(e.target.value)) || e.target.value === "") {
			setNumPeople(e.target.value);
		};
  };

  const handleClickReset = () => {
    setBill("");
    setTip("");
    setCustomTip("");
    setNumPeople("");
  };

  return (
		<>
			<div className="container">
				<Header logo={logo} />
				<main>
					<div className="calculator">
						<Input
							bill={bill}
							tip={tip}
							customTip={customTip}
							numPeople={numPeople}
							handleChangeBill={handleChangeBill}
							handleClickTip={handleClickTip}
							handleChangeCustomTip={handleChangeCustomTip}
							handleChangeNumPeople={handleChangeNumPeople}
							dollar={dollar}
							person={person}
						/>

						<Output
							bill={bill}
							tip={tip}
							customTip={customTip}
							numPeople={numPeople}
							handleClickReset={handleClickReset}
						/>
					</div>
				</main>
        <Footer />
			</div>
		</>
	);
};

export default App;
