import * as React from 'react';
import { Link } from 'react-router-dom';

// Components
// import TransactionLink from './TransactionLink/TransactionLink';
import RecentActivity from './RecentActivity/RecentActivity';

// Stylesheets
import './Summary.css';

// Assets
const user     = require('../../Assets/me.png');
const eth      = require('../../Assets/eth.svg');
// const priceTag = require('../../Assets/PriceTag.svg');

interface State { }

// tslint:disable-next-line
class Summary extends React.Component<any, State> {
  render() {
    return (
      <div className="Summary">

        <div className="col-lg-12">
          <div className="header">

            <div className="signout">Sign out</div>

            <div className="user">
              <img id="user-img" alt="user-img" src={user}/>
              <div id="user-name">
                <div id="welcome">Welcome back,</div>
                <div>Connor</div>
              </div>
            </div>

            {/*<TransactionLink img={priceTag} link="/summary" text="this is text"/>*/}

          </div>
        </div>

        <div className="col-md-4">
          <div className="parity-container">
            <div>
              <span id="e-balance">Ethereum balance</span>
              <span id="e-details">
                <Link to="wallet">Details &#9658;</Link>
              </span>
            </div>
            <div id="e-amount">
              <span>
                <img src={eth} id="eth-currency" alt="eth" />
              </span>
              <span id="e-total">25.01</span><span className="e-eth">ETH</span>
            </div>
            <div id="e-add-money">Add money</div>
            <div id="e-transfer">Make a transfer</div>
          </div>
          <div className="parity-container">
            Input2
          </div>
          <div className="parity-container">
            Input3
          </div>
        </div>
        <div className="col-md-8">
          <div className="parity-container">
            <div id="recent">Recent activity</div>
            <RecentActivity />
            <div id="view-all">View all</div>
          </div>
        </div>

      </div>
    );
  }
}

export default Summary;
