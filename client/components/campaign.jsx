import React from 'react';
import { Row, Col, NavLink } from 'reactstrap';
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
    style.image = {
      backgroundSize: 'contain',
      height: '75px'
    };
    style.div = {
      color: '#9067C6'
    };
    style.button = {
      height: '30px',
      width: '130px',
      backgroundColor: 'white',
      fontSize: '0.75rem'
    };
    style.logo = {
      height: '40px',
      width: '40px'
    };
    style.card = {
      width: '100%',
      backgroundColor: '#242038'
    };
    style.text = {
      color: 'white',
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
      height: '60vmin',
      width: '100%'
    };
    style.modal = {
      'WebkitAnimation': 'fade in 3.7s',
      animation: 'fade-in 3.7s',
      color: 'black',
      backgroundColor: '#242038'
    };
    return (
      <Row>
        <Col sm='12'>
          <div className="creatorTab justify-content-around rounded" style={style.card}>
            <h2 style={style.text} className="mb-3">
              <img src={this.props.imageSource} style={style.logo} className="mr-3"/>
              {this.props.campaignTitle}
            </h2>
            <video className = "pb-4" src={(this.props.submissionContent) ? this.props.submissionContent : 'uploads/2019-09-12T00:28:15.578Z720.mp4'}
              controls
              style={style.video} poster={(this.props.submissionThumbnail) ? this.props.submissionThumbnail : 'uploads/2019-09-12T00:28:15.575Znodejs.png'}>
              No Current Video Submissions!
            </video>
            <NavLink style={style.link} onClick={event => {
              this.context.setView('campaign-details', { campaignID: this.context.campaignID });
            }}>
              View More <i className="fas fa-plus-circle mb-5"></i>
            </NavLink>
          </div>
        </Col>
      </Row>
    );
  }
}
Campaign.contextType = AppContext;
{/* <NavLink style={style.link} onClick={this.toggle}>
              View More <i className="fas fa-plus-circle"></i>
            </NavLink>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="justify-content-around rounded" style={style.modal}>
              <ModalHeader toggle={this.toggle}>{this.props.campaignsInfo[0].campaignTitle}</ModalHeader>
              <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Something happens</Button>{' '}
                <Button color="seconday" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal> */}
            
            
            
            // {this.props.campaignsInfo.map((campObj, idx) => {
            //   if (campObj.videoSource === null) {
            //     campObj.videoSource = '/home/dev/lfz/c619_adme/server/public/uploads/2019-09-10T23:45:29.670ZSampleVideo_1280x720_30mb.mp4';
            //   }
            //   return (
            //     <React.Fragment key={idx}>
            //       <h3>{campObj.campaignTitle}</h3>
            //       <img src={campObj.imageSource}></img>
            //       <video className = "pb-4" src={campObj.videoSource} controls
            //         style={style.video}>
            //       </video>
            //     </React.Fragment>
            //   );
            // })}