import React from 'react';
// import AppContext from '../context';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingAds: [],
      recentCampaigns: [],
      winners: []
    };
    this.getCampaigns = this.getCampaigns.bind(this);
    this.getTrending = this.getTrending.bind(this);
  }

  componentDidMount() {
    this.getCampaigns();
    this.getTrending();
  }

  getCampaigns() {
    fetch('http://localhost:3000/api/campaigns/campaignsLP').then(res => res.json())
      .then(res => {
        this.setState({
          recentCampaigns: res
        });
        console.log(this.state.recentCampaigns);
      });
  }

  getTrending() {
    fetch('http://localhost:3000/api/submissions').then(res => res.json())
      .then(res => {
        this.setState({
          trendingAds: res
        });
        console.log(this.state.trendingAds);
      });
  }

  render() {
    let trending = this.state.trendingAds;
    let campaigns = this.state.recentCampaigns.map(campaign => {
      return (
        <div className=' glassCard' style={{ 'flex': '0 0 auto', 'width': '25em', 'height': '20em', 'margin': '1rem', 'borderRadius': '10%' }} key={campaign.campaignID}>
          <div className='row' style={{ 'width': '95%', 'paddingLeft': '8%', 'paddingTop': '3%' }}>
            <div className="col" style={{ 'textAlign': 'center', 'fontSize': '2em' }}>
              {campaign.title}
            </div>
          </div>
          <div className="container">
            <div style={{ 'marginTop': '1em', 'height': '2em', 'width': '100%', 'borderRadius': '15%', 'textAlign': 'center' }}> {campaign.runSpace} </div>
            <div style={{ 'marginTop': '2em', 'marginBottom': '2em', 'width': '100%', 'textAlign': 'center' }}> {campaign.requirements} </div>
            <div style={{ 'height': '2em', 'width': '100%', 'borderRadius': '15%', 'textAlign': 'center' }}> {campaign.rewards} </div>
          </div>
        </div>
      );
    });
    let winners = [];

    return (
      <div className="container" >
        <div className="row" style={{ 'height': '10vh' }}></div>
        <div className='scroller' style={{
          'overflowX': 'scroll',
          'fontSize': '14px',
          'height': '24em',
          'display': 'flex'

        }}>
          {campaigns}
        </div>
        <div className="row" style={{ 'height': '10vh' }}></div>
        <div className='scroller' style={{
          'overflowX': 'scroll',
          'fontSize': '14px',
          'backgroundColor': 'white',
          'height': '24em',
          'whiteSpace': 'nowrap'

        }}>
          <div className='glassCard' style={{ 'display': 'inline-block', 'width': '25em', 'height': '20em', 'backgroundColor': 'white', 'margin': '1rem', 'border': 'solid .25em #841D9E', 'borderRadius': '10%' }} >

            <div className='row' style={{ 'width': '95%', 'paddingLeft': '8%', 'paddingTop': '3%' }}>
              <div style={{ 'border': 'solid .12em #841D9E', 'height': '5em', 'width': '5em', 'borderRadius': '10%' }}></div>

            </div>
          </div>
        </div>
        <div className="row" style={{ 'height': '10vh' }}></div>
        <div className='scroller' style={{
          'overflowX': 'scroll',
          'fontSize': '14px',
          'backgroundColor': 'white',
          'height': '24em',
          'whiteSpace': 'nowrap',
          'marginBottom': '10vh'

        }}>
          <div className='glassCard' style={{ 'display': 'inline-block', 'width': '25em', 'height': '20em', 'backgroundColor': 'white', 'margin': '1rem', 'border': 'solid .25em #841D9E', 'borderRadius': '10%' }} >

            <div className='row' style={{ 'width': '95%', 'paddingLeft': '8%', 'paddingTop': '3%' }}>
              <div style={{ 'border': 'solid .12em #841D9E', 'height': '5em', 'width': '5em', 'borderRadius': '10%' }}></div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
