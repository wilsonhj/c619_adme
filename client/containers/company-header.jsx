import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Campaign from '../components/campaign.jsx';
import AppContext from '../context.js';

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
      campaignsInfo: [{
        campaignTitle: '',
        submissionThumbnails: '',
        submissionsContent: '',
        submissionID: ''
      }]
    };
    this.toggle = this.toggle.bind(this);
    this.retrieveCompanyData = this.retrieveCompanyData.bind(this);
  }
  componentDidMount() {
    this.retrieveCompanyData(1);
  }
  retrieveCompanyData(id) {
    fetch(`/api/campaigns/company/${id}`)
      .then(res => res.json())
      .then(res => {
        const campaignsArr = res.map(campaign => {
          const campaignObj = {
            campaignTitle: campaign.campaignTitle,
            submissionThumbnails: campaign.submissionThumbnails,
            submissionsContent: campaign.submissionsContent,
            submissionID: campaign.submissionIDs
          };
          return campaignObj;
        });
        this.setState({
          companyInfo: {
            companyID: res[0].companyID,
            companyName: res[0].companyName,
            companyLogo: res[0].companyLogo,
            companyType: res[0].companyType
          },
          campaignsInfo: campaignsArr
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
      height: '60vmin',
      width: '100%'
    };
    return (
      <div className="row background-light justify-content-around align-items-center companyHeaderContainer rounded m-0 pt-2" style={{ backgroundImage: 'linear-gradient(to top right, #CAC4CE, rgb(234, 224, 240))', paddingLeft: '3%', paddingRight: '3%' }}>
        <div className="row background-light justify-content-around align-items-center companyHeader">
          <img src={this.state.companyInfo.companyLogo} className="rounded-circle shadow" style={style.image}></img>
          <div className="mt-1" style={style.div}>
            <h4 className="mb-0 font-weight-bold" style={{ color: '#242038' }}>{this.state.companyInfo.companyName}</h4>
            <p className="ml-1 my-1" style={{ fontSize: '1rem' }}>{this.state.companyInfo.companyType}</p>
            <button className="btn shadow my-auto createCampaignButton" onClick={() => this.context.setView('create-campaign', {})} style={style.button}>Create Campaign</button>
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
              {this.state.campaignsInfo.map((campaignObj, idx) => {
                return (
                  <Campaign key={idx}
                    imageSource={this.state.companyInfo.companyLogo}
                    companyName={this.state.companyInfo.companyName}
                    companyType={this.state.companyInfo.companyType}
                    campaignTitle={campaignObj.campaignTitle}
                    submissionThumbnail={campaignObj.submissionThumbnails}
                    submissionContent={campaignObj.submissionsContent}
                    submissionID={campaignObj.submissionID}
                    campaignsInfo={this.state.campaignsInfo}></Campaign>

                );
              })}
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
CompanyHeader.contextType = AppContext;
