const resolvers = {
  Query: {
    books: () => {
      return [
        {
          id: 1,
          name: "Hello World",
          genre: "Fantasy"
        },
        {
          id: 2,
          name: "Hello World Fake",
          genre: "Comedy"
        }
      ];
    }
  }
};

module.exports = resolvers;
