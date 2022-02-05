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