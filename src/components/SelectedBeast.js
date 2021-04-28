import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import CardsGroup from './CardsGroup';

class SelectedBeast extends React.Component {

 
 
  

    render() {

        return <Modal show={this.props.showMyModal} onHide={this.props.notShow} >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img variant="top" src={this.props.imgUrl}  alt={this.props.title} title={this.props.title} />  
        
        <h1>{this.props.disc}</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.notShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    }

}

export default SelectedBeast;


