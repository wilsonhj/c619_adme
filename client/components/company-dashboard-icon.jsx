import React from 'react';
import AppContext from '../context';

export default class CompanyIcon extends React.Component {
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
      <svg onMouseOver={() => { this.handleHoverOn(); }} onMouseLeave={() => { this.handleHoverOff(); }} xmlns="http://www.w3.org/2000/svg" width='2.8rem' height='2.8rem' viewBox="5 5 600 600" fillRule="evenodd" clipRule="evenodd" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality">
        <defs>
          <style>
            {` .str0{stroke: ${color};stroke-width:8.46;stroke-linecap:round;stroke-linejoin:round}.fil0{fill: none}`}
          </style>
        </defs>
        <path className="fil0 str0" d="M131 140h210v223h-77v81h-28v303H131zM502 140h210v607H502z" fill={color} />
        <path className="fil0 str0" d="M236 444h231v303H236z" fill={color}/>
        <path className="fil0 str0" d="M264 363h176.531v81.013H264zM381 329h42.322v33.517H381zM154 97h96.73v43.523H154zM577 666h60.457v80.969H577zM322 666h60.457v80.969H322zM149 158h35.041v35.041H149zM219 158h35.041v35.041H219zM288 158h35.041v35.041H288zM149 228h35.041v35.041H149zM219 228h35.041v35.041H219zM288 228h35.041v35.041H288zM149 298h35.041v35.041H149zM219 298h35.041v35.041H219zM288 298h35.041v35.041H288zM149 367h35.041v35.041H149zM149 437h35.041v35.041H149zM149 507h35.041v35.041H149zM149 576h35.041v35.041H149zM149 646h35.041v35.041H149z" fill={color} />
        <path className="fil0 str0" d="M293 382h24.184v42.319H293zM340 382h24.184v42.319H340zM386 382h24.184v42.319H386zM265 460h35.041v35.041H265zM335 460h35.041v35.041H335zM404 460h35.041v35.041H404zM265 530h35.041v35.041H265zM335 530h35.041v35.041H335zM404 530h35.041v35.041H404zM265 600h35.041v35.041H265zM335 600h35.041v35.041H335zM404 600h35.041v35.041H404zM520 158h35.041v35.041H520zM590 158h35.041v35.041H590zM660 158h35.041v35.041H660zM520 228h35.041v35.041H520zM590 228h35.041v35.041H590zM660 228h35.041v35.041H660zM520 298h35.041v35.041H520zM590 298h35.041v35.041H590zM660 298h35.041v35.041H660zM520 367h35.041v35.041H520zM590 367h35.041v35.041H590zM660 367h35.041v35.041H660zM520 437h35.041v35.041H520zM590 437h35.041v35.041H590zM660 437h35.041v35.041H660zM520 507h35.041v35.041H520zM590 507h35.041v35.041H590zM660 507h35.041v35.041H660zM520 576h35.041v35.041H520zM590 576h35.041v35.041H590zM660 576h35.041v35.041H660z" fill={color} />

      </svg>

    );
  }
}
CompanyIcon.contextType = AppContext;
