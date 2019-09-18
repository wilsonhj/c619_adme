import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler,
  NavLink
} from 'reactstrap';
import CampaignIcon from './campaignIcon';
import MessagesIcon from './messagesIcon';
import NotificationIcon from './notificationIcon';
import PortfolioIcon from './portfolioIcon';
import SettingsIcon from './settingsIcon';
import CompanyIcon from './company-dashboard-icon';
import AppContext from '../context';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const goToLandingPage = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
      this.context.setView('landing-page', {});
    };
    const goToCreatorPortfolio = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
      this.context.setView('creator-portfolio', { creatorID: this.context.currentUser.id });
    };
    const goToSwitchUser = () => {
      event.preventDefault();
      this.setState({
        collapsed: !this.state.collapsed
      });
      this.context.setView('settings', {});
    };
    const goToCompanyDashboard = () => {
      event.preventDefault();
      this.setState({
        collapsed: !this.state.collapsed
      });
      this.context.setView('company-dashboard', { companyID: this.context.currentUser.id });
    };
    if (this.context.currentUser.type === 'company' || this.context.currentUser.type === 'creator') {
      return (
        <div>
          <Navbar className='d-none d-md-block shadow-lg' style={{ 'backgroundColor': '#841D9E' }} light expand="md">
            <div style={{
              'height': '3rem',
              'color': '#EEEEEE',
              'fontSize': '3em',
              'fontFamily': 'Modak, cursive',
              'lineHeight': '100%',
              'display': 'inline-block',
              'cursor': 'pointer'
            }} onClick={goToLandingPage}>AdMe</div>
            <Nav className="ml-auto" style={{ 'float': 'right' }} navbar>

              <NavItem>
                <NavLink style={{
                  'height': '3rem',
                  'width': '2rem'
                }}></NavLink>
              </NavItem>
              <NavItem style={{ 'bottom': '10%' }}>
                <NavLink data-toggle="tooltip" data-placement="bottom" title="Current Campaigns" onClick = {() => { this.context.setView('all-campaigns-page', {}); }} style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><CampaignIcon style={{
                    'bottom': '10%'
                  }}/>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{
                  'height': '3rem',
                  'width': '2rem'
                }}></NavLink>
              </NavItem>
              <NavItem style={{ 'bottom': '10%' }}>
                <NavLink style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><MessagesIcon style={{
                    'bottom': '10%'
                  }} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{
                  'height': '3rem',
                  'width': '2rem'
                }}></NavLink>
              </NavItem>
              <NavItem style={{ 'bottom': '10%' }}>
                <NavLink style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><NotificationIcon style={{
                    'bottom': '10%'
                  }} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{
                  'height': '3rem',
                  'width': '2rem'
                }}></NavLink>
              </NavItem>
              {this.context.currentUser.type !== 'company' ? <NavItem style={{ 'bottom': '10%' }}>
                <NavLink data-toggle="tooltip" data-placement="bottom" title="Creator Portfolio" onClick={goToCreatorPortfolio} style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><PortfolioIcon style={{
                    'bottom': '10%'
                  }} />
                </NavLink>
              </NavItem> : <NavItem style={{ 'bottom': '10%' }}>
                <NavLink data-toggle="tooltip" data-placement="bottom" title="Company Dashboard" onClick={goToCompanyDashboard} style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><CompanyIcon style={{
                    'bottom': '10%'
                  }} />
                </NavLink>
              </NavItem>}

              <NavItem>
                <NavLink style={{
                  'height': '3rem',
                  'width': '2rem'
                }}></NavLink>
              </NavItem>
              <NavItem style={{ 'bottom': '10%' }}>
                <NavLink data-toggle="tooltip" data-placement="bottom" title="Settings" onClick={goToSwitchUser} style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><SettingsIcon style={{
                    'bottom': '10%'
                  }} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{
                  'height': '3rem',
                  'width': '2rem'
                }}></NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Navbar className='d-block d-md-none' style={{ 'backgroundColor': '#841D9E', 'width': '100%', 'textAlign': 'center', 'padding': '0' }} light>
            <div style={{
              'height': '3rem',
              'color': '#EEEEEE',
              'fontSize': '3em',
              'fontFamily': 'Modak, cursive',
              'paddingBottom': '20%',
              'display': 'inline-block',
              'textAlign': 'center'
            }}>AdMe</div>
            <NavbarToggler style={{ 'float': 'right' }} onClick={this.toggleNavbar} className="mr-2" />
            <Collapse style={{ 'padding': '0' }} isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white', 'cursor': 'pointer' }}>
                  <NavLink onClick={goToLandingPage}>Home</NavLink>
                </NavItem>
                {this.context.currentUser.type !== 'company' ? <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white', 'cursor': 'pointer' }}>
                  <NavLink onClick={goToCreatorPortfolio}>Creator Portfolio</NavLink>
                </NavItem> : <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white', 'cursor': 'pointer' }}>
                  <NavLink onClick={goToCompanyDashboard}>Company Dashboard</NavLink>
                </NavItem>}
                <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white' }}>
                  <NavLink >Messages</NavLink>
                </NavItem>
                <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white' }}>
                  <NavLink onClick={() => { this.context.setView('all-campaigns-page', {}); }} >Campaigns</NavLink>
                </NavItem >
                <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white', 'borderBottom': '2px' }}>
                  <NavLink onClick={goToSwitchUser}href="">Settings</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    } else {
      return null;
    }
  }
}
NavBar.contextType = AppContext;
