import { useState } from 'react'
import './App.css'
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import Counter from './components/Counter';

function App() {
  const store = createStore(allReducers);

  return (
    <>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </>
  )
}

export default App
