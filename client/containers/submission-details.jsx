import React from 'react';
import AppContext from '../context';
import { Link } from 'react-router-dom';

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
    fetch(`http://localhost:3000/api/submissions/${this.props.match.params.submissionID}`)
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
      fetch('http://localhost:3000/api/submissions/likes/' + this.props.match.params.submissionID,
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
      fetch('http://localhost:3000/api/submissions/dislikes/' + this.props.match.params.submissionID,
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
    console.log(this.state.submissionContent);
    return (
      <div className="creatorInfoContainer shadow rounded d-flex flex-column justify-content-center m-2 pb-4 pt-2">
        <Link to={`/creator-portfolio/${this.context.currentUser.creatorID}`} className='ml-2 mt-3 d-inline-block' style={{ width: '60%' }}
          // this.context.setView('creator-portfolio', { creatorID: this.context.currentUser.creatorID });
        >
          <img className="d-inline-block rounded-circle shadow mx-auto"
            style={{ backgroundSize: 'contain', height: '9vmin' }}
            src={this.state.submissionAuthorPicture} alt="Author avatar not available" />
          <div className="ml-1 d-inline-block submission-details-author-name">{this.state.submissionAuthorName}</div>
        </Link>

        <div className="d-flex mt-2 submission-details-title justify-content-between align-items-center">
          <p className="ml-2 my-auto">{this.state.title}</p>
          <div className="fas fa-star mr-2 pickWinner" style={{ color: 'white' }} onClick={() => {
            this.chooseWinner(this.props.match.params.submissionID);
          }}>

          </div>
        </div>
        <video src={'/' + this.state.submissionContent} className="mx-auto my-2 shadow" style={{ width: '95%' }} controls>
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
