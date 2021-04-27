import React from 'react';
import HornedBeast from './HornedBeasts';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {

constructor(props){
    super(props)

    this.state ={
        show:false
    }
}

handleModel = ()=>{

    this.setState({show:!this.state.show})
}


    render() {

        return <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show} giveMeModal={this.handleModel} >      
            <HornedBeast />
        </Modal>

    }

}

export default SelectedBeast;


