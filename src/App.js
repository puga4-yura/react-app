import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Sitebar/Sitebar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className="body">

                <Header/>
                <Menu/>
                <div className="app-container-wrapper">
                    <Route path='/Profile' render={() => <Profile
                        post={props.state.profilePage} changeText={props.changeText} addPost={props.addPost}/>}/>
                    <Route path='/Dialogs' render={ () => <Dialogs data={props.state.messagePage}/>} />
                    <Route path='/Music' render={ () => <Music/>}/>
                    <Route path='/News' render={ () => <News/>}/>
                    <Route path='/Settings' render={ () => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
