import React from 'react';
import HornedBeast from './HornedBeasts';

import jsonData from '../data.json';




import 'bootstrap/dist/css/bootstrap.min.css';


class CardsGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: jsonData
        };
    }




    render() {

        return this.state.data.map(element => {
            return <HornedBeast
            
                title={element.title}
                imgUrl={element.image_url}
                disc={element.description}
            />
        });
    }




}

export default CardsGroup;