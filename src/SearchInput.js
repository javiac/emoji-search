import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func,
    value: PropTypes.string,
  };

  handleChange = (event) => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input
            value={this.props.value}
            onChange={this.handleChange}
            placeholder="Search emoji"
          />
        </div>
      </div>
    );
  }
}
