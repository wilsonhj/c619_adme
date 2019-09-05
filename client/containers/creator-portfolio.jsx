import React from 'react';
import Page from '../components/page';
import AppContext from '../context';

export default class CreatorPortfolio extends React.Component {

  render() {
    const setView = () => this.context.setView('landing-page', {});
    return (
      <Page title='Creator Portfolio' setView={setView} />
    );
  }

}

CreatorPortfolio.contextType = AppContext;
