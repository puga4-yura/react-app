import React, { Component } from 'react';
import s from './Profile.module.css';
import Post from "./Post/Post";
import MyPost from "./Post/MyPost";





const Profile = (props) => {
    let postUser = props.post.postData.map( postInfo => <Post  key={postInfo.id} id={postInfo.id} text={postInfo.text} like={postInfo.like}/>);

    return (
        <section className={s.mainContent}>
            <img className={s.mainImg} src="https://storge.pic2.me/c/1360x800/884/59fb15771ad9f.jpg" alt="re"/>
            <div className={`${s.item} ${s.active}`}>post</div>
            <MyPost
                changeText={props.changeText}
                addPost={props.addPost}
                postText={props.post.newPostText}
            />
            {postUser}
        </section>
    );
};

export default Profile;