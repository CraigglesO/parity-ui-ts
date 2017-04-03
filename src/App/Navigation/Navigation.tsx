import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Additional Frameworks
const FontAwesome = require('react-fontawesome');

// Stylesheets
import './Navigation.css';

// Assets
const logo = require('../../Assets/logo.svg');

interface Props { }
interface State { }

class Navigation extends React.Component<Props, State> {
  render() {
    return (
      <div className="Navigation">

        <img src={logo} id="parity" alt="logo" />

        <NavLink to="/Summary">
          <div className="Nav-Obj" id="Summary">
            <FontAwesome className="font-awesome" name="home" />
            <span className="Nav-Obj-text">Dashboard</span>
          </div>
        </NavLink>

        <NavLink to="/Wallet">
          <div className="Nav-Obj" id="Wallet">
            <FontAwesome className="font-awesome" name="address-book-o" />
            <span className="Nav-Obj-text">Wallet</span>
          </div>
        </NavLink>

        <NavLink to="/Activity">
          <div className="Nav-Obj" id="Activity">
            <FontAwesome className="font-awesome" name="tasks" />
            <span className="Nav-Obj-text">Activity</span>
          </div>
        </NavLink>

        <NavLink to="/SendRequest">
          <div className="Nav-Obj" id="SendRequest">
            <FontAwesome className="font-awesome" name="balance-scale" />
            <span className="Nav-Obj-text">Send/Request</span>
          </div>
        </NavLink>

        <NavLink to="/Tools">
          <div className="Nav-Obj" id="Tools">
            <FontAwesome className="font-awesome" name="wrench" />
            <span className="Nav-Obj-text">Tools</span>
          </div>
        </NavLink>

        <NavLink to="/Settings">
          <div className="Nav-Obj" id="Settings">
            <FontAwesome className="font-awesome" name="cog" />
            <span className="Nav-Obj-text">Settings</span>
          </div>
        </NavLink>

        <div className="logout-alarm">
          <span>
            <NavLink to="/Logout">
              <div className="Nav-Obj" id="Logout">
                <FontAwesome className="font-awesome" size="2x" name="sign-out" />
              </div>
            </NavLink>
          </span>

          <span>
            <NavLink to="/Alerts">
              <div className="Nav-Obj" id="Alert">
                <FontAwesome className="font-awesome" size="2x" name="bell" />
              </div>
            </NavLink>
          </span>
        </div>

      </div>
    );
  }
}

export default Navigation;
