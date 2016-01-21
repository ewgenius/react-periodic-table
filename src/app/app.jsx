import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import MyTheme from './theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

class App extends React.Component {
  constructor() {
    super();
  }

  getChildContext() {
    return {muiTheme: ThemeManager.getMuiTheme(MyTheme)};
  }

  render() {
    return (
      <div>
        <AppBar></AppBar>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

ReactDom.render(< App />, document.getElementById('main'));
