import React from 'react';
import AppContext from '../context';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Axios from 'axios';

export default class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      requirements: '',
      runSpace: '',
      rewards: '',
      campaignContent: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  handleChange(event) {
    this.setState(
      { [event.target.name]: event.target.value }
    );
  }

  fileSelectedHandler(event) {
    this.setState({
      campaignContent: event.target.files[0]
    });
  }
  fileUploadHandler() {
    const formdata = {};
    formdata.append('image', this.state.selectedFile, this.state.selectedFile.name);
    Axios.post('http://localhost:3000/api/campaigns', formdata, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress: ' + (progressEvent.loaded / progressEvent.total * 100) + '%');
      }
    })
      .then(res => {
        console.log(res);
      });
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
      <Form className="p-4 rounded m-3 creatorSubmissionForm" onSubmit={this.fileUploadHandler}>
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
          <Label for="file">Upload Campaign Image</Label>
          <Input onChange={this.fileUploadHandler} type="file" name="campaignContent" id="file" required/>
          <FormText color="muted">
            Upload an Image:
          </FormText>
        </FormGroup>
        <Button className="shadow creatorSubmitButton">Submit</Button>
      </Form>
    );
  }
}

CreateCampaign.contextType = AppContext;

{/* <FormGroup>
          <Label for="mov-file">Upload Campaign Video</Label>
          <Input onChange={this.fileSelectedHandler} type="file" name="campaignContent" id="mov-file"></Input>
          <FormText>Upload a Video:</FormText>
        </FormGroup> */}