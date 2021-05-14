import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// custom components
import Movie from "./components/movie.component";
import AddMovie from "./components/addMovie";

// apollo client setup
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1 id="headingText">Abhishek Movie List 🎥</h1>
        <div className="movie-container">
        <Movie />
        <AddMovie />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
