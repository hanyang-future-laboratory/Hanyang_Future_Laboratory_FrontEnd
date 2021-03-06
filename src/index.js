import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import { Provider } from "react-redux";
import store from "store";
import "FontAwesome";
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
