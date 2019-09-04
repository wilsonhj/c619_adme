import React from 'react';
import Page from '../components/page';
import AppContext from '../context';

export default function CompanyDashboard(props) {
  const appContext = React.useContext(AppContext);
  const setView = () => appContext.setView('landing-page', {});
  return (
    <Page title='Company Dashboard' setView={setView} />
  );
}
