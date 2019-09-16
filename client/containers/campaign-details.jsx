import React from 'react';
import AppContext from '../context';

export default class ViewCampaignDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: {
        companyID: '',
        companyName: '',
        companyType: ''
      },
      campaignDetails: {
        campaignTitle: '',
        campaignID: '',
        description: '',
        campaignContent: '',
        rewards: '',
        requirements: '',
        runSpace: '',
        preferredContentType: '',
        submissionsReceived: ''
      },
      submissions: [{
        submissionThumbnail: '',
        submissionContent: '',
        submissionID: '',
        submissionTitle: '',
        likes: '',
        submissionDescription: '',
        submissionTimeCreated: ''
      }]
    };
    this.getCampaignData = this.getCampaignData.bind(this);
  }

  componentDidMount() {
    this.getCampaignData();
  }

  getCampaignData() {
    fetch('http://localhost:3000/api/campaigns/' + this.context.campaignID)
      .then(res => res.json())
      .then(res => {
        this.setState({
          companyInfo: {
            companyID: res.companyID,
            companyName: res.companyName,
            companyType: res.companyType
          },
          campaignDetails: {
            campaignTitle: res.campaignTitle,
            campaignID: res.campaignID,
            description: res.description,
            campaignContent: res.campaignContent,
            rewards: res.rewards,
            requirements: res.requirements,
            runSpace: res.runSpace,
            preferredContentType: res.preferredContentType
          },
          submissions: res.submissions
        });
      });
  }

  chooseWinner(id) {

    const init = {
      method: 'POST'
    };
    fetch(`http://localhost:3000/api/winningAds/${id}`, init)
      .then(res => res.json())
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
<<<<<<< HEAD
    const style = {};
    style.text = {
      display: 'block',
      marginBlockStart: '1em',
      marginInlineStart: '0px',
      transform: 'matrix(1,0,0,1,0,0)'
    };
    const submissions = this.state.submissions.map(submissionObj => {
      return (
        <React.Fragment key={submissionObj.submissionID}>
          <h4 className="m-1 text-center">{submissionObj.submissionTitle}</h4>
          <video src={submissionObj.submissionContent} poster={submissionObj.submissionThumbnail}
            className="mx-auto my-2 shadow" style={{ width: '95%' }} controls>
          </video>
          <div className="container">
            <p className style={style.text}>{submissionObj.submissionDescription}</p>
          </div>
          <div className="p-3 fas fa-heart text-right" style={{ color: 'rgb(132, 29, 158)' }}>
            {submissionObj.likes}
=======
    var counter = 0;
    const submissions = this.state.submissions.map(submissionObj => {
      if (!counter) {
        counter++;
        return (
          <div style={{ width: '150%' }} key={submissionObj.submissionID}>
            <h2 className="mt-5 text-center">Top submission</h2>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mt-1 submissionTitle" onClick={() => {
                this.context.setView('submission-details', { submissionID: submissionObj.submissionID });
              }}>{submissionObj.submissionTitle}</h4>
              <div className="fas fa-star pickWinner" style={{ color: 'white' }} onClick={() => {
                this.chooseWinner(submissionObj.submissionID);

              }}>

              </div>
            </div>
            <video src={submissionObj.submissionContent} poster={submissionObj.submissionThumbnail}
              className="mx-auto my-2 shadow" style={{ width: '100%' }} controls>
            </video>
            <div className=" d-flex justify-content-between">
              <p>{submissionObj.submissionDescription}</p>
              <div className="p-2 text-right mr-4 d-flex align-items-center justify-content-between" style={{ color: 'rgb(132, 29, 158)', width: '10px' }}>
                <div className="fas fa-heart"></div>
                <span> </span>{submissionObj.likes}
              </div>
            </div>
            <h2 className="mt-5 text-center">Other submissions</h2>
>>>>>>> d1fcf0609ca35868b3247860339f6ed49470c98e
          </div>
        );
      } else {
        return (
          <div className="" key={submissionObj.submissionID} style={{ width: '33.33%' }}>
            <h4 className="mt-5 submission-details-author-name submissionTitle" onClick={() => {
              this.context.setView('submission-details', { submissionID: submissionObj.submissionID });
            }}>{submissionObj.submissionTitle}</h4>
            <img className="mx-auto my-2 shadow" src={submissionObj.submissionThumbnail} style={{ width: '100%' }}/>
            {/* <video src={submissionObj.submissionContent} poster={submissionObj.submissionThumbnail}
              className="mx-auto my-2 shadow" style={{ width: '100%' }} controls>
            </video> */}
            <div className="d-flex justify-content-end">
              <div className="p-3 fas fa-heart text-right" style={{ color: 'rgb(132, 29, 158)' }}>
                <span> </span>{submissionObj.likes}
              </div>
            </div>

          </div>
        );
      }

    });
    return (
      <div className="creatorInfoContainer shadow rounded d-flex flex-column justify-content-center m-2 pb-4 pt-2" >
        {this.context.currentUser.creatorID
          ? <div className="d-inline ml-2 fas fa-arrow-left" onClick = {() => {
            this.context.setView('creator-portfolio', {});
          }} style={{ width: '10%', fontSize: '7.5vmin', color: 'rgba(132, 29, 158, .8)' }}></div>
          : <div className="d-inline ml-2 fas fa-arrow-left" onClick={() => {
            this.context.setView('company-dashboard', {});
          }} style={{ width: '10%', fontSize: '7.5vmin', color: 'rgba(132, 29, 158, .8)' }}></div>
        }
<<<<<<< HEAD
        {submissions}
=======
        <div className="container bg-white glassCard rounded mt-2">
          <h1 className="text-center mt-2 submission-details-title">{this.state.campaignDetails.campaignTitle}</h1>
          <p className="text-center mt-1 ">Decription: {this.state.campaignDetails.description}</p>
          <p className="text-center mt-1 ">Requirements: {this.state.campaignDetails.requirements}</p>
          <p className="text-center mt-1 ">This ad will be run on: {this.state.campaignDetails.runSpace}</p>
          <p className="text-center mt-1 ">Reward: {this.state.campaignDetails.rewards}</p>
          <p className="text-center mt-1 ">{this.state.campaignDetails.preferredContentType}s will be accepted</p>
        </div>
        <div className="d-inline-flex flex-wrap container">
          {submissions}
        </div>
>>>>>>> d1fcf0609ca35868b3247860339f6ed49470c98e
      </div>
    );
  }
}
ViewCampaignDetails.contextType = AppContext;
