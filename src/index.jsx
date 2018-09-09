import React from 'react';
import ReactDOM from 'react-dom';

import Container from './containers';
import styles from './styles.css';

console.log('Styles ', styles);
const App = () => <Container />;

export default App;
ReactDOM.render(<App />, document.getElementById('rm-root'));
