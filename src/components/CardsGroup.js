import React from 'react';
import HornedBeast from './HornedBeasts';


class CardsGroup extends React.Component {
   
    



    render() {

        return this.props.jsonData1.map(element => {
            return <HornedBeast
            
                title={element.title}
                imgUrl={element.image_url}
                disc={element.description}
                show={this.props.show}
                
            />
        });
    }




}

export default CardsGroup;