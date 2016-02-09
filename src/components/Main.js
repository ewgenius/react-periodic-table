import 'normalize.css';
import 'styles/App.scss';
import 'styles/Element.scss';

import React from 'react';

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        element: {
          width: props.width,
          height: props.height
        },
        symbol: {
          backgroundColor: props.background
        }
      }
    };
  }

  render() {
    return <div className='element' style={this.state.style.element}>
      <div className='index'>{this.props.index}</div>
      <div style={this.state.style.symbol} className='symbol'>
        {this.props.symbol}
      </div>
    </div>
  }
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardWidth: 90,
      cardHeight: 90
    };
  }

  render() {
    return <div className='app'>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <Element width={this.state.cardWidth} height={this.state.cardHeight} symbol='H' index='1'/>)
      }
    </div>
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
