import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SearchBox from "./components/SearchBox/SearchBox";
import SearchResults from "./components/SearchResults/SearchResults";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={SearchBox} />
        <Switch>
          <Route path="/items" exact component={SearchResults} />
          <Route path="/items/:id" exact component={ProductDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
