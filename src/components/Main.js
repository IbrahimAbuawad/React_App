import React from 'react';
import CardsGroup from './CardsGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';


class Main extends React.Component {



    
        
   
    
   

    render() {

        return <>
            <CardGroup id='cardGroup'>
                <CardsGroup jsonData1={this.props.jsonData1} show={this.props.showFunc} myState={this.props.myState}  />
            </CardGroup>
          
        </>
    }




}

export default Main;