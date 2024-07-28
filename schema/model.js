import { GraphQLSchema } from "graphql";
import { RootQuery } from "./Query.js";
import { RootMutation } from "./Mutation.js";



const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

export default schema; 
