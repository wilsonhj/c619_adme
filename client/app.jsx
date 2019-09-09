import React from 'react';
import AppContext from './context';
import LandingPage from './containers/landing-page';
import CompanyDashboard from './containers/company-dashboard';
import CreateCampaign from './containers/create-campaign.jsx';
import CreatorPortfolio from './containers/creator-portfolio';
import UploadSubmission from './containers/upload-submission';
import NavBar from './components/nav-bar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'landing-page',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  renderView() {
    switch (this.state.view.name) {
      case 'landing-page':
        return <LandingPage />;
      case 'company-dashboard':
        return <CompanyDashboard />;
      case 'create-campaign':
        return <CreateCampaign />;
      case 'creator-portfolio':
        return <CreatorPortfolio />;
      case 'upload-submission':
        return <UploadSubmission />;
    }
  }

  render() {
    const appContext = {
      setView: this.setView

    };
    return (
      <AppContext.Provider value={appContext} >
        <>
          <NavBar />
        {this.renderView()}
        </>
      </AppContext.Provider>
    );
  }

}
