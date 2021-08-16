import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import About from "./Components/About";
import Home from "./Components/Home";
import Service from "./Containers/Service"
import Client from "./Containers/Client"
import Blog from "./Containers/Blog"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Products from "./Components/Products"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Slider />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About} exact></Route>
          <Route path="/service" component={Service} exact></Route>
          <Route path="/client" component={Client} exact></Route>
          <Route path="/blog" component={Blog} exact></Route>
          <Route path="/product" component={Products} exact></Route>
          <Route path="/contact" component={Contact} exact></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
