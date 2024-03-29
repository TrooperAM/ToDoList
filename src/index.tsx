import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from "react-redux";
import {store, history} from "./store/store";
import Header from "./components/Header"
import StickyFooter from "./components/StickyFooter";


ReactDOM.render(<Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="root">
                <Header/>
                <App/>
                <StickyFooter/>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
