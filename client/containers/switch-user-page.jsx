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
                  const currentUser = JSON.stringify({ 'id': 2, 'type': 'creator' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(2, 'creator');
                  this.context.setView('creator-portfolio', { creatorID: 2 });
                }}>Shane McGrath</DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 1, 'type': 'creator' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(1, 'creator');
                  this.context.setView('creator-portfolio', { creatorID: 1 });
                }}>Daniel Paschal</DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 3, 'type': 'creator' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(3, 'creator');
                  this.context.setView('creator-portfolio', { creatorID: 3 });
                }}>Sam Durant</DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 4, 'type': 'creator' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(4, 'creator');
                  this.context.setView('creator-portfolio', { creatorID: 4 });
                }}>John South</DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 5, 'type': 'creator' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(5, 'creator');
                  this.context.setView('creator-portfolio', { creatorID: 5 });
                }}>Rachael Yamagata</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown className="switchUserDropDown p-4" size="lg">
              <DropdownToggle caret>
          Company
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 1, 'type': 'company' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(1, 'company');
                  this.context.setView('company-dashboard', { companyID: 1 });
                }}>Target</DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 2, 'type': 'company' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(2, 'company');
                  this.context.setView('company-dashboard', { companyID: 2 });
                }}>San Diego Zoo</DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 3, 'type': 'company' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(3, 'company');
                  this.context.setView('company-dashboard', { companyID: 3 });
                }}>Tampax</DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 4, 'type': 'company' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(4, 'company');
                  this.context.setView('company-dashboard', { companyID: 4 });
                }}>Volkswagen</DropdownItem>
                <DropdownItem onClick={() => {
                  const currentUser = JSON.stringify({ 'id': 5, 'type': 'company' });
                  localStorage.setItem('currentUser', currentUser);
                  this.context.setUser(5, 'company');
                  this.context.setView('company-dashboard', { companyID: 5 });
                }}>TM Productions</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

SwitchUserPage.contextType = AppContext;
