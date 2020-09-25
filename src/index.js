import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL = "https://outset-v1.herokuapp.com";
axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios.defaults.baseURL = 'http://myurl';
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.get(serviceUrl, onSuccess, onFailure)
// .then(resp => { 
//       let result = resp.data;
//       onSuccess(result);
// })
// .catch(error => {
//       if(onFailure) {
//           return onFailure(error);
//       }
// })
// }

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
