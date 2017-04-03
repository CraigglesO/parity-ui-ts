import * as React from 'react';
import { Link } from 'react-router-dom';

// Stylesheets
import './TransactionLink.css';

// Assets

interface Props {
  img:  string;
  text: string;
  link: string;
}
interface State { }

class TransactionLink extends React.Component<Props, State> {
  render() {
    const { img, text, link } = this.props;
    return (
      <Link to={link}>
        <div className="TransactionLink">
          <img className="tx-img" src={img} alt="img" />
          <div className="tx-text">{text}</div>
        </div>
      </Link>
    );
  }
}

export default TransactionLink;
