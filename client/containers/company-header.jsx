import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Campaign from '../components/campaign.jsx';
import AppContext from '../context';
import { Link } from 'react-router-dom';

export default class CompanyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      companyInfo: {
        companyID: '',
        companyName: '',
        companyLogo: '',
        companyType: ''
      },
      currentcampaignsInfo: [{
        campaignTitle: '',
        campaignContent: '',
        campaignID: ''
      }],
      previouscampaignsInfo: [{
        campaignTitle: '',
        campaignContent: '',
        campaignID: ''
      }]
    };
    this.toggle = this.toggle.bind(this);
    this.retrieveCompanyData = this.retrieveCompanyData.bind(this);
    this.retrievePreviousCompanyData = this.retrievePreviousCompanyData.bind(this);
  }
  componentDidMount() {
    this.retrieveCompanyData();
    this.retrievePreviousCompanyData();
  }
  retrieveCompanyData() {

    fetch('/api/campaigns/company/' + this.props.companyID)
      .then(res => res.json())
      .then(res => {
        const campaignsArr = res.filter(campaign => {
          if (campaign.isWinner !== true) {
            var campaignObj = {
              campaignTitle: campaign.campaignTitle,
              campaignContent: campaign.campaignContent,
              campaignID: campaign.campaignID
            };
          }

          return campaignObj;

        });
        this.setState({
          companyInfo: {
            companyID: res[0].companyID,
            companyName: res[0].companyName,
            companyLogo: res[0].companyLogo,
            companyType: res[0].companyType
          },
          currentcampaignsInfo: campaignsArr
        });

      });

  }
  retrievePreviousCompanyData() {
    fetch('/api/campaigns/prevcompany/' + this.props.companyID)
      .then(res => res.json())
      .then(res => {
        const campaignsArr = res.filter(campaign => {
          if (campaign !== null) {
            const campaignObj = {
              campaignTitle: campaign.campaignTitle,
              campaignContent: campaign.campaignContent,
              campaignID: campaign.campaignID
            };
            return campaignObj;
          }

        });
        this.setState({
          previouscampaignsInfo: campaignsArr
        });
      });
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
      objectFit: 'cover',
      height: '7.5rem',
      width: '7.5rem'
    };
    style.div = {
      color: '#9067C6'
    };
    style.button = {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      fontSize: '0.75rem',
      cursor: 'pointer',
      textAlign: 'center',
      fontWeight: '400',
      display: 'inline-block',
      whiteSpace: 'nowrap'
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
    style.tabs = {
      padding: '.3rem .3rem'
    };
    return (
      <div className="row background-light justify-content-around align-items-center companyHeaderContainer rounded m-0 pt-2" style={{ paddingLeft: '3%', paddingRight: '3%' }}>
        <div className="row background-light justify-content-around align-items-center companyHeader mb-5">
          <img src={this.state.companyInfo.companyLogo} className="rounded-circle profilePicShadow" style={style.image}></img>
          <div className="mt-1 flex-wrap" style={style.div}>
            <h4 className="mb-2 font-weight-bold" style={{ color: '#242038' }}>{this.state.companyInfo.companyName}</h4>
            <Link className="btn shadow mb-3 p-1 createCampaignButton" to='/create-campaign' style={style.button}>Create Campaign</Link>
          </div>
        </div>

        <div className="col light tab-text p-0" style={{ marginTop: '10%' }}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
                style={style.tabs}
              >Current Campaigns
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
                style={style.tabs}
              >
                Previous Campaigns
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row >
                <Col sm='12' >
                  {this.state.currentcampaignsInfo[0] && this.state.currentcampaignsInfo.map((campaignObj, idx) => {
                    return (
                      <Campaign key={idx}
                        imageSource={this.state.companyInfo.companyLogo}
                        companyName={this.state.companyInfo.companyName}
                        companyType={this.state.companyInfo.companyType}
                        campaignTitle={campaignObj.campaignTitle}
                        campaignContent={campaignObj.campaignContent}
                        campaignID={campaignObj.campaignID}
                        campaignsInfo={this.state.currentcampaignsInfo}>
                      </Campaign>
                    );
                  })}
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row >
                <Col sm='12' >
                  {this.state.previouscampaignsInfo.map((campaignObj, idx) => {
                    return (
                      <Campaign key={idx}
                        imageSource={this.state.companyInfo.companyLogo}
                        companyName={this.state.companyInfo.companyName}
                        companyType={this.state.companyInfo.companyType}
                        campaignTitle={campaignObj.campaignTitle}
                        campaignContent={campaignObj.campaignContent}
                        campaignID={campaignObj.campaignID}
                        campaignsInfo={this.state.previouscampaignsInfo}>
                      </Campaign>
                    );
                  })}
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>

      </div>
    );
  }
}
CompanyHeader.contextType = AppContext;
