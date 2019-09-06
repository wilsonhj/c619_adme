import React from 'react';
import Page from '../components/page';
import AppContext from '../context';
import CompanyHeader from '../components/company-header.jsx';

export default class CompanyDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveCompanyData = this.retrieveCompanyData.bind(this);
    this.state = {
      companyID: '',
      companyName: '',
      companyLogo: ''
    };
  }
  componentDidMount() {
    this.retrieveCompanyData(1);
  }
  retrieveCompanyData(id) {
    fetch(`/api/companies/${id}`)
      .then(res => res.json())
      .then(res => this.setState({ companyID: res.companyID, companyName: res.companyName, companyLogo: res.companyLogo }));
  }
  render() {
    const setView = () => this.context.setView('landing-page', {});
    const goToCreateCampaign = () => this.context.setView('create-campaign', {});
    return (
      <>
        <Page title='Company Dashboard' setView={setView} />
        <CompanyHeader companyID={this.state.companyID} companyName={this.state.companyName} companyLogo={this.state.companyLogo} setView={goToCreateCampaign}></CompanyHeader>
      </>
    );
  }

}

CompanyDashboard.contextType = AppContext;
