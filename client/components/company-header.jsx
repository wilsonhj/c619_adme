import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

export default class CompanyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyID: '',
      companyName: '',
      companyLogo: '',
      companyType: '',
      activeTab: '1'
    };
    this.toggle = this.toggle.bind(this);
    this.retrieveCompanyData = this.retrieveCompanyData.bind(this);
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
    return (
      <div className="row background-light justify-content-around align-items-center companyHeaderContainer rounded m-0 pt-2" style={{ backgroundImage: 'linear-gradient(to top right, #CAC4CE, rgb(234, 224, 240))', paddingLeft: '3%', paddingRight: '3%' }}>
        <div className="row background-light justify-content-around align-items-center companyHeader">
          <img src={this.state.companyLogo} className="rounded-circle mt-1 shadow" style={{ backgroundSize: 'contain', height: '75px' }}></img>
          <div className="mt-1" style={{ color: '#9067C6' }}>
            <h4 className="mb-0 font-weight-bold" style={{ color: '#242038' }}>{this.state.companyName}</h4>
            <p className="ml-1 my-2" style={{ fontSize: '1rem' }}>{this.state.companyType}</p>
            <button className="btn shadow my-auto createCampaignButton" onClick={() => this.props.setView()} style={{ height: '30px', width: '130px', backgroundColor: 'white', fontSize: '0.75rem' }}>Create Campaign</button>
          </div>
        </div>

        <div className="col light tab-text p-0">
          <Nav tabs>
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
              {/* <Row> */}
              <div className="bg-white p-1 vh-100 creatorTab" >Video Submissions</div>
              {/* </Row> */}
            </TabPane>
            <TabPane tabId="2">
              <div className="bg-white p-1 vh-100 creatorTab" >SDFAGSFGG</div>
            </TabPane>
          </TabContent>
        </div>
        {/* </div> */}

      </div>
    );
  }

}
