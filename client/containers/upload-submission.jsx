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

  handleSubmit() {
    fetch('http://localhost:3000/api/submissions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          'typeOfContent': this.state.typeOfContent,
          submissionContent: this.state.submissionContent,
          title: this.state.title,
          likes: 0,
          creatorID: 1,
          requestID: null
        }
      })
      .then(res => res.json());
  }

  render() {
    return (
      <Form className="p-4" onSubmit={this.handleSubmit}>
        <h2>Upload Your Submission</h2>
        <FormGroup>
          <Label>Title </Label>
          <Input type="text" name="title" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Select Content Type</Label>
          <Input onChange={this.handleChange} type="select" name="typeOfContent" id="exampleSelect">
            <option></option>
            <option value="Video">Video</option>
            <option value="Image">Image</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input onChange={this.handleChange} type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Please select the file you would like to upload.
          </FormText>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
