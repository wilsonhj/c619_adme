import React from 'react';

import AppContext from '../context';
import CompanyHeader from '../components/company-header.jsx';
export default class CompanyDashboard extends React.Component {
  render() {
    const goToCreateCampaign = () => this.context.setView('create-campaign', {});
    return (
      <div className="p-3 shadow" style={{ width: '100%' }}>
        <CompanyHeader setView={goToCreateCampaign}></CompanyHeader>
      </div>
    );
  }
}
CompanyDashboard.contextType = AppContext;
