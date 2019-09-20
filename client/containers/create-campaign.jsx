import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import AppContext from '../context.js';

export default class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      requirements: '',
      runSpace: '',
      rewards: '',
      preferredContentType: '',
      submitSuccess: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      { [event.target.name]: event.target.value }
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    data.append('submissionsReceived', '0');
    data.append('companyID', this.context.currentUser.id);
    fetch('/api/campaigns',
      {
        method: 'POST',
        body: data
      })
      .then(res => res.json()).then(res => {
        this.props.history.push('/company-dashboard/' + this.context.currentUser.id);
      });
  }

  render() {
    return (
      <>
      <Form className="p-4 rounded m-3 creatorSubmissionForm" onSubmit={this.handleSubmit}>
        <h4 className="mb-3 mx-auto font-weight-bold">Create Campaign</h4>
        <FormGroup>
          <Label>Campaign Title </Label>
          <Input className="shadow-sm" type="text" name="title" onChange={this.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label>Description </Label>
          <Input className="shadow-sm" type="text" name="description" onChange={this.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label>Requirements </Label>
          <Input className="shadow-sm" type="text" name="requirements" onChange={this.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label>Run Space </Label>
          <Input className="shadow-sm" type="text" name="runSpace" onChange={this.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label>Rewards</Label>
          <Input className="shadow-sm" onChange={this.handleChange} type="text" name="rewards" required/>
        </FormGroup>
        <FormGroup>
          <Label>Specify type of media to be uploaded by content creators</Label>
          <Input className="shadow-sm" onChange={this.handleChange} type="select" name="preferredContentType" required>
            <option></option>
            <option value="Video">Video</option>
            <option value="Image">Image</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="file">Upload Campaign Image</Label>
          <Input onChange={this.handleChange} type="file" name="campaignContent" id="file" required/>
          <FormText color="muted">
            Upload an Image:
          </FormText>
        </FormGroup>
        <Button className="shadow creatorSubmitButton">Submit</Button>
      </Form>
      </>
    );
  }
}
CreateCampaign.contextType = AppContext;
