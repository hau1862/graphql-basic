const resolvers = {
  Query: {
    async movies(parent, args, context) {
      return await context.databaseMethod.getAllMovies();
    },
    async authors(parent, args, context) {
      return await context.databaseMethod.getAllAuthors();
    },
    async movie(parent, args, context) {
      return await context.databaseMethod.getMovieById(args.id);
    },
    async author(parent, args, context) {
      return await context.databaseMethod.getAuthorById(args.id);
    },
  },
  Mutation: {
    async createMovie(parent, args, context) {
      return await context.databaseMethod.createMovie(args);
    },
    async createAuthor(parent, args, context) {
      return await context.databaseMethod.createAuthor(args);
    }
  },
  Movie: {
    async author(parent, args, context) {
      return await context.databaseMethod.getAuthorById(parent.authorId);
    }
  },
  Author: {
    async movies(parent, args, context) {
      return await context.databaseMethod.getAllMovies({ authorId: parent.id });
    }
  }
};

module.exports = resolvers;
