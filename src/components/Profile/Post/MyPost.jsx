import React, { Component } from 'react';
import s from "./MyPost.module.css";

const MyPost = (props) => {

    let newElementData = React.createRef();

    let messagePost = () => {
        let text = newElementData.current.value;
        props.addPost(text);
        props.changeText('');

    }

    let messageChange = () => {
        let text = newElementData.current.value;
        props.changeText(text)
        console.log(text)
    }

    return (
        <div className={s.container}>
            <textarea
                ref={newElementData}
                value={props.postText}
                onChange={messageChange}
                name="" id="" cols="30" rows="10">
            </textarea>
            <div>
                <button onClick={messagePost}>Отправить</button>
            </div>
        </div>
    )
}

export default MyPost;