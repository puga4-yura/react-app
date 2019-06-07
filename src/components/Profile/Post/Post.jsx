import React, { Component } from 'react';
import s from "./Post.module.css";

const Post = (props) => {

    return (
        <div className={s.container}>
            <img className={s.avatar} src="https://telegraf.com.ua/files/2014/06/face_21.jpg" alt=""/>
            <div className={s.item}>{props.text}</div>
            <div>like: {props.like}</div>
        </div>
    )
}

export default Post;