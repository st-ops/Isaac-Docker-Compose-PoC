import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

// fetch posts
export const getPosts = async (req, res)=>{
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

// create posts
export const createPost = async (req, res) => {
    try{
        const post = req.body;
        const newPost = new PostMessage(post);
        await newPost.save();
        res.status(200).json(newPost);
    }catch(error){
        res.status(500).json({message: error.message});       
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that id');
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});

    res.json(updatedPost);
}