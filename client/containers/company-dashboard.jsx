import React from 'react';
import Page from '../components/page';
import AppContext from '../context';
import CompanyHeader from '../components/company-header.jsx';

export default class CompanyDashboard extends React.Component {

  render() {
    const setView = () => this.context.setView('landing-page', {});
    const goToCreateCampaign = () => this.context.setView('create-campaign', {});
    return (
      <div className="p-3 shadow" style={{ width: '100%' }}>
        <Page title='Company Dashboard' setView={setView} />
        <CompanyHeader setView={goToCreateCampaign}></CompanyHeader>

      </div>
    );
  }

}

CompanyDashboard.contextType = AppContext;
