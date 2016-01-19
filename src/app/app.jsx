import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';

class App extends React.Component {
  render() {
    return (
      <div>test</div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('main'));
