import React from 'react';
import AppContext from './context';
import LandingPage from './containers/landing-page';
import CompanyDashboard from './containers/company-dashboard';
import CreateCampaign from './containers/create-campaign.jsx';
import CreatorPortfolio from './containers/creator-portfolio';
import UploadSubmission from './containers/upload-submission';
import NavBar from './components/nav-bar';
import ViewSubmissionDetails from './containers/submission-details';
// import CompanyHeader from './containers/company-header.jsx';
import SwitchUserPage from './containers/switch-user-page';
import ViewCampaignDetails from './containers/campaign-details';
import AllCampaigns from './containers/all-campaigns-page';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'settings',
        params: {}
      },
      currentUser: {
        type: '',
        id: 0
      },
      userOptions: {
        creators: [],
        companies: []
      }
    };
    this.setUser = this.setUser.bind(this);
  }
  componentDidMount() {
    this.setUser();
    fetch('/api/user')
      .then(res => res.json())
      .then(res => {
        var creators = [];
        var companies = [];
        res.map(currentArray => {
          if (currentArray.companyID) {
            companies.push(currentArray);
          } else {
            creators.push(currentArray);
          }
        });
        this.setState({ userOptions: { creators, companies } });
      });
  }

  setUser() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.setState({ currentUser });
  }

  checkCurrentUser() {
    return (
      this.state.currentUser.id === 0
        ? <Route path='/settings' component={SwitchUserPage} />
        : <Route exact path='/' component={LandingPage} />
    );
  }

  render() {
    const appContext = {
      setUser: this.setUser,
      viewParams: this.state.view.params,
      currentUser: this.state.currentUser,
      campaignID: this.state.view.params.campaignID
    };
    return (
      <AppContext.Provider value={appContext} >
        <Router>
          <NavBar />
          <Route exact path='/landing-page' component={LandingPage} />
          <Route path='/company-dashboard/:companyID' component={CompanyDashboard} />
          <Route exact path='/create-campaign/:companyID' component={CreateCampaign} />
          <Route path='/creator-portfolio/:creatorID' component={CreatorPortfolio}/>
          <Route path='/upload-submission/:campaignID' component={UploadSubmission}></Route>
          <Route path='/submission-details/:submissionID' component={ViewSubmissionDetails}></Route>  {/* pageID={this.state.view.params.submissionID} */}
          <Route path='/campaign-details/:campaignID' component={ViewCampaignDetails}></Route>
          <Route path='/settings' component={SwitchUserPage}></Route>
          <Route path='/all-campaigns-page' component={AllCampaigns}></Route>
          <Route path='/create-campaign' component={CreateCampaign}></Route>
        </Router>
      </AppContext.Provider>
    );
  }

}
