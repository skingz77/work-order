import React from "react";
import { connect } from "react-redux";
import { filterWorkers, checked } from "../actions";
class SearchBar extends React.Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
    this.checker = this.checker.bind(this);
  }
  change(event) {
    this.props.filterWorkers(event.target.value);
  }
  checker(event){
    this.props.checked(event.target.checked);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          onChange={this.change}
          placeholder="Filter by worker name..."
        />
        <div id="toggle">
          <h4>Earliest First</h4>
          <label className="switch">
            <input type="checkbox" onChange={this.checker}/>
            <span className="slider round" />
          </label>
          <h4>Latest First</h4>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    filterWorkers,
    checked
  }
)(SearchBar);
