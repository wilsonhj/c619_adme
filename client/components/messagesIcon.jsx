import React from 'react';

export default class MessagesIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverStatus: false
    };
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }

  handleHoverOn() {
    this.setState({
      hoverStatus: true
    });
  }

  handleHoverOff() {
    this.setState({
      hoverStatus: false
    });
  }

  render() {
    let color = '#EEEEEE';
    if (this.state.hoverStatus) {
      color = '#000000';
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" onMouseOver={() => { this.handleHoverOn(); }} onMouseLeave={() => { this.handleHoverOff(); }} viewBox="0 0 100 125">
        <path d="M12.8 16.038c-3.8 0-6.8 3.1-6.8 6.9v25.6c0 3.8 3 6.9 6.8 6.9h1.8v8.7c0 1.1.9 2 2 2 .5 0 1.1-.2 1.5-.6l9.8-10.1h9.8v11c0 3.8 3 6.9 6.8 6.9h27.7l9.8 10.1c.8.8 2 .8 2.8 0 .4-.4.6-.9.6-1.4v-8.7h1.8c3.8 0 6.8-3.1 6.8-6.9v-25.6c0-3.8-3-6.9-6.8-6.9H44.4c-3.8 0-6.8 3.1-6.8 6.9v5.1c0 1.1.9 2 2 2s2-.9 2-2V40.738c0-1.7 1.2-2.9 2.8-2.9h42.8c1.6 0 2.8 1.2 2.8 2.9v25.6c0 1.7-1.2 2.9-2.8 2.9h-3.8c-1.1 0-2 .9-2 2v5.8l-7-7.2c-.4-.4-.9-.6-1.4-.6H44.4c-1.6 0-2.8-1.2-2.8-2.9v-11h13.9c3.8 0 6.8-3.1 6.8-6.9v-5.8c0-1.1-.9-2-2-2s-2 .9-2 2V48.538c0 1.7-1.2 2.9-2.8 2.9H27.1c-.5 0-1.1.2-1.4.6l-7 7.2v-5.8c0-1.1-.9-2-2-2h-3.8c-1.6 0-2.8-1.2-2.8-2.9v-25.6c0-1.7 1.2-2.9 2.8-2.9h42.8c1.6 0 2.8 1.2 2.8 2.9v5.7c0 1.1.9 2 2 2s2-.9 2-2v-5.8c0-3.8-3-6.9-6.8-6.9H12.8z" fill={color} />

      </svg>
    );
  }
}
