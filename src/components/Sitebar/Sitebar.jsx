import React, { Component } from 'react';
import s from './Sitebar.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <section className={s.siteBar}>
            <div>
                <NavLink to="/Profile" activeClassName={s.activeLink}>profile</NavLink>
            </div>
            <div>
                <NavLink to="/Dialogs">message</NavLink>
            </div>
            <div>
                <NavLink to="/News">news</NavLink>
            </div>
            <div>
                <NavLink to="/Music">music</NavLink>
            </div>
            <div>
                <NavLink to="/Settings">settings</NavLink>
            </div>
        </section>
    )
}

export default Menu;