import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      requirements: '',
      runSpace: '',
      rewards: ''
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
    data.append('companyID', '1');
    fetch('http://localhost:3000/api/campaigns',
      {
        method: 'POST',
        body: data
      })
      .then(res => res.json())
      .then(this.context.setView('company-dashboard', {}));
  }

  render() {
    return (
      <Form className="p-4 rounded m-3 creatorSubmissionForm" onSubmit={this.handleSubmit}>
        <h4 className="mb-3 mx-auto font-weight-bold">Upload Your Submission</h4>
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
          <Label for="file">File</Label>
          <Input onChange={this.handleChange} type="file" name="campaignContent" id="file" required/>
          <FormText color="muted">
            Please upload a file:
          </FormText>
        </FormGroup>
        <Button className="shadow creatorSubmitButton">Submit</Button>
      </Form>
    );
  }
}
