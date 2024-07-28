import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/model.js";




dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_DB);

mongoose.connection.once('open', () => console.log("start connection with database"))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.get('/', (req, res) => {
  res.redirect('/graphql');
});

app.listen(3000, () => console.log("start server in port 3000"));

