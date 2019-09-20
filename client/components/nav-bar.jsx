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
// import MessagesIcon from './messagesIcon';
// import NotificationIcon from './notificationIcon';
import PortfolioIcon from './portfolioIcon';
import SettingsIcon from './settingsIcon';
import CompanyIcon from './company-dashboard-icon';
import AppContext from '../context';
import { Link } from 'react-router-dom';
import HomeIcon from './homeIcon';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
    this.checkUserExists = this.checkUserExists.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeNavbar() {
    if (this.state.collapsed !== true) {
      this.toggleNavbar();
    }
  }

  checkUserExists() {
    if (this.context.currentUser.type === 'creator' || this.context.currentUser.type === 'company') {
      return true;
    }
    return false;
  }

  render() {

    return (
      <div>
        {this.checkUserExists() &&
          <Navbar className='d-none d-md-block shadow-lg' style={{ 'backgroundColor': '#841D9E', 'width': '100vw', 'textAlign': 'center', 'padding': '0', position: 'fixed', zIndex: '1', top: '0px' }} light expand="md">
            <Link to='/landing-page' style={{
              'height': '3rem',
              'color': '#EEEEEE',
              'fontSize': '3em',
              'fontFamily': 'Modak, cursive',
              'lineHeight': '100%',
              'display': 'inline-block',
              'cursor': 'pointer',
              'float': 'left',
              'marginLeft': '1rem',
              'marginTop': '.5rem'
            }} >AdMe</Link>
            <Nav className="ml-auto" style={{ 'float': 'right' }} navbar>
              <NavItem style={{ 'bottom': '10%' }}>
                <Link to='/landing-page' data-toggle="tooltip" data-placement="bottom" title="Home" style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><HomeIcon style={{
                    'bottom': '10%'
                  }} />
                </Link>
              </NavItem>
              <NavItem>
                <NavLink style={{
                  'height': '3rem',
                  'width': '2rem'
                }}></NavLink>
              </NavItem>
              <NavItem style={{ 'bottom': '10%' }}>
                <Link to='/all-campaigns-page' style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><CampaignIcon style={{
                    'bottom': '10%'
                  }}/>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink style={{
                  'height': '3rem',
                  'width': '2rem'
                }}></NavLink>
              </NavItem>
              {this.context.currentUser.type !== 'company' ? <NavItem style={{ 'bottom': '10%' }}>
                <Link to={`/creator-portfolio/${this.context.currentUser.id}`} style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><PortfolioIcon style={{
                    'bottom': '10%'
                  }} />
                </Link>
              </NavItem> : <NavItem style={{ 'bottom': '10%' }}>
                <Link to={`/company-dashboard/${this.context.currentUser.id}`} data-toggle="tooltip" data-placement="bottom" title="Company Dashboard" style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><CompanyIcon style={{
                    'bottom': '10%'
                  }} />
                </Link>
              </NavItem>}

              <NavItem>
                <NavLink style={{
                  'height': '3rem',
                  'width': '2rem'
                }}></NavLink>
              </NavItem>
              <NavItem style={{ 'bottom': '10%' }}>
                <Link to='/settings' data-toggle="tooltip" data-placement="bottom" title="Settings" style={{
                  'padding': '0rem .5rem',
                  'height': '3rem',
                  'width': '4rem',
                  'backgroundRepeat': 'no-repeat',
                  'cursor': 'pointer'
                }}><SettingsIcon style={{
                    'bottom': '10%'
                  }} />
                </Link>
              </NavItem>
              <NavItem>
                <NavLink style={{
                  'height': '3rem',
                  'width': '2rem'
                }}></NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        }
        {this.checkUserExists() &&
          <>
          <div style={{ height: '4rem', width: '100%' }}></div>
          <Navbar className='d-block d-md-none' style={{ 'backgroundColor': '#841D9E', 'width': '100vw', 'textAlign': 'center', 'padding': '0', position: 'fixed', zIndex: '1', top: '0px' }} light>
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
                  <Link to='/landing-page' style={{ 'color': '#000000' }} onClick={this.closeNavbar}>Home</Link>
                </NavItem>
                {this.context.currentUser.type !== 'company' ? <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white', 'cursor': 'pointer' }}>
                  <Link to={`/creator-portfolio/${this.context.currentUser.id}`} style={{ 'color': '#000000' }} onClick={this.closeNavbar}>Creator Portfolio</Link>
                </NavItem> : <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white', 'cursor': 'pointer' }}>
                  <Link to={`/company-dashboard/${this.context.currentUser.id}`} style={{ 'color': '#000000' }} onClick={this.closeNavbar}>Company Dashboard</Link>
                </NavItem>}
                <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white' }}>
                  <Link to='/all-campaigns-page' style={{ 'color': '#000000' }} onClick={this.closeNavbar}>Campaigns</Link>
                </NavItem >
                <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white', 'borderBottom': '2px' }}>
                  <Link to='/settings' style={{ 'color': '#000000' }} onClick={this.closeNavbar}>Settings</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          </>
        }
      </div>
    );
  }
}
NavBar.contextType = AppContext;
