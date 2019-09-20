import React from 'react';
import AppContext from '../context';
import { Link } from 'react-router-dom';

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
    this.getWinners = this.getWinners.bind(this);
    this.goToCampaign = this.goToCampaign.bind(this);
  }

  componentDidMount() {
    this.getCampaigns();
    this.getTrending();
    this.getWinners();
  }

  getCampaigns() {
    fetch('/api/campaigns').then(res => res.json())
      .then(res => {
        this.setState({
          recentCampaigns: res
        });
      });
  }

  getTrending() {
    fetch('/api/submissions/trending')
      .then(res => res.json())
      .then(res => {
        this.setState({
          trendingAds: res
        });
      });
  }

  getWinners() {
    fetch('/api/winningAds')
      .then(res => res.json())
      .then(res => {
        this.setState({
          winners: res
        });
      });
  }

  goToCampaign(campaignID) {
    this.props.history.push(`campaign-details/${campaignID}`);
  }

  render() {
    let winners = this.state.winners.map(ads => {
      return (
        <div className='winningCard' style={{ display: 'inline-block', width: '25em', height: '20em', margin: '1rem', borderRadius: '10%' }} key={ads.submissionID} >

          <Link to={`/creator-portfolio/${ads.creatorID}`}>
            <div className='profilePicSmall' style={{ marginLeft: '8%', marginTop: '7%', border: 'solid .12em yellow', height: '5em', width: '5em', borderRadius: '10%', backgroundImage: 'url(' + ads.profilePicture + ')', backgroundSize: 'cover', backgroundPosition: 'center', display: 'inline-block', backgroundRepeat: 'no-repeat' }} key={ads.creatorID}>
            </div>
          </Link>
          <div className="row" style={{ marginTop: '10%', verticalAlign: 'top', display: 'inline-block' }}>
            <div style={{ marginLeft: '20%', display: 'inline-block' }}>
              {ads.first_name} {ads.last_name}
            </div>
            <div style={{ marginTop: '5%', marginLeft: '20%', textOverflow: 'ellipsis' }}>
              {ads.title}
            </div>
          </div>
          <div className="container" style={{ backgroundImage: 'url(' + '/' + ads.submissionThumbnail + ')', height: '50%', width: '80%', marginTop: '4%', backgroundSize: '100%', backgroundRepeat: 'no-repeat', border: 'solid .12em yellow' }}>
            <Link to={`/submission-details/${ads.submissionID}`}>
              <div className="playButton" style={{ marginLeft: '40%', verticalAlign: 'center' }}></div>
            </Link>
          </div>

        </div>
      );
    });

    let trending = this.state.trendingAds.map(ads => {
      return (
        <div className='glassCard' style={{ display: 'inline-block', width: '25em', height: '20em', margin: '1rem', borderRadius: '10%' }} key={ads.submissionID} >

          <Link to={`/creator-portfolio/${ads.creatorID}`} className='profilePicSmall' style={{ marginLeft: '8%', marginTop: '7%', border: 'solid .12em #841D9E', height: '5em', width: '5em', borderRadius: '10%', backgroundImage: 'url(' + ads.profilePicture + ')', backgroundSize: 'cover', backgroundPosition: 'center', display: 'inline-block' }} key={ads.creatorID}>
          </Link>
          <div className="row" style={{ marginTop: '10%', verticalAlign: 'top', display: 'inline-block' }}>
            <div style={{ marginLeft: '20%', display: 'inline-block' }}>
              {ads.first_name} {ads.last_name}
            </div>
            <div style={{ marginTop: '5%', marginLeft: '20%', textOverflow: 'ellipsis' }}>
              {ads.title}
            </div>
          </div>
          <div className="container" style={{ backgroundImage: 'url(' + ads.submissionThumbnail + ')', height: '50%', width: '80%', marginTop: '4%', backgroundSize: '100%', backgroundRepeat: 'no-repeat', border: 'solid .12em #841D9E' }}>
            <Link to={`/submission-details/${ads.submissionID}`} className="playButton" style={{ marginLeft: '40%', verticalAlign: 'center' }}></Link>
          </div>
        </div>
      );

    });
    let campaigns = this.state.recentCampaigns.map(campaign => {
      return (
        <div onClick ={() => { this.goToCampaign(campaign.campaignID); }} className=' glassCard campaignCard' style={{ 'flex': '0 0 auto', 'width': '25em', 'height': '20em', 'margin': '1rem', 'borderRadius': '10%', backgroundColor: 'white' }} key={campaign.campaignID}>
          <div className='row' style={{ 'width': '95%', 'paddingLeft': '8%', 'paddingTop': '3%' }}>
            <div className="col" style={{ 'textAlign': 'center', 'fontSize': '2em' }}>
              {campaign.campaignTitle}
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

    return (
      <div className="container" >
        <div style={{ textAlign: 'center', lineHeight: '300%', fontSize: '2rem', fontFamily: 'Patua One, cursive' }}>
          Recent Campaigns
        </div>
        <div className='scroller' style={{
          'overflowX': 'scroll',
          'fontSize': '14px',
          'height': '24em',
          'display': 'flex'

        }}>
          {campaigns}
        </div>

        <div style={{ textAlign: 'center', lineHeight: '300%', fontSize: '2rem', fontFamily: 'Patua One, cursive' }}>
          Trending Ads
        </div>
        <div className='scroller' style={{
          'overflowX': 'scroll',
          'fontSize': '14px',
          'backgroundColor': 'white',
          'height': '24em',
          'whiteSpace': 'nowrap'
        }}>
          {trending}
        </div>

        <div style={{ textAlign: 'center', lineHeight: '300%', fontSize: '2rem', fontFamily: 'Patua One, cursive' }}>
          Recent Winners
        </div>
        <div className='scroller' style={{
          'overflowX': 'scroll',
          'fontSize': '14px',
          'backgroundColor': 'white',
          'height': '24em',
          'whiteSpace': 'nowrap'
        }}>
          {winners}
        </div>
      </div>
    );
  }
}
LandingPage.contextType = AppContext;
