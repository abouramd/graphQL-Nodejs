import mongoose from "mongoose";
import { Schema } from "mongoose";
import dotenv from 'dotenv';
import AutoIncrementFactory from 'mongoose-sequence';

dotenv.config();

const connection = await mongoose.createConnection(process.env.MONGO_DB);
const AutoIncrement = AutoIncrementFactory(connection);

export default AutoIncrement;
