import React from "react";
import jsonData from '../data.json';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component {


    filterDataFunc = (event) => {
        event.preventDefault();
        let newBeastArray = jsonData;
        let optionValue = Number(event.target.value);
        if (optionValue >= 1) {

          newBeastArray = jsonData.filter(element => { return (Number(element.horns) === optionValue); });

          this.props.myState(newBeastArray);
       
        }
        else {
            this.props.myState(jsonData);
        }
    }




    render() {
        return<>
         <Form >
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Custom select</Form.Label>
                <Form.Control as="select" custom name='select' onChange={this.filterDataFunc}>
                    <option value='-1'>All</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='100'>100</option>
                </Form.Control>
            </Form.Group>
        </Form>
</>

    }

}
export default Forms