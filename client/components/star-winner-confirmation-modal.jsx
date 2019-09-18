import React from 'react';
// eslint-disable-next-line
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class StarWinnerConfirmationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      centered: true,
      starHover: false

    };
    this.toggleStarHover = this.toggleStarHover.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggleStarHover() {
    this.setState({ starHover: !this.state.starHover });

  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
    let starStyle;
    if (!this.state.starHover) {
      starStyle = { color: 'white', fontSize: '1.2rem', textShadow: '2px 2px 10px gray' };
    } else {
      starStyle = { color: '#FFFF00', fontSize: '2rem', textShadow: '2px 2px 10px gray' };
    }
    return (
      <div>
        <Form inline onSubmit={e => e.preventDefault()}>
          <div className="fas fa-star pickWinner"
            style={starStyle}
            onMouseEnter={this.toggleStarHover}
            onMouseLeave={this.toggleStarHover}
            onClick={this.toggle}></div>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>{this.props.message}</ModalHeader>
          <ModalFooter>
            <Button style={{ backgroundColor: 'rebeccapurple', color: 'white' }} onClick={() => {
              this.props.chooseWinner(this.props.campaignID, parseInt(this.props.submissionID));
            }}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default StarWinnerConfirmationModal;
