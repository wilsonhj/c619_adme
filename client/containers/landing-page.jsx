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
  }
  render() {
    let trending = [];
    let campaigns = [];
    let winners = [];

    return (
      <div className="container" >
        <div className="row" style={{ 'height': '10vh' }}></div>
        <div className='scroller' style={{
          'overflowX': 'scroll',
          'fontSize': '14px',
          'width': '80em',
          'backgroundColor': 'white',
          'height': '24em',
          'whiteSpace': 'nowrap',
          'paddingTop': '.5em'

        }}>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
        </div>
        <div className="row" style={{ 'height': '10vh' }}></div>
        <div className='scroller' style={{
          'overflowX': 'scroll',
          'fontSize': '14px',
          'width': '80em',
          'backgroundColor': 'white',
          'height': '24em',
          'whiteSpace': 'nowrap',
          'paddingTop': '.5em'

        }}>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
        </div>
        <div className="row" style={{ 'height': '10vh' }}></div>
        <div className='scroller' style={{
          'overflowX': 'scroll',
          'fontSize': '14px',
          'width': '80em',
          'backgroundColor': 'white',
          'height': '24em',
          'whiteSpace': 'nowrap',
          'marginBottom': '10vh',
          'paddingTop': '.5em'

        }}>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
          <div style={{ 'display': 'inline-block', 'width': '30em', 'height': '20em', 'backgroundColor': 'purple', 'margin': '1rem' }}>hello </div>
        </div>
      </div>
    );
  }
}
