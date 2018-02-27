import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Hello from './components/Hello';

ReactDOM.render(
  <Hello name="World" enthusiasmLevel={2} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
