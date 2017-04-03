import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Additional Frameworks
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Assets/font-awesome-4.7.0/css/font-awesome.min.css';

// Components
import App from './App/App';
import {
  // Activity,
  // Apps,
  // Notifications,
  // SendReceive,
  // Store,
  Summary,
  Wallet
} from './Components';

// Stylesheets
import './index.css';

ReactDOM.render(
  <Router>
    <App>
      <Route path="/summary" component={Summary} />
      <Route path="/wallet" component={Wallet} />
    </App>
  </Router>,
  document.getElementById('root') as HTMLElement
);
