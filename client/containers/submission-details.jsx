import React from 'react';

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
          submissionDescription: res[0].submissionDescription
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
        <h4 className="text-center mt-2">{this.state.title}</h4>
        <video src={this.state.submissionContent} className="mx-auto my-2 shadow" style={{ width: '95%' }} controls>
        </video>
        <div className="py-2 mx-4">
          <div>{this.state.submissionDescription}</div>
          <div className="text-right">{this.state.likes}
            {this.state.isLikedByThisUser ? (
              <i className="ml-1 fas fa-heart" onClick={this.updateLikes}></i>
            ) : (
              <i className="ml-1 far fa-heart" onClick={this.updateLikes}></i>
            )}
          </div>
        </div>
      </div>
    );
  }
}
