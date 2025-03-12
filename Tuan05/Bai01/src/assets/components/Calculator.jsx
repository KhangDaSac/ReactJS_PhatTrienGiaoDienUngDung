import React, { useReducer } from "react";
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
        dispatch({ type: 'CALCULATION'})
    }

    const handleChangeSign = (event) => {
        dispatch({ type: 'CHANGE-SIGN', sign: event.target.value})
    }

    return (
        <>

            <form className="max-w-sm mx-auto" onSubmit={() => {handleCalculation()}}>
                <div className="m-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter first number</label>
                    <input type="number" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number" required
                        onChange={(event) => {
                            dispatch({
                                number: parseFloat(event.target.value),
                                type: 'CHANG-FIRST-NUMBER'
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
                                type: 'CHANG-SECOND-NUMBER'
                            })
                        }}
                    />

                </div>

                <div className="grid gird-cols-2 gap-2">
                    <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                        <input onChange={(event) => {handleChangeSign(event)}} radioGroup="radio-group" type="radio" value="ADD" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">+</label>
                    </div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                        <input onChange={(event) => {handleChangeSign(event)}} radioGroup="radio-group" type="radio" value="SUBTRACT" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">-</label>
                    </div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                        <input onChange={(event) => {handleChangeSign(event)}} radioGroup="radio-group" type="radio" value="MULTI" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">×</label>
                    </div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                        <input onChange={(event) => {handleChangeSign(event)}} radioGroup="radio-group" type="radio" value="DIV" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">÷</label>
                    </div>
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