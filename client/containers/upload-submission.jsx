import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class UploadSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      typeOfContent: '',
      submissionContent: ''
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
    formData.append('creatorID', '1');
    formData.append('requestID', '1');

    fetch('http://localhost:3000/api/submissions',
      {
        method: 'POST',
        body: formData

      })
      .then(res => res.json()).catch(err => { throw err; });
  }

  render() {
    return (
      <Form className="p-4 rounded m-3 creatorSubmissionForm" onSubmit={this.handleSubmit}>
        <h4 className="mb-3 mx-auto font-weight-bold">Upload Your Submission</h4>
        <FormGroup>
          <Label>Title </Label>
          <Input className="shadow-sm" type="text" name="title" onChange={this.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label>Select Content Type</Label>
          <Input className="shadow-sm" onChange={this.handleChange} type="select" name="typeOfContent" required>
            <option></option>
            <option value="Video">Video</option>
            <option value="Image">Image</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input onChange={this.handleChange} type="file" name="submissionContent" id="exampleFile" required/>
          <FormText color="muted">
            Please select the file you would like to upload.
          </FormText>
        </FormGroup>
        <Button className="shadow creatorSubmitButton">Submit</Button>
      </Form>
    );
  }
}
