import React, { Component } from 'react';
import ClassCount from './ClassCounter';
import FunctionState from './FunctionCounter';

class App extends Component {
  render() {
    return (
      <div>
        <ClassCount/>
        <FunctionState/>
      </div>
    );
  }
}

export default App;
