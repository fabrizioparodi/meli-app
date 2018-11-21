import React, { Component } from "react";

import logo from "./../../assets/images/Logo_ML.png";
import logo2 from "./../../assets/images/ic_Search.png";

import "./SearchBox.css";

class SearchBox extends Component {
  state = {
    searchValue: ""
  };

  keyDownHandler = event => {
    if (event.keyCode === 13) {
      this.search();
    }
  };

  changed = event => {
    this.setState({ searchValue: event.target.value });
  };

  search = () => {
    this.props.history.push({
      pathname: "/items",
      search: "?search=" + this.state.searchValue
    });
  };

  render() {
    return (
      <div className="search-box">
        <div className="search-box-container">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={() => {
              this.props.history.push("/");
            }}
          />
          <span className="input-group">
            <input
              className="form-control input"
              type="text"
              value={this.state.searchValue}
              onChange={this.changed}
              onKeyDown={this.keyDownHandler}
              placeholder="Nunca dejes de buscar"
            />
            <span className="input-group-btn">
              <button className="search-button" onClick={this.search}>
                <img src={logo2} alt="Logo" />
              </button>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBox;
