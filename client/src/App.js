import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Builds from "./components/Builds";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Builds} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
