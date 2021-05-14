const graphql = require("graphql");
const Movie = require("../models/movie");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} = graphql;

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //data to be fetched from the database
        return Movie.findById(args.id);
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        //data to be fetched from the database
        return Movie.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLID },
        genre: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        let movie = new Movie({
          id: args.id,
          title: args.title,
          genre: args.genre,
          description: args.description,
        });
        return movie.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
