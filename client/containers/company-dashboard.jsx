import React from 'react';

import AppContext from '../context';
import CompanyHeader from '../components/company-header.jsx';

export default class CompanyDashboard extends React.Component {

  render() {

    const goToCreateCampaign = () => this.context.setView('create-campaign', {});
    return (
    <>
      <div style={{ width: '100%' }}>

        <CompanyHeader companyID={this.state.companyID} companyName={this.state.companyName} companyLogo={this.state.companyLogo} companyType={this.state.companyType} setView={goToCreateCampaign}></CompanyHeader>
        <div className="col light tab-text p-0" style={{ backgroundColor: '#CAC4CE' }}>
          <Nav tab>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                    Current Campaigns
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
              {/* <Row> */}
              <div className="bg-white p-1 vh-100 creatorTab" >Video Submissions</div>
              {/* </Row> */}
            </TabPane>
            <TabPane tabId="2">
              <div className="bg-white p-1 vh-100 creatorTab" >SDFAGSFGG</div>
            </TabPane>
          </TabContent>
        </div>
      <div className="p-3 shadow" style={{ width: '100%' }}>
        <CompanyHeader setView={goToCreateCampaign}></CompanyHeader>


      </div>
        </>
    );
  }

}

CompanyDashboard.contextType = AppContext;
