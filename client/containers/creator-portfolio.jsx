import React from 'react';
import Page from '../components/page';
import AppContext from '../context';

export default class CreatorPortfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creatorID: null,
      email: '',
      first_name: '',
      last_name: '',
      bio: '',
      profilePicture: ''
    };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    // fetch
    // .then json parse
    // .then this.setState
    fetch('http://localhost:3000/api/creators/1')
      .then(res => res.json())
      .then(res => {
        this.setState({
          creatorID: res[0].creatorID,
          email: res[0].email,
          first_name: res[0].first_name,
          last_name: res[0].last_name,
          bio: res[0].bio,
          profilePicture: res[0].profilePicture
        });
      });
  }

  render() {
    const setView = () => this.context.setView('landing-page', {});
    return (
      <React.Fragment>
        <Page title='Creator Portfolio' setView={setView} />
        <div className="container">
          <div className="row rounded border border-secondary my-3">
            <div className="col w-25 text-center">
              <img className="rounded-circle shadow-sm mw-100 p-1" src={this.state.profilePicture} alt="profile picture"/>
              <div className="font-weight-bold">
                {this.state.first_name} {this.state.last_name}
              </div>
            </div>
            <div className="col mt-2">
              <div>
                {this.state.bio}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

CreatorPortfolio.contextType = AppContext;
