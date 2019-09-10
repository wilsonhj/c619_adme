import React from 'react';

export default class NotificationIcon extends React.Component {
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
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" onMouseOver={() => { this.handleHoverOn(); }} onMouseLeave={() => { this.handleHoverOff(); }} viewBox="0 0 51 63.8">
        <path className="st0" d="M1.7 12.4c-.6 0-1-.4-1-1 0-.1 0-.2.1-.4C2.4 6.1 6.3 2.3 11.2.7c.5-.2 1.1.1 1.3.7s-.1 1.1-.7 1.3c-4.3 1.4-7.7 4.7-9.1 9-.1.4-.5.6-1 .7z" fill={color}/>
        <path className="st0" d="M35 51H16C7.2 51 0 43.8 0 35V16c0-.4 0-.9.1-1.3 0-.6.5-1 1.1-.9s1 .5.9 1.1V35c0 7.7 6.3 14 14 14h19c7.7 0 14-6.3 14-14V16c0-7.7-6.3-14-14-14H14.9c-.6 0-1-.4-1.1-.9 0-.5.4-1 .9-1 .4-.1.9-.1 1.3-.1h19c8.8 0 16 7.2 16 16v19c0 8.8-7.2 16-16 16z" fill={color} />
        <path className="st0" d="M25.5 44.4c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9zm0-7.9c-1.6 0-2.9 1.3-2.9 2.9 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9c0-1.6-1.3-2.9-2.9-2.9zM25.5 32.5c-2.8-.1-5-2.5-4.9-5.3V9.4c0-1.7 1.9-2.8 4.9-2.8s4.9 1.1 4.9 2.8v17.7c.1 2.9-2.1 5.2-4.9 5.4zm0-23.9c-1.9 0-2.9.6-2.9.8v17.7c-.1 1.7 1.2 3.2 2.9 3.3 1.7-.1 3-1.6 2.9-3.3V9.4c0-.2-1-.8-2.9-.8z" fill={color}/>

      </svg>
    );
  }
}
