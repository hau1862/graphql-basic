const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const databaseName = "graphqltest";
const mongoDBLink = `mongodb+srv://${username}:${password}@${databaseName}.fo47phi.mongodb.net/?retryWrites=true&w=majority`;

async function connectDatabase() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoDBLink,
      {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // ueUnifiedTopology: true,
        // useFindAndModify: false
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = connectDatabase;
