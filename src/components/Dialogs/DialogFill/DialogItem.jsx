import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem  = (props) => {
    let path = "/dialog/" + props.id;
    return <div>
        <NavLink className={s.clientName} to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;