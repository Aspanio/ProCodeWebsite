import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from 'container';

import styles from './styles.css'

class App extends Component {
  
  render() {
    return <Container />;
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('rm-root'));
