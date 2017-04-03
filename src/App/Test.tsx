import * as React from 'react';
import * as localForage from "localforage";

localForage.config({
    driver      : localForage.WEBSQL, // Force WebSQL; same as using setDriver()
    name        : 'parity-client-ts',
    version     : 1.0,
    size        : 4980736,            // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'keyvaluepairs',    // Should be alphanumeric, with underscores.
    description : 'Parity browser persistant store'
});

localForage.setItem('key', 'peanuts').then(function () {
  return localForage.getItem('key');
}).then(function (value) {
  console.log("value", value);
}).catch(function (err) {
  console.log("ERROR", err);
});

interface Props {
  value?: string;
}

interface State {
  time: number;
}

// tslint:disable-next-line
class Test extends React.Component<Props, State> {
  state = {
    time: 12
  };

  render() {
    const { value } = this.props;
    const { time } = this.state;
    return (
      <div className="Test">
      {value}, {time}
      </div>
    );
  }
}

export default Test;
