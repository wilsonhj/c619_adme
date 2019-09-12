import React from 'react';
import AppContext from './context';
import LandingPage from './containers/landing-page';
import CompanyDashboard from './containers/company-dashboard';
import CreateCampaign from './containers/create-campaign.jsx';
import CreatorPortfolio from './containers/creator-portfolio';
import UploadSubmission from './containers/upload-submission';
import NavBar from './components/nav-bar';
import ViewSubmissionDetails from './containers/submission-details';
import CompanyHeader from './containers/company-header.jsx';

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
        return <CompanyDashboard/>;
      case 'create-campaign':
        return <CreateCampaign />;
      case 'creator-portfolio':
<<<<<<< HEAD
        return <CreatorPortfolio goToSubmissionDetails={this.goToSubmissionDetails}/>;
      case 'company-header':
        return <CompanyHeader/>;
=======
        return <CreatorPortfolio />;
>>>>>>> 00610a6b337b8846bf95acb7e20d067d6ae42052
      case 'upload-submission':
        return <UploadSubmission />;
      case 'submission-details':
        return <ViewSubmissionDetails pageID={this.state.view.params.submissionID}/>;
    }
  }

  render() {
    const appContext = {
      setView: this.setView
    };

    return (
      <AppContext.Provider value={appContext} >

        <NavBar />
        {this.renderView()}

      </AppContext.Provider>
    );
  }

}
