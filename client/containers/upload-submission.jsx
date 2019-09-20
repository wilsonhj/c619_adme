import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AppContext from '../context';

export default class UploadSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      typeOfContent: '',
      submissionContent: '',
      submissionThumbnail: '',
      submissionDescription: ''
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
    var formData = new FormData(event.target);
    formData.append('likes', '0');
    formData.append('creatorID', this.context.currentUser.id);
    formData.append('campaignID', this.props.match.params.campaignID);
    fetch('/api/submissions', {
      method: 'POST',
      body: formData
    }).then(this.props.history.push(`/creator-portfolio/${this.context.currentUser.id}`));
  }

  render() {
    return (
      <Form className="p-4 rounded m-3 creatorSubmissionForm shadow" onSubmit={this.handleSubmit}>
        <h4 className="mb-3 mx-auto font-weight-bold">Upload Your Submission</h4>
        <FormGroup>
          <Label className="font-weight-bold">Title </Label>
          <Input className="shadow-sm" type="text" name="title" onChange={this.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText" className="font-weight-bold">Description</Label>
          <Input type="textarea" name="submissionDescription" id="exampleText" required/>
        </FormGroup>
        <FormGroup>
          <Label className="font-weight-bold">Select Content Type</Label>
          <Input className="shadow-sm" onChange={this.handleChange} type="select" name="typeOfContent" required>
            <option></option>
            <option value="Video">Video</option>
            <option value="Image">Image</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label className="font-weight-bold">Submission File</Label>
          <Input onChange={this.handleChange} type="file" name="submissionContent" id="exampleFile" required/>
          <FormText color="muted">
            Please select the file you would like to upload.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label className="font-weight-bold">Submission Thumbnail Image</Label>
          <Input onChange={this.handleChange} type="file" name="submissionThumbnail" id="exampleFile" required />
          <FormText color="muted">
            Please select the image your would like to use for the thumbnail.
          </FormText>
        </FormGroup>
        <Button type ="submit" className="shadow creatorSubmitButton">Submit</Button>
      </Form>
    );
  }
}

UploadSubmission.contextType = AppContext;
