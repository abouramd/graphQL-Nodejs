import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } from "graphql";
import AuthorModule from '../models/Author.js';
import PostModule from '../models/Post.js';

export const PostsType = new GraphQLObjectType({
  name: 'Posts',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    authorId: { type: GraphQLID },
    authorInfo: {
      type: AuthorType,
      resolve(parent, args) {
        return AuthorModule.findOne({ id: parent.authorId });
      }
    },
  })
});

export const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    posts: {
      type: new GraphQLList(PostsType),
      resolve(parent, args) {
        return PostModule.find({ authorId: parent.id });
      }
    }
  })
});



