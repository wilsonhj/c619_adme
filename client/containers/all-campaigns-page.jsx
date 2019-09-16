import React from 'react';
import AppContext from '../context.js';

export default class AllCampaigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentCampaigns: []
    };
    this.getCampaigns = this.getCampaigns.bind(this);
  }

  componentDidMount() {
    this.getCampaigns();
  }

  getCampaigns() {
    fetch('http://localhost:3000/api/campaigns')
      .then(res => res.json())
      .then(res => {
        this.setState({
          recentCampaigns: res
        });
      });
  }

  render() {
    let campaigns = this.state.recentCampaigns.map(campaign => {
      return (
        <div className=' glassCard' style={{ 'flex': '0 0 auto', 'width': '20em', 'height': '18em', 'margin': '1rem', 'borderRadius': '10%' }}
          onClick={event => {
            this.context.setView('campaign-details', { campaignID: campaign.campaignID });
          }}
          key={campaign.campaignID}>

          <div className="container">
            <div style={{ 'textAlign': 'center', 'fontSize': '2em' }}>
              {campaign.campaignTitle}
            </div>
            <div style={{ 'marginTop': '1em', 'height': '2em', 'width': '100%', 'borderRadius': '15%', 'textAlign': 'center' }}> {campaign.runSpace} </div>
            <div style={{ 'marginTop': '2em', 'marginBottom': '2em', 'width': '100%', 'textAlign': 'center' }}> {campaign.requirements} </div>
            <div style={{ 'height': '2em', 'width': '100%', 'borderRadius': '15%', 'textAlign': 'center' }}> {campaign.rewards} </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container" >
        <div style={{ textAlign: 'center', lineHeight: '300%', fontSize: '2rem', fontFamily: 'Patua One, cursive' }}>
          Current Campaigns
        </div>
        <div className="d-flex flex-wrap justify-content-center p-0">
          {campaigns}
        </div>
      </div>
    );
  }

}
AllCampaigns.contextType = AppContext;
