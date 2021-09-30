import "./App.css";
import TopNav from "./components/layout/nav/TopNav";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <TopNav />

      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/store-locator">
            <Locations />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
