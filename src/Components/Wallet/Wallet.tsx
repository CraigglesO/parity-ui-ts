import * as React from 'react';

import './Wallet.css';

interface State { }

// tslint:disable-next-line
class Wallet extends React.Component<any, State> {
  render() {
    return (
      <div className="Wallet">
        This is the Wallet block
      </div>
    );
  }
}

export default Wallet;
