import React from "react";
import ReactDOM from "react-dom";
import App from "app/components/App/App";



document.addEventListener("DOMContentLoaded", function() {
    let ewRoot = document.createElement('div');
    ewRoot.setAttribute('id', 'ewRoot');
    document.body.appendChild(ewRoot);
    ReactDOM.render(<App />, document.getElementById("ewRoot"));
});







