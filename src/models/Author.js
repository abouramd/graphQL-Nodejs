import mongoose from "mongoose";
import { Schema } from "mongoose";
import AutoIncrement from "./autoincrement.js";

const Author = new Schema({
  id: { type: Number, unique: true },
  name: String,
  description: String
});

Author.plugin(AutoIncrement, { inc_field: 'id', id: 'author_counter', });

const AuthorModule = mongoose.model('Author', Author);

export default AuthorModule;

