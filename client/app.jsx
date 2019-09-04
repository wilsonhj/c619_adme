import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'landing-page',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {
    return null;
  }

}
