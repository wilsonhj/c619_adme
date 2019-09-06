import React from 'react';
import AppContext from './context';
import LandingPage from './containers/landing-page';
import CompanyDashboard from './containers/company-dashboard';
import CreatorPortfolio from './containers/creator-portfolio';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'creator-portfolio',
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
      case 'creator-portfolio':
        return <CreatorPortfolio />;
    }
  }

  render() {
    const appContext = {
      setView: this.setView
    };
    return (
      <AppContext.Provider value={appContext} >
        {this.renderView()}
      </AppContext.Provider>
    );
  }

}
