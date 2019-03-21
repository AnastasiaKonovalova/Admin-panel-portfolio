import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
  render() {
    return (
      <div>
        <StyledTitle>My React App!</StyledTitle>
        <h1>My React App!</h1>
      </div>
    );
  }
}

export default App;
