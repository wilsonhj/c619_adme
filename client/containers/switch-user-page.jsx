import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SwitchUserPage extends React.Component {

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
                <DropdownItem>Tim H.</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown className="switchUserDropDown p-4" size="lg">
              <DropdownToggle caret>
          Company
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Target</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </React.Fragment>
    );
  }

}
