import { useState } from "react";
import Numbers from "./components/numbers.jsx";
import Operands from "./components/Operands.jsx";
import Output from "./components/Output.jsx";

function App() {
    const [nums, setNums] = useState([1,2,3,4,5,6,7,8,9,0]);
    const [oper, setOper] = useState(['C', '+', '-', '=']);
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operand, setOperand] = useState(null);
    const [result, setResult] = useState(0);

    const handleClick = (val) => {
        if (!operand) {
            setNum1(num1 + val)
        } else setNum2(num2 + val)
    }

    const reset = () => {
        setNum1('')
        setNum2('')
        setOperand('')
        setResult(0)
    }

    const handleOperand = (val) => {
        setOperand(val)
    }

    const handleResult = () => {
        if (operand) {

            switch (operand) {
                case 'C': reset()
                    break;
                case '+': setResult(+num1 + +num2)
                    break;
                case '-': setResult(num1 - num2)
                    break;
                // case '=': setResult(result)
            }
        }

    }

    return (
        <div className="app">
            <Output num1={num1} result={result} num2={num2} handleResult={() => handleResult()} setNum1={setNum1} operand={operand} />
            <div className="container">
                <Numbers setNum1={(v) => handleClick(v)} nums={nums} />
                <Operands handleOperand={(v) => handleOperand(v)} operand={operand} oper={oper} />
            </div>

        </div>
    )
}

export default App
