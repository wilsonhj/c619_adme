import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AppContext from '../context';
import { Link } from 'react-router-dom';

export default class SwitchUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOptions: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="switchUserContainer m-3 rounded p-5 d-flex flex-column justify-content-center">
          <h1 className="d-block mx-auto">Switch User </h1>
          <div className="d-flex flex-wrap mx-auto">
            <UncontrolledDropdown className="switchUserDropDown p-4" size="lg">
              <DropdownToggle caret>
        Creator
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => {
                  this.context.setUser(2, 'creator');
                  // this.context.setView('creator-portfolio', { creatorID: 2 });
                }}><Link to='/creator-portfolio/2'>Tim H.</Link></DropdownItem>
                <DropdownItem onClick={() => {
                  this.context.setUser(1, 'creator');
                  // this.context.setView('creator-portfolio', { creatorID: 1 });
                }}><Link to='/creator-portfolio/1'>Daniel Paschal</Link></DropdownItem>
                <DropdownItem onClick={() => {
                  this.context.setUser(3, 'creator');
                  // this.context.setView('creator-portfolio', { creatorID: 3 });
                }}><Link to='/creator-porfolio/3'>Sam Durant</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown className="switchUserDropDown p-4" size="lg">
              <DropdownToggle caret>
          Company
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => {
                  this.context.setUser(1, 'company');
                  // this.context.setView('company-dashboard', { companyID: 1 });
                }}><Link to='/company-dashboard/1'>Target</Link></DropdownItem>
                <DropdownItem onClick={() => {
                  this.context.setUser(2, 'company');
                  // this.context.setView('company-dashboard', { companyID: 2 });
                }}><Link to='/company-dashboard/2'>San Diego Zoo</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
SwitchUserPage.contextType = AppContext;
