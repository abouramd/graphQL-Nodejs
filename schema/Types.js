import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

export const PostsType = new GraphQLObjectType({
  name: 'Posts',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    authorInfo: {
      type: AuthorType,
      resolve(parent, args) {
        return AuthorModule.find({ name: parent.author });
      }
    },
  })
});

export const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    posts: {
      type: new GraphQLList(PostsType),
      resolve(parent, args) {
        return PostModule.find({ author: parent.name });
      }
    }
  })
});



