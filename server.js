const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

const DATABASE_URL = process.env.DATABASE_URL;

// Connection to MongoDb Database
mongoose.connect(
  "mongodb+srv://Abhishek:A12345678@nodejsproject.efica.mongodb.net/watchList?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
});

// Allow cross-origin requests
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
