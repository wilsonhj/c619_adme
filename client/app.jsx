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
import SwitchUserPage from './containers/switch-user-page';
import ViewCampaignDetails from './containers/campaign-details';
import AllCampaigns from './containers/all-campaigns-page';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
    this.setView = this.setView.bind(this);
    this.setUser = this.setUser.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/user')
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

  setUser(userID, type) {
    var id;
    if (type === 'company') {
      id = this.state.userOptions.companies.filter(company => {
        if (company.companyID === userID) return company.companyID;
      });
      id = id[0].companyID;
    } else if (type === 'creator') {
      id = this.state.userOptions.creators.filter(creator => {
        if (creator.creatorID === userID) return creator.creatorID;
      });
      id = id[0].creatorID;
    }
    this.setState({ currentUser: { type, id } });
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
        return <CreatorPortfolio />;
      case 'company-header':
        return <CompanyHeader/>;
      case 'upload-submission':
        return <UploadSubmission />;
      case 'submission-details':
        return <ViewSubmissionDetails pageID={this.state.view.params.submissionID}/>;
      case 'campaign-details':
        return <ViewCampaignDetails pageID={this.state.view.params.campaignID}/>;
      case 'settings':
        return <SwitchUserPage setUser = {this.setUser}/>;
      case 'all-campaigns-page':
        return <AllCampaigns />;
    }
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
      setView: this.setView,
      setUser: this.setUser,
      viewParams: this.state.view.params,
      currentUser: this.state.currentUser,
      campaignID: this.state.view.params.campaignID
    };
    
    return (
      <Router>
        <AppContext.Provider value={appContext} >
          <Route exact path='/' component={LandingPage} />
          <Route path='/company-dashboard/:companyID' component={CompanyDashboard} />
          <Route exact path='/create-campaign' component={CreateCampaign} />
          <Route path='/creator-portfolio/:creatorID' component={CreatorPortfolio} />       
          <Route path='/upload-submission' component={UploadSubmission}></Route>
          <Route path='/submission-details/:submissionID' component={ViewSubmissionDetails}></Route>  {/* pageID={this.state.view.params.submissionID} */}
          <Route path='/campaign-details' component={ViewCampaignDetails}></Route>
          <Route path='/settings' component={SwitchUserPage}></Route>
          <Route path='/all-campaigns-page' component={AllCampaigns}></Route>

          <NavBar />
        </AppContext.Provider>
      </Router>
    );
  }

}
