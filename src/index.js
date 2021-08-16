import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";


const mystore = createStore(() => ({
  products:[
    {
    name:'Macbook Pro',
    description: 'dummy description for Macbook Pro',
    price: 320000,
    },
    {
      name:'Macbook Air',
      description: 'dummy description for Macbook Air',
      price: 320000,
    }
],
   customer: [
     {
        customerName: "John sims",
        age: 30,
        location: "Los Vegas"
     },
     {
      customerName: "bob samuel",
      age: 40,
      location: "California"
   }
   ]
   
}))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mystore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
