import React from 'react';
import AppContext from '../context.js';
import { Link } from 'react-router-dom';

export default class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const style = {};
    style.card = {
      width: '33.33%',
      display: 'inline-block'
    };
    style.text = {
      color: 'black',
      textAlign: 'center'
    };
    style.link = {
      color: '#000000',
      textAlign: 'center',
      cursor: 'pointer',
      fontWeight: '400'
    };
    style.video = {
      backgroundSize: 'cover'
    };
    return (
      <div style={style.card} id="campaignBackgroundDiv" className="justify-content-center align-items-center rounded pb-2 mb-1 mt-1">
        <p className="mt-2 campaignTitleText" style={style.text}>{this.props.campaignTitle}</p>
        <div className="d-flex justify-content-center " style={{ width: '100%', height: '30%' }}>
          <img className = "pb-1 campaignContent" src={'/' + this.props.campaignContent} style={style.video}/>
        </div>
        <div className="d-flex justify-content-center">
          <Link style={style.link} to={`/campaign-details/${this.props.campaignID}`}>
            <span className="campaignDetailsLink">View More <i className="fas fa-plus-circle"></i></span>
          </Link>
        </div>
      </div>
    );
  }
}
Campaign.contextType = AppContext;
