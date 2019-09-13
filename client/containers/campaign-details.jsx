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
        preferredContentType: ''
      },
      submissions: [{
        submissionThumbnails: '',
        submissionsReceived: '',
        submissionsContent: '',
        submissionIDs: '',
        submissionTitles: '',
        likes: '',
        submissionDescriptions: ''
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
            campaignTitle: res.campaignDetails,
            campaignID: res.campaignID,
            description: res.description,
            campaignContent: res.campaignContent,
            rewards: res.rewards,
            requirements: res.requirements,
            runSpace: res.runSpace,
            preferredContentType: res.preferredContentType
          },
          submissions: [{
            submissionDetails: res.submissionDetails,
            submissionsReceived: res.submissionDetails,
            submissionsContent: res.submissionContent,
            submissionIDs: res.submissionIDs,
            submissionTitles: res.submissionTitles,
            likes: res.likes,
            submissionDescriptions: res.submissionDescriptions
          }]
        });
      });
  }

  render() {
    return (
      <div className="creatorInfoContainer shadow rounded d-flex flex-column justify-content-center m-2 pb-4 pt-2" >
        <h4 className="text-center mt-2">{this.state.companyInfo.campaignTitle}</h4>
        <p>{this.state.campaignDetails.description}</p>
        <video src={this.state.submissions.submissionContent} className="mx-auto my-2 shadow" style={{ width: '95%' }} controls>
        </video>
        <div className="py-2 mx-4">
          <div>{this.state.submissions.submissionDetails}</div>

        </div>
      </div>
    );
  }
}
ViewCampaignDetails.contextType = AppContext;
