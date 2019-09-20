import React from 'react';
import AppContext from '../context';
import CompanyHeader from './company-header.jsx';

export default class CompanyDashboard extends React.Component {
  render() {
    return (
      <div className="p-3" style={{ width: '100%' }}>
        <CompanyHeader companyID={this.props.match.params.companyID}></CompanyHeader>
      </div>
    );
  }
}
CompanyDashboard.contextType = AppContext;
