require('normalize.css');
require('styles/App.scss');

import React from 'react';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="app"></div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
