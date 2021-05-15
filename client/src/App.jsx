import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// custom components
import Movie from "./components/movie/movie.component";
import AddMovie from "./components/addMovie/addMovie.component";
import About from "./components/about/about.component";
import Header from "./components/header/header.component";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Route exact path="/" component={Movie} />
        <Route exact path="/addMovie" component={AddMovie} />
        <Route exact path="/about" component={About} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
