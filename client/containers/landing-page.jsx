import React from 'react';
import Page from '../components/page';
import AppContext from '../context';

export default function LandingPage(props) {
  const appContext = React.useContext(AppContext);
  const goToCompanyDashBoard = () => appContext.setView('company-dashboard', {});
  const goToCreatorPortfolio = () => appContext.setView('creator-portfolio', {});
  return (
    <Page title='Landing Page' setViewToCompany={goToCompanyDashBoard} setViewToCreator={goToCreatorPortfolio}/>
  );
}
