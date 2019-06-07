import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogFill/DialogItem'
import Sms from './DialogFill/SmsText'
import {NavLink} from "react-router-dom";




const Dialogs =(props) => {

    let dialog = props.data.dialogItem.map( newDialog => <DialogItem key={newDialog.id} name={newDialog.name}  id={newDialog.id}/>);
    let text = props.data.dialogText.map( newText => <Sms key={newText.id} id={newText.id} text={newText.text}/>);

    return (
        <div className={s.dialogContainer}>
            <div className={s.dialogName}>
                <div className={s.mainTitle}>DIALOG</div>
                {dialog}
            </div>
            <div className={s.dialogText}>
                {text}
            </div>
        </div>
        )

}

export default Dialogs;