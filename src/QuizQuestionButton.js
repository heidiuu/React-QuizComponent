import React, { Component } from "react";

class QuizQuestionButton extends Component {
  handleClick() {
    console.log("QuizQuestionButton handleClick");
    this.props.clickHandler(this.props.button_text);
  }
  render() {
    this.props.clickHandler(this.props.button_text);
    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.button_text}
        </button>
      </li>
    );
  }
}

export default QuizQuestionButton;
