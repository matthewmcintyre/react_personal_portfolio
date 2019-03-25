import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { dosomething } from "../actions/Actions";

const Header = styled.h1`
  font-size: 20px;
`;

class MyClass extends Component {
  render() {
    return (
      <Header onClick={() => this.props.dosomething()}>
        {this.props.message}
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  message: state.myReducer.message
});

const myActions = { dosomething };

export default connect(
  mapStateToProps,
  myActions
)(MyClass);
