const Output = ({ bill, tip, customTip, numPeople, handleClickReset }) => {
    let tipHolder = 
        (tip !== "") 
            ? tip
            : (customTip !== "")
            ? customTip
            : "0";

    let tipAmount = 
        (
            parseInt(
                ((parseFloat(bill) * (parseFloat(tipHolder) / 100)) /
                    parseInt(numPeople)) *
                    100
            ) / 100
        ).toFixed(2); 

    let total =
        ((parseFloat(bill) * (parseFloat(tipHolder) / 100)) /
            parseInt(numPeople) +
            parseFloat(bill) / parseInt(numPeople)).toFixed(2); 

    return (
        <div className="output">
            <div className="output__wrap">
                <div className="output__group">
                    <h2 className="text-2">Tip Amount</h2>
                    <div className="text-3">/ person</div>
                </div>
                <div className="output__amount">
                    <div className="text-1">
                        $
                        {bill !== "" && numPeople !== "" ?
                            tipAmount
                            :
                            "0.00"
                        }
                    </div>
                </div>
            </div>

            <div className="output__wrap">
                <div className="output__group">
                    <h2 className="text-2">Total</h2>
                    <div className="text-3">/ person</div>
                </div>
                <div className="output__amount">
                    <div className="text-1">
                        $
                        {bill !== "" && numPeople !== "" ?
                            total
                            :
                            "0.00"
                        }
                    </div>
                </div>
            </div>

            <button className="output__reset" onClick={handleClickReset} disabled={
                bill !== "" || tip !== "" || customTip !== "" || numPeople !== ""
                    ? false
                    : true
            }>
                Reset
            </button>
        </div>
    );
};

export default Output;
