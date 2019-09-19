import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import AppContext from '../context';
import classnames from 'classnames';
// import { ClientHttp2Session } from 'http2';

export default class CreatorPortfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      creatorInfo: {
        creatorID: null,
        email: '',
        first_name: '',
        last_name: '',
        bio: '',
        profilePicture: ''
      },
      submissionsInfo: [{
        requestID: null,
        submissionContent: '',
        submissionDescription: '',
        submissionID: null,
        submissionThumbnail: '',
        title: '',
        typeOfContent: ''
      }]
    };
    this.toggle = this.toggle.bind(this);
    this.getUserSubmissions = this.getUserSubmissions.bind(this);

  }

  componentDidMount() {
    this.getUserInfo();
    this.getUserSubmissions();
  }

  getUserInfo() {
    fetch('/api/creators/' + this.context.viewParams.creatorID)
      .then(res => res.json())
      .then(res => {
        this.setState({ creatorInfo: {
          creatorID: res[0].creatorID,
          email: res[0].email,
          first_name: res[0].first_name,
          last_name: res[0].last_name,
          bio: res[0].bio,
          profilePicture: res[0].profilePicture
        }
        });
      });
  }

  getUserSubmissions() {
    fetch('/api/creators/' + this.context.viewParams.creatorID + '/submissions').then(res => res.json()).then(res => {
      var creatorSubmissionsArray = [];
      res.map(currentEntry => {
        var submissionObject = {
          requestID: currentEntry.requestID,
          submissionContent: currentEntry.submissionContent,
          submissionDescription: currentEntry.submissionDescription,
          submissionID: currentEntry.submissionID,
          submissionThumbnail: currentEntry.submissionThumbnail,
          title: currentEntry.title,
          typeOfContent: currentEntry.typeOfContent
        };
        creatorSubmissionsArray.push(submissionObject);
      });
      this.setState({ submissionsInfo: creatorSubmissionsArray });
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row rounded my-3  creatorInfoContainer">
            <div className="col-12 text-center">
              <div className="row" style={{ backgroundColor: 'none' }}>
                <img className="rounded-circle  profilePicShadow mt-2 mx-auto" style={{ backgroundSize: 'contain', height: '23vh' }} src={this.state.creatorInfo.profilePicture} alt="profile picture" />
              </div>
              <div className="row" style={{ backgroundColor: 'none' }}>
                <h4 className="font-weight-bold m-2 p-2 d-inline-block mx-auto" style={{ 'color': 'rgba(0, 0, 0, 0.7)' }}>
                  {this.state.creatorInfo.first_name} {this.state.creatorInfo.last_name}
                </h4>
              </div>
            </div>
            <div className="col pb-3">
              <Nav tabs>
                <NavItem className = 'tabs '>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    style={{ cursor: 'pointer' }}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Experience
                  </NavLink>
                </NavItem>
                <NavItem className='tabs '>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    style={{ cursor: 'pointer' }}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Bio
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className= 'tabBod' activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <div className="d-flex flex-column justify-content-center p-1 creatorTab">
                        {this.state.submissionsInfo.map(currentEntry => {
                          return (
                            <React.Fragment key={currentEntry.submissionID}>

                              <h5 className="pt-5 mx-auto" name={currentEntry.submissionID} >{currentEntry.title}

                              </h5>
                              <div style={{ textAlign: 'center', position: 'relative' }}>
                                <img className=" mx-auto glassCard " src={currentEntry.submissionThumbnail} onClick={() => { this.context.setView('submission-details', { submissionID: currentEntry.submissionID }); }} controls
                                  style={{ 'display': 'inline-block', 'width': '75%', 'height': '60%', 'backgroundColor': 'white', 'margin': '1rem', 'border': 'solid .25em #841D9E' }}>
                                </img>
                                <span className="playButton" onClick={() => { this.context.setView('submission-details', { submissionID: currentEntry.submissionID }); }} style={{ position: 'absolute', verticalAlign: 'center', display: 'inline', right: '47%' }}></span>
                              </div>
                            </React.Fragment>
                          );
                        })}

                      </div>

                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <div className="bg-white p-1 vh-100 creatorTab">{this.state.creatorInfo.bio}</div>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}
CreatorPortfolio.contextType = AppContext;
