/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './style';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    const classes = useStyles();
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;