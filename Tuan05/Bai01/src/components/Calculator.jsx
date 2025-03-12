import React, { useReducer, useState, useRef } from "react";
import './Calculator.css'

const Calculator = () => {
    const todoReducer = (state, action) => {
        switch (action.type) {
            case 'CALCULATION': {
                switch (state.sign) {
                    case 'ADD': {
                        return {
                            ...state,
                            result: state.firstNumber + state.secondNumber
                        }
                    };
                    case 'SUBTRACT': {
                        return {
                            ...state,
                            result: state.firstNumber - state.secondNumber
                        }
                    };
                    case 'MULTI': {
                        return {
                            ...state,
                            result: state.firstNumber * state.secondNumber
                        }
                    };
                    case 'DIV': {
                        return {
                            ...state,
                            result: state.firstNumber / state.secondNumber
                        }
                    };
                }
            }


            case 'CHANGE-FIRST-NUMBER': {
                return {
                    ...state,
                    firstNumber: action.number
                }
            };

            case 'CHANGE-SECOND-NUMBER': {
                return {
                    ...state,
                    secondNumber: action.number
                }
            };

            case 'CHANGE-SIGN': {
                return {
                    ...state,
                    sign: action.sign
                }
            };
        }
    };


    const [todos, dispatch] = useReducer(todoReducer,
        {
            firstNumber: 0,
            secondNumber: 0,
            sign: '',
            result: 0
        }
    );

    const handleCalculation = (event) => {
        event.preventDefault();
        dispatch({ type: 'CALCULATION' })
    }

    const handleChangeSign = (event) => {
        dispatch({ type: 'CHANGE-SIGN', sign: event.target.value })
    }

    const [selectedValue, setSelectedValue] = useState('');
    const refs = useRef({});

    const options = [
        { value: 'ADD', label: '+' },
        { value: 'SUBTRACT', label: '-' },
        { value: 'MULTI', label: '×' },
        { value: 'DIV', label: '÷' },
    ];

    const handleDivClick = (value) => {
        setSelectedValue(value);
        handleChangeSign(value);
        if (refs.current[value]) {
            refs.current[value].click();
        }
    };

    return (
        <>

            <form className="max-w-sm mx-auto" onSubmit={(event) => { handleCalculation(event) }}>
                <div className="m-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter first number</label>
                    <input type="number" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number" required
                        onChange={(event) => {
                            dispatch({
                                number: parseFloat(event.target.value),
                                type: 'CHANGE-FIRST-NUMBER'
                            })
                        }}
                    />
                </div>

                <div className="m-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter second number</label>
                    <input type="number" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number" required
                        onChange={(event) => {
                            dispatch({
                                number: parseFloat(event.target.value),
                                type: 'CHANGE-SECOND-NUMBER'
                            })
                        }}
                    />

                </div>

                <div className="grid grid-cols-2 gap-3 m-5">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleDivClick(option.value)}
                            className={`flex items-center ps-4 border border-gray-200 rounded-sm cursor-pointer dark:border-gray-700 ${selectedValue === option.value ? 'bg-gray-300 dark:bg-gray-600' : ''
                                }`}
                        >
                            <input
                                ref={(el) => (refs.current[option.value] = el)}
                                onChange={() => handleChangeSign(option.value)}
                                type="radio"
                                value={option.value}
                                name="bordered-radio"
                                checked={selectedValue === option.value}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="m-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result</label>
                    <input disabled value={todos.result} type="number" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div className="m-5">
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Calculation</button>
                </div>
            </form>
            {console.log(todos)}
        </>
    )
}

export default Calculator;