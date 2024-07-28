import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { PostsType, AuthorType } from './Types.js';
import AuthorModule from '../models/Author.js';
import PostModule from '../models/Post.js';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    authors: {
      type: new GraphQLList(AuthorType),
      description: `get all authors`,
      resolve(parent, args) {
        return AuthorModule.find({});
      }
    },
    posts: {
      type: new GraphQLList(PostsType),
      description: `get all posts`,
      resolve(parent, args) {
        return PostModule.find({});
      }
    },
    author: {
      type: AuthorType,
      description: `get author by Id`,
      args: { id: { type: GraphQLString } },
      async resolve(parent, args) {
        return AuthorModule.findOne({ id: args.id });
      }
    },
    post: {
      type: PostsType,
      description: `get post by Id`,
      args: { id: { type: GraphQLString } },
      async resolve(parent, args) {
        return PostModule.findOne({ id: args.id });
      }
    }
  }
});
