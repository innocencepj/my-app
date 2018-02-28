import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Login />
      </div>
    );
  }
}

export default App;
