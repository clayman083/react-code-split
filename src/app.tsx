import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Loadable from "react-loadable";
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './routes';


const Root = function () {
    return (
        <BrowserRouter basename="/">
            <Routes />
        </BrowserRouter>
    );
}

Loadable.preloadReady().then(() => {
    console.log('ready');
    ReactDOM.hydrate(<Root />, document.getElementById("root"));
});
