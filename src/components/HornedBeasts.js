
import React from 'react';
import Card from 'react-bootstrap/Card';
class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfPats: 0
        }
    }


    increasePatsNum = () => {
        this.setState(
            {
                numberOfPats: this.state.numberOfPats + 1
            }
        )
    }

    showTheModal = ()=>{
        // console.log(this.props);
        this.props.show(this.props)
    }

    render() {

        return (
            <div>

                <Card style={{ width: '18rem' }} class='card' onClick={this.showTheModal}>
                    <Card.Img variant="top" src={this.props.imgUrl} onClick={this.increasePatsNum} alt={this.props.title} title={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>

                        <Card.Text>
                            {this.props.disc}
                        </Card.Text>

                        <Card.Text>
                            <p>❤️ {this.state.numberOfPats}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        );

    }
}

export default HornedBeast;