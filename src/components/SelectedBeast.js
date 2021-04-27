import React from 'react';
import HornedBeast from './HornedBeasts';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {




    render() {

        return <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered >      
            <HornedBeast />
        </Modal>

    }

}

export default SelectedBeast;


