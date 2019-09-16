import React from 'react';
import { NavLink } from 'reactstrap';
import AppContext from '../context.js';

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
      width: '100%',
      backgroundColor: '#f8f9fa'
    };
    style.text = {
      color: 'black',
      textAlign: 'center'
    };
    style.link = {
      color: '#0070c9',
      textAlign: 'center',
      cursor: 'pointer',
      fontWeight: '400',
      paddingBottom: '4px'
    };
    style.video = {
      height: '50%',
      width: '40%',
      backgroundSize: 'contain'
    };
    return (
      <div className="creatorTab justify-content-center align-items-center rounded pb-4" style={style.card}>
        <h2 style={style.text}>{this.props.campaignTitle}</h2>
        <div className="d-flex justify-content-center" style={{ width: '100%' }}>
          <img className = "pb-4" src={this.props.campaignContent} style={style.video}/>
        </div>
        <NavLink style={style.link} onClick={event => {

          this.context.setView('campaign-details', { campaignID: this.props.campaignID });
        }}>
              View More <i className="fas fa-plus-circle"></i>
        </NavLink>
      </div>
    );
  }
}
Campaign.contextType = AppContext;
