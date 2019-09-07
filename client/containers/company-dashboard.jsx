import React from 'react';
import Page from '../components/page';
import AppContext from '../context';
import CompanyHeader from '../components/company-header.jsx';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class CompanyDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.retrieveCompanyData = this.retrieveCompanyData.bind(this);
    this.state = {
      companyID: '',
      companyName: '',
      companyLogo: '',
      companyType: '',
      activeTab: '1'
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.retrieveCompanyData(1);
  }
  retrieveCompanyData(id) {
    fetch(`/api/companies/${id}`)
      .then(res => res.json())
      .then(res => this.setState({ companyID: res.companyID, companyName: res.companyName, companyLogo: res.companyLogo, companyType: res.companyType }));
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const setView = () => this.context.setView('landing-page', {});
    const goToCreateCampaign = () => this.context.setView('create-campaign', {});
    return (
      <div style={{ width: '100%' }}>
        <Page title='Company Dashboard' setView={setView} />
        <CompanyHeader companyID={this.state.companyID} companyName={this.state.companyName} companyLogo={this.state.companyLogo} companyType={this.state.companyType} setView={goToCreateCampaign}></CompanyHeader>
        <div className="col light tab-text p-0" style={{ backgroundColor: '#CAC4CE' }}>
          <Nav tab>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                    Current Campaigns
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                    Previous Campaigns
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12 p-0" style={{ width: '100%' }}>
                  <div className="bg-white p-1 vh-100 creatorTab" >Video Submissions</div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <div className="bg-white p-1 vh-100 creatorTab" style={{ width: '100%' }}>{this.state.bio}</div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }

}

CompanyDashboard.contextType = AppContext;
