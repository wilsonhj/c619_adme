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
          }}>AdMe</div>
          <Nav className="ml-auto" style={{ 'float': 'right' }} navbar>
            <NavItem style={{ 'bottom': '10%' }}>
              <NavLink style={{
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
                'width': '4rem'
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
                'width': '4rem'
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
                'width': '4rem'
              }}></NavLink>
            </NavItem>
            <NavItem style={{ 'bottom': '10%' }}>
              <NavLink style={{
                'padding': '0rem .5rem',
                'height': '3rem',
                'width': '4rem',
                'backgroundRepeat': 'no-repeat',
                'cursor': 'pointer'
              }}><PortfolioIcon style={{
                  'bottom': '10%'
                }} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{
                'height': '3rem',
                'width': '4rem'
              }}></NavLink>
            </NavItem>
            <NavItem style={{ 'bottom': '10%' }}>
              <NavLink style={{
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
                'width': '4rem'
              }}></NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Navbar className='d-block d-md-none' style={{ 'backgroundColor': '#A298A5', 'width': '100%', 'textAlign': 'center', 'padding': '0' }} light>
          <div style={{
            'height': '3rem',
            'color': '#841D9E',
            'fontSize': '3em',
            'fontFamily': 'Modak, cursive',
            'paddingBottom': '10%',
            'display': 'inline-block',
            'textAlign': 'center'
          }}>AdMe</div>
          <NavbarToggler style={{ 'float': 'right' }} onClick={this.toggleNavbar} className="mr-2" />
          <Collapse style={{ 'padding': '0' }} isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white' }}>
                <NavLink href="">Home</NavLink>
              </NavItem>
              <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white' }}>
                <NavLink href="">Portfolio</NavLink>
              </NavItem>
              <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white' }}>
                <NavLink href="">Messages</NavLink>
              </NavItem>
              <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white' }}>
                <NavLink href="">Campaigns</NavLink>
              </NavItem >
              <NavItem style={{ 'border': 'solid 1px #841D9E', 'textAlign': 'center', 'backgroundColor': 'white' }}>
                <NavLink href="">Settings</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
