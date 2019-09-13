import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AppContext from '../context';

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
                  this.context.setUser(0);
                  this.context.setView('creator-portfolio', {});
                }}>Tim H.</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown className="switchUserDropDown p-4" size="lg">
              <DropdownToggle caret>
          Company
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => {
                  this.context.setUser(1);
                  this.context.setView('company-dashboard', {});
                }}>Target</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

SwitchUserPage.contextType = AppContext;
