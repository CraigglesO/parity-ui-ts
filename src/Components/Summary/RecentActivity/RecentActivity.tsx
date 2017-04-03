import * as React from 'react';

// Stylesheets
import './RecentActivity.css';

// Assets
const txs = [
  {
    to: 'Connor',
    from: 'Cassie',
    month: 'AUG',
    day: 1,
    value: 12.04,
    fee: 0.01,
    trasactionId: '0x63Cf90D3f0410092FC0fca41846f596223979195'
  },
  {
    to: 'Thomas',
    from: 'Connor',
    month: 'JUL',
    day: 3,
    value: (-1.00),
    fee: 0.005,
    trasactionId: '0x63Cf90D3f0410092FC0fca41846f596223979195'
  },
  {
    to: 'Cassie',
    from: 'Connor',
    month: 'MAY',
    day: 21,
    value: (-8.00),
    fee: 0.015,
    trasactionId: '0x63Cf90D3f0410092FC0fca41846f596223979195'
  }
];

interface Props { }
interface State { }

class RecentActivity extends React.Component<Props, State> {
  openTx(e: any) {
    (e.currentTarget.style.maxHeight === '100px')
      ? e.currentTarget.style.maxHeight = '300px'
      : e.currentTarget.style.maxHeight = '100px';
  }
  render() {
    let localTx = txs.map((tx, i) => {
      return (
        <div
          key={i}
          className="tx"
          style={(i % 2 === 0) ? {backgroundColor: '#ebedf2'} : {backgroundColor: 'white'}}
          onClick={this.openTx}
        >
          <div className="head">
            <span className="time">
              <div className="time-month">{tx.month}</div>
              <div className="time-day">{tx.day}</div>
            </span>
            <span className="send-receive">
              <div className="to-from">{(tx.to === 'Connor') ? tx.from : tx.to}</div>
              <div className="tx-type">{(tx.to === 'Connor') ? 'Money Recieved' : 'Money Sent'}</div>
            </span>
            <span
              className="value"
              style={(tx.value > 0)
                ? {color: '#96CE1D'}
                : {color: '#FC6B4C'}}
            >
              {tx.value}<span className="e-eth"> ETH</span>
            </span>
          </div>
          <div className="body">
            <div>Body</div>
            <div>Body</div>
            <div>Body</div>
            <div>Body</div>
          </div>
        </div>
      );
    });

    return (
      <div className="RecentActivity">{localTx}</div>
    );
  }
}

export default RecentActivity;
