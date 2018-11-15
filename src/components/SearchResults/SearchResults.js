import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";

import SearchResultBox from "./SearchResultBox/SearchResultBox";
import BreadCumbs from "./../Breadcumbs/Breadcumbs";
import "./SearchResults.css";

class SearchResults extends Component {
  state = {
    resultList: null,
    filters: []
  };

  componentWillReceiveProps = props => {
    this.doSearch(props);
  };

  componentDidMount = () => {
    this.doSearch(this.props);
  };

  doSearch(props) {
    const queryParams = queryString.parse(props.location.search);
    axios.get(`api/items?q=${queryParams.search}&limit=4`).then(response => {
      this.setState({
        resultList: response.data.results,
        filters: response.data.filters
      });
    });
  }

  render() {
    return this.state.resultList ? (
      <center>
        <BreadCumbs filters={this.state.filters} />
        <div className="search-results card">
          <ul className="search-results-card">
            {this.state.resultList.map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  <SearchResultBox item={item} />
                  {this.state.resultList.length - 1 !== idx ? <hr /> : null}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </center>
    ) : null;
  }
}

export default SearchResults;
