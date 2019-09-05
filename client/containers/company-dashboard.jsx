import React from 'react';
import Page from '../components/page';
import AppContext from '../context';

export default class CompanyDashboard extends React.Component {
  componentDidMount() {
    fetch('api/companies/1')
      .then(res => res.json())
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
  }
  render() {
    const setView = () => this.context.setView('landing-page', {});
    return (
      <Page title='Company Dashboard' setView={setView} />
    );
  }

}

CompanyDashboard.contextType = AppContext;
