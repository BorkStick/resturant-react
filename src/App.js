import "./App.css";
import TopNav from "./components/layout/nav/TopNav";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <TopNav />

      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
