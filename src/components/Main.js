import React from 'react';
import CardsGroup from './CardsGroup';
import CardGroup from 'react-bootstrap/CardGroup';




import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {





    render() {

        return <CardGroup id='cardGroup'>
                <CardsGroup />
            </CardGroup>
    }




}

export default Main;