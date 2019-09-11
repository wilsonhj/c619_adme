import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class CompanyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: {
        companyID: '',
        companyName: '',
        companyLogo: '',
        companyType: '',
        activeTab: '1'
      },
      campaignsInfo: [{
        title: '',
        submissionThumbnail: '',
        submissionContent: ''
      }]
    };
    this.toggle = this.toggle.bind(this);
    this.retrieveCompanyData = this.retrieveCompanyData.bind(this);
  }
  componentDidMount() {
    this.retrieveCompanyData(1);
  }
  retrieveCompanyData(id) {
    fetch(`/api/companies/${id}`)
      .then(res => res.json())
      .then(res => this.setState({ 
        companyInfo: {
          companyID: res.companyID,
          companyName: res.companyName,
          companyLogo: res.companyLogo,
          companyType: res.companyType }
      }));
      // create fetch request to submissions table 
      // setState submissionContent submissionThumbnail
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
      textAlign: 'center',
      
    };
    style.link = {
      color: '#0070c9',
      textAlign: 'center',
      cursor: 'pointer',
      fontWeight: '400',
      paddingBottom: '4px',
    };
    style.video = {
      height: '65vmin',
      width: '100%'
    };
    return (
      <div className="row background-light justify-content-around align-items-center companyHeaderContainer rounded m-0 pt-2" style={{ backgroundImage: 'linear-gradient(to top right, #CAC4CE, rgb(234, 224, 240))', paddingLeft: '3%', paddingRight: '3%' }}>
        <div className="row background-light justify-content-around align-items-center companyHeader">
          <img src={this.state.companyLogo} className="rounded-circle shadow" style={style.image}></img>
          <div className="mt-1" style={style.div}>
            <h4 className="mb-0 font-weight-bold" style={{ color: '#242038' }}>{this.state.companyName}</h4>
            <p className="ml-1 my-1" style={{ fontSize: '1rem' }}>{this.state.companyType}</p>
            <button className="btn shadow my-auto createCampaignButton" onClick={() => this.props.setView()} style={style.button}>Create Campaign</button>
          </div>
        </div>

        <div className="col light tab-text p-0">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >Current Campaigns
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Previous Campaigns
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm='12'>
                  <div className="creatorTab justify-content-around rounded" style={style.card}>
                    <h3 style={style.text} className="justify-content-around">
                      <img src={this.state.companyInfo.companyLogo} style={style.logo}/> 
                      {this.state.companyInfo.companyName}
                    </h3>
                    <h6 style={style.text} className="">{this.state.companyInfo.companyType}</h6>
                    <video className = "pb-4" src={'server/public/uploads/2019-09-10T23:42:42.254ZSampleVideo_1280x720_30mb.mp4'} controls
                      style={style.video}>
                    </video>
                    <NavLink style={style.link}>
                      View More <i className="fas fa-plus-circle"></i>
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <div className="bg-white p-1 vh-100 creatorTab" >SDFAGSFGG</div>
            </TabPane>
          </TabContent>
        </div>

      </div>
    );
  }
}
