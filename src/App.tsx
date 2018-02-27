import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <div className="panel">
          <div className="panel-title">panel-title</div>
          <div className="panel-body">panel-body</div>
        </div>
        <h2> Hello world!</h2>
        <Nav />
      </div>
    );
  }
}

export default App;
