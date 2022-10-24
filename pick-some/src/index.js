import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CustomContext, CustomContextProvider } from './components/customContext';
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(<CustomContextProvider>
                <Router>
                  <App />
                </Router></CustomContextProvider>,  document.getElementById("root"));

