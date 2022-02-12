import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

// App setup
const app = express();

// cors setup
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// all routes will have posts prefix
app.use('/posts', postRoutes);

// Mongo setup
const CONNECTION_URL = "mongodb+srv://ddtest:GWneVcZl273PZ4cl@mern-mongo.95bpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// Start app
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('server running on port:' + PORT)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);//make sure we dont get any warnings in console