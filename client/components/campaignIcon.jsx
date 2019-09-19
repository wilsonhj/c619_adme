import React from 'react';

export default class CampaignIcon extends React.Component {
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
      <svg onMouseOver={() => { this.handleHoverOn(); }} onMouseLeave={() => { this.handleHoverOff(); }} xmlns="http://www.w3.org/2000/svg" viewBox="100 90 352 940" >

        <path d="M39.9 69.9l.2-1.8-3-1.6H37c-.1-.1-.2-.1-.3-.2-.3-.3-.5-.6-.5-1v-.5l.3-3.4-1.6-.8-5.5 9c0 .1 10.5.3 10.5.3zm3.7-1.3c14.7-8 29.6-15.6 44.1-23.9-2-3.5-3.8-7-5.7-10.5L38 58.3c.4.2.8.4 1.1.6.1.1.3.2.4.3.3.3.5.6.5 1v.5l-.3 3.3 3 1.6h.1c.1.1.2.1.3.2.3.2.4.5.5.9v1.9zm47.1-25.7l5.1-3c.1 0 .1-.1.2-.1l.3-.3c.2-.3.3-.7.3-1.1 0-.2-.1-.3-.2-.5-.7-1.3-1.4-2.5-2.1-3.8l-2.1-3.9c-.1-.1-.2-.3-.3-.4-.3-.3-.8-.4-1.2-.3-.2 0-.3.1-.5.2L85 32.5c2 3.4 3.8 6.9 5.7 10.4zm-9.4 8.9v33.7c0 .1-.1.3-.1.4-.2.5-.6.8-1 1-.2.1-.3.1-.4.1H10.3c-.1 0-.3-.1-.4-.1-.5-.2-.8-.6-1-1-.1-.1-.1-.3-.1-.4V16.2 16c0-.1.1-.3.1-.4.2-.5.6-.8 1-1 .1-.1.3-.1.4-.1H32.9c-.4-1.6-.2-3.3.5-4.8.3-.7.7-1.3 1.2-1.8.6-.9 1.4-1.6 2.3-2 1-.5 2-.7 3.1-.7.9 0 1.9.1 2.8.5.9.3 1.8.8 2.5 1.5.6.5 1.1 1.1 1.5 1.8.4.6.6 1.3.8 2 0 .1.1.2.1.3.2.1.3.3.5.4.7.7 1.3 1.5 1.8 2.3.1.1.1.3.2.4H79.8c.1 0 .3.1.4.1.5.2.8.6 1 1 .1.1.1.3.1.4v14.5l7.1-3.9c.5-.3 1-.4 1.5-.5.7-.1 1.4-.1 2 .1.7.2 1.4.5 2 1 .3.3.6.6.8.9.1.1.2.3.3.4l2.1 3.9c.7 1.3 1.4 2.5 2.1 3.8.3.5.4 1 .5 1.5.1.7.1 1.5-.1 2.2-.2.7-.6 1.4-1.1 2-.4.4-.8.8-1.4 1.1l-15.8 8.9zm-3.5-19.4V17.9h-27c0 .3 0 .6-.1.9-.1.8-.3 1.5-.6 2.2-.8 1.7-2.1 3.1-3.7 3.9-.7.4-1.4.6-2.2.8-.4.1-.8.1-1.1.1h-.4c-.4 0-.8 0-1.1-.1-.8-.1-1.5-.3-2.2-.6-1.6-.7-3-2-3.8-3.6-.4-.7-.7-1.5-.8-2.3-.1-.5-.2-1-.2-1.4H12.2v65.6h65.6V53.8L42.4 73.2h-.1-.1s-.1 0-.2.1c-.1 0-.2 0-.2.1h-.1-.1-.1l-15.2-.3h-.4l-.6-.3c-.5-.4-.8-1.1-.7-1.7 0-.1.1-.3.1-.4 0-.1.1-.1.1-.2l7.9-13c.1-.1.1-.2.2-.3.1-.1.2-.2.3-.2h.1s.1 0 .1-.1l44.4-24.5zM38.6 20.1c.4.7 1.1 1.3 1.8 1.8.6.3 1.2.5 1.9.6h.4c.7 0 1.3-.1 1.9-.4.9-.4 1.7-1.1 2.1-1.9.2-.4.4-.8.5-1.3.1-.5.2-1.1.1-1.6 0-.4-.1-.8-.3-1.1-.2.5-.5.9-.8 1.3-.6.8-1.4 1.5-2.3 2-.7.4-1.4.6-2.2.8-.3.1-.7.1-1 .1h-.4c-.3 0-.6 0-1-.1-.3-.1-.5-.1-.7-.2zm-.2-3.8c.5.3 1.1.4 1.7.4h.1c.6 0 1.2-.1 1.7-.4.5-.2.9-.6 1.3-1 .3-.3.5-.6.6-1v-.1c.1-.5.1-1-.1-1.5-.1-.4-.2-.7-.4-1-.2-.4-.5-.7-.8-1-.2-.2-.4-.3-.6-.5h-.1-.1c-.5-.2-1-.3-1.5-.3s-1 .1-1.5.3c-.5.2-.9.4-1.2.8-.3.3-.6.6-.8 1-.2.3-.3.7-.4 1.1 0 .5.1 1.1.3 1.6.2.4.4.7.6 1 .3.4.7.7 1.2 1v-.4c-.1 0 0 0 0 0z" fillRule="evenodd" clipRule="evenodd" fill={color} />

      </svg>
    );
  }
}
