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

  render() {
    const style = {};
    style.text = {
      display: 'block',
      marginBlockStart: '1em',
      marginInlineStart: '0px'
    };
    const submissions = this.state.submissions.map(submissionObj => {
      return (
        <React.Fragment key={submissionObj.submissionID}>
          <h4 className="m-1 text-center">{submissionObj.submissionTitle}</h4>
          <video src={submissionObj.submissionContent} poster={submissionObj.submissionThumbnail}
            className="mx-auto my-2 shadow" style={{ width: '95%' }} controls>
          </video>
          <div className="row">
            <p className="text-center" style={style.text}>{submissionObj.submissionDescription}</p>
          </div>
          <div className="p-3 fas fa-heart text-right" style={{ color: 'rgb(132, 29, 158)' }}>
            {submissionObj.likes}
          </div>
        </React.Fragment>
      );
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
        {submissions}
      </div>
    );
  }
}
ViewCampaignDetails.contextType = AppContext;
