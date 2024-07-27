import mongoose from "mongoose";
import { Schema } from "mongoose";
import AutoIncrement from "./autoincrement.js";

const Post = new Schema({
  id: { type: Number, unique: true },
  title: String,
  author: String
});

Post.plugin(AutoIncrement, { inc_field: 'id', id: 'post_counter', });

const PostModule = mongoose.model('Post', Post);

export default PostModule;

