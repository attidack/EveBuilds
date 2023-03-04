import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";
import Builds from "./components/Builds";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={Builds} />
      </Router>
    </ApolloProvider>
  );
};

export default App;