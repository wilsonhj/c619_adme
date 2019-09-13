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
    fetch(`http://localhost:3000/api/campaigns/1`)
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
    const submissions = this.state.submissions.map(submissionObj => {
      return (
        <React.Fragment key={submissionObj.submissionID}>
          <h1>{submissionObj.submissionTitle}</h1>
          <video src={submissionObj.submissionContent} poster={submissionObj.submissionThumbnail}
            className="mx-auto my-2 shadow" style={{ width: '95%' }} controls>
          </video>
          <div>{submissionObj.submissionDescription}</div>
          <div>{submissionObj.likes}</div>
        </React.Fragment>
      );
    });
    return (
      <div className="creatorInfoContainer shadow rounded d-flex flex-column justify-content-center m-2 pb-4 pt-2" >
        <h4 className="text-center mt-2">{this.state.campaignDetails.campaignTitle}</h4>
        <p>{this.state.campaignDetails.description}</p>
        {submissions}
      </div>
    );
  }
}
ViewCampaignDetails.contextType = AppContext;
