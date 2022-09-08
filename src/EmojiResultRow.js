import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

const failingCodes = {
  "32": 1,
  "30": 1,
  "34": 1,
  "36": 1,
  "33": 1,
  "31": 1,
  "37": 1,
  "39": 1,
  "38": 1,
  "23": 1,
  "2a": 1,
  ae: 1,
  a9: 1,
  "35": 1,
};

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string,
  };

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);

    if (failingCodes[codePointHex]) {
      return null;
    }

    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy emoji</span>
      </div>
    );
  }
}
