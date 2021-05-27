import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './Components/App';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./Redux/store";

ReactDOM.render(
    <>
    <Provider store={store}>
    <StrictMode>
<BrowserRouter>
    <App />
</BrowserRouter>
</StrictMode>
</Provider>   
</>
,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
