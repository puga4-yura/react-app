import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";



export let renderEntirTree = (state) => {
    ReactDOM.render(<App
        changeText={store.changeText.bind(store)}
        state={store.getState()}
        addPost={store.addPost.bind(store)}/>, document.getElementById('root'));
}

renderEntirTree(store.getState());
store.subscribe(renderEntirTree)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
