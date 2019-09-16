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
<<<<<<< HEAD
      width: '100%',
      backgroundColor: '#f8f9fa'
=======
      width: '33.33%',
      display: 'inline-block'
>>>>>>> d1fcf0609ca35868b3247860339f6ed49470c98e
    };
    style.text = {
      color: 'black',
      textAlign: 'center'
    };
    style.link = {
      color: '#0070c9',
      textAlign: 'center',
      cursor: 'pointer',
      fontWeight: '400'
    };
    style.video = {
      backgroundSize: 'cover'
    };
    return (
      <div style={style.card} id="campaignBackgroundDiv" className="creatorTab justify-content-center align-items-center rounded pb-2 mb-1 mt-1">
        <p className="mt-2 campaignTitleText" style={style.text}>{this.props.campaignTitle}</p>
        <div className="d-flex justify-content-center " style={{ width: '100%', height: '30%' }}>
          <img className = "pb-1 campaignContent" src={this.props.campaignContent} style={style.video}/>
        </div>
        <NavLink style={style.link} onClick={event => {

          this.context.setView('campaign-details', { campaignID: this.props.campaignID });
        }}>
          <span className="campaignDetailsLink">View More <i className="fas fa-plus-circle"></i></span>
        </NavLink>
      </div>
    );
  }
}
Campaign.contextType = AppContext;
