import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class CurrentCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
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
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              classname={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => this.toggle('1') }
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              classname={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => this.toggle('2')}
            >
              Tab2
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='1'>
            <Row>
              <Col sm='12'>
                <h4>Tab 1 contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <Row>
              <Col sm='6'>
                <Card body>
                  <CardTitle>Company Campaigns</CardTitle>
                  <CardText>Company Campaign Text</CardText>
                  <Button>Do something here?</Button>
                </Card>
              </Col>
              <Col sm='6'>
                <Card body>
                  <CardTitle>Another Title</CardTitle>
                  <CardText>Some text here</CardText>
                  <Button>do something?</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
