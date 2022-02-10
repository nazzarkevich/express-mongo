const express = require('express');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/post');

const app = express();

const dbURI = `mongodb+srv://nazzarkevich:${process.env.MONGO_ATLAS_PW}@blog-test.apkvf.mongodb.net/blog-db?retryWrites=true&w=majority`;
mongoose.connect(dbURI);

app.use(express.urlencoded({ extended: true }));
app.use('/posts', postsRoutes);

app.listen(3001);
