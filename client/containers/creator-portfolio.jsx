import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class CreatorPortfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creatorID: null,
      email: '',
      first_name: '',
      last_name: '',
      bio: '',
      profilePicture: '',
      activeTab: '1'
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    fetch('http://localhost:3000/api/creators/2')
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
          <div className="row rounded my-3 shadow creatorInfoContainer">
            <div className="col-12 text-center">
              <div className="row">
                <img className="rounded-circle shadow-sm w-50 mt-2 mx-auto" src={this.state.profilePicture} alt="profile picture"/>
              </div>
              <div className="row">
                <h4 className="font-weight-bold m-2 p-2 bg-white rounded d-inline-block mx-auto">
                  {this.state.first_name} {this.state.last_name}
                </h4>
              </div>
            </div>
            <div className="col">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Experience
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Bio
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <div className="bg-white p-1 vh-100 creatorTab">Video Submissions</div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <div className="bg-white p-1 vh-100 creatorTab">{this.state.bio}</div>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}
