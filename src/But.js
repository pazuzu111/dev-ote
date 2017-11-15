import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./App.css";

class But extends React.Component {
    constructor() {
    super();
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
        <div>
            <div className='buttons'>
                <a className="buttons" onClick={this.toggle}> {this.props.name} </a>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}> {this.props.name} </ModalHeader>

                    <ModalBody>
                         <h4>{this.props.hours}</h4>
                         <h5>{this.props.deals}</h5>
                    </ModalBody>

                    <ModalFooter>
                    <Button color="secondary" color="danger" onClick={this.props.handleClick} disabled={this.props.voted}>Vote</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
        );
  }
}

export default But;



