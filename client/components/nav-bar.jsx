import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ 'backgroundColor': '#A298A5' }} light expand="md">
          <div style={{
            'height': '3rem',
            'color': '#841D9E',
            'fontSize': '3em',
            'fontFamily': 'Modak, cursive',
            'lineHeight': '100%'
          }}>AdMe</div>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{
                'backgroundImage': "url('img/note.svg')",
                'height': '3rem',
                'width': '4rem',
                'backgroundRepeat': 'no-repeat' }}></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{
                'height': '3rem',
                'width': '4rem'
              }}></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{
                'backgroundImage': "url('img/messeges-icon.svg')",
                'height': '3rem',
                'width': '4rem',
                'backgroundRepeat': 'no-repeat'
              }}></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{
                'height': '3rem',
                'width': '4rem'
              }}></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{
                'backgroundImage': "url('img/notification.svg')",
                'height': '3rem',
                'width': '4rem',
                'backgroundRepeat': 'no-repeat'
              }}></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{
                'height': '3rem',
                'width': '4rem'
              }}></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{
                'backgroundImage': "url('img/portfolio.svg')",
                'height': '3rem',
                'width': '4rem',
                'backgroundRepeat': 'no-repeat'
              }}></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{
                'height': '3rem',
                'width': '4rem'
              }}></NavLink>
            </NavItem>
            <NavItem >
              <NavLink style={{
                'backgroundImage': "url('img/gear.svg')",
                'height': '3rem',
                'width': '4rem',
                'backgroundRepeat': 'no-repeat'
              }}></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{
                'height': '3rem',
                'width': '4rem'
              }}></NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
