import * as React from 'react';

// Components
import Navigation from './Navigation/Navigation';

import './App.css';

interface State { }

// tslint:disable-next-line
class App extends React.Component<any, State> {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="right-align">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
