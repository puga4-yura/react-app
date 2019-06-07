import React, { Component } from 'react';
import  s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
             <img className={s.logo} src="https://cnet3.cbsistatic.com/img/Yt768C55hXNi2eGSB9qOv-e7SQg=/2011/03/16/c7675aa8-fdba-11e2-8c7c-d4ae52e62bcc/Chrome-logo-2011-03-16.jpg" alt=""/>
           </header>
}

export default Header;