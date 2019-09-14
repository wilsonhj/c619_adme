import React from 'react';
import AppContext from '../context';

export default class ViewSubmissionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLikedByThisUser: false,
      submissionContent: '',
      title: '',
      likes: 0,
      submissionDescription: ''
    };
    this.getSubmissionData = this.getSubmissionData.bind(this);
    this.updateLikes = this.updateLikes.bind(this);
  }

  componentDidMount() {
    this.getSubmissionData();
  }

  getSubmissionData() {
    fetch(`http://localhost:3000/api/submissions/${this.props.pageID}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          submissionContent: res[0].submissionContent,
          title: res[0].title,
          likes: res[0].likes,
          submissionDescription: res[0].submissionDescription,
          submissionAuthorName: res[0].first_name + ' ' + res[0].last_name,
          submissionAuthorPicture: res[0].profilePicture
        });
      });
  }

  updateLikes() {
    if (!this.state.isLikedByThisUser) {
      fetch('http://localhost:3000/api/submissions/likes/' + this.props.pageID,
        {
          method: 'POST'
        })
        .then(res => res.json())
        .then(res => {
          this.setState({
            likes: this.state.likes + 1,
            isLikedByThisUser: !this.state.isLikedByThisUser
          });
        });
    } else if (this.state.isLikedByThisUser) {
      fetch('http://localhost:3000/api/submissions/dislikes/' + this.props.pageID,
        {
          method: 'POST'
        })
        .then(res => res.json())
        .then(res => {
          this.setState({
            likes: this.state.likes - 1,
            isLikedByThisUser: !this.state.isLikedByThisUser
          });
        });

    }
  }

  render() {
    return (
      <div className="creatorInfoContainer shadow rounded d-flex flex-column justify-content-center m-2 pb-4 pt-2" >
        {this.context.currentUser.creatorID
          ? <div className="d-inline ml-2 fas fa-arrow-left" onClick = {() => {
            this.context.setView('creator-portfolio', { creatorID: this.context.currentUser.creatorID });
          }} style={{ width: '10%', fontSize: '7.5vmin', color: 'rgba(132, 29, 158, .8)' }}></div>
          : <div className="d-inline ml-2 fas fa-arrow-left" onClick={() => {
            this.context.setView('company-dashboard', { companyID: this.context.currentUser.companyID });
          }} style={{ width: '10%', fontSize: '7.5vmin', color: 'rgba(132, 29, 158, .8)' }}></div>
        }
        <div className='ml-2 mt-3 d-inline-block' style={{ width: '60%' }} onClick={() => {
          this.context.setView('creator-portfolio', { creatorID: this.context.currentUser.creatorID });
        }}>
          <img className="d-inline-block rounded-circle shadow mx-auto"
            style={{ backgroundSize: 'contain', height: '9vmin' }}
            src={this.state.submissionAuthorPicture} alt="Author avatar not available" />
          <div className="ml-1 d-inline-block submission-details-author-name">{this.state.submissionAuthorName}</div>

        </div>

        <div className="text-center mt-2 submission-details-title">{this.state.title}</div>
        <video src={this.state.submissionContent} className="mx-auto my-2 shadow" style={{ width: '95%' }} controls>
        </video>
        <div className="py-2 mx-4">
          <div className="text-right">{this.state.likes}
            {this.state.isLikedByThisUser ? (
              <i className="ml-1 fas fa-heart" onClick={this.updateLikes} style={{ color: 'rgb(132, 29, 158)' }}></i>
            ) : (
              <i className="ml-1 far fa-heart" onClick={this.updateLikes} style={{ color: 'rgb(132, 29, 158)' }}></i>
            )}
          </div>
          <div>{this.state.submissionDescription}</div>

        </div>
      </div>
    );
  }
}

ViewSubmissionDetails.contextType = AppContext;
