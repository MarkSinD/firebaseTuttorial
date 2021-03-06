import {Route, Switch, BrowserRouter, Link} from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Reset from "./component/Reset";
import Dashboard from "./component/Dashboard";
import Header from "./component/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/reset">
            <Reset />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
