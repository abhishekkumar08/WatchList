import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/contact.component";
import Nav from "./components/header/header.component";

// custom components
import Movie from "./components/movie/movie.component";
import AddMovie from "./components/addMovie/addMovie.component";
import About from "./components/Contact/contact.component";
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
      <Header/>
      <Route path='/' exact={true} component={Movie} />
      <Switch>
        <Route path="/Contact" component ={Contact}/>
        <Route path="/movie.component" exact component={Movie}/>
        <Route path="/addMovie" exact component={AddMovie}/>
        
      </Switch>
      
    </Router>
    </ApolloProvider>
  );
}

export default App;
