import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { PostsType, AuthorType } from './Types.js';
import AuthorModule from '../models/Author.js';
import PostModule from '../models/Post.js';

export const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    addPost: {
      type: PostsType,
      description: `add a new post`,
      args: {
        title: { type: GraphQLString },
        authorId: { type: GraphQLString },
      },
      resolve(parent, args) {
        return new PostModule({
          title: args.title,
          authorId: args.authorId
        }).save();
      }
    },
    addAuthor: {
      type: AuthorType,
      description: `add a new author`,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return new AuthorModule({
          name: args.name,
          description: args.description,
        }).save();
      }
    }

  }
});

