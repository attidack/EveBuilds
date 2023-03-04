import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";
import Builds from "./components/Builds";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Builds} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
