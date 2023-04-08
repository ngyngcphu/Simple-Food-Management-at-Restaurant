import { Component } from "react";
import { Button } from 'react-bootstrap';

class FoodType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ['Combo', 'Foody', 'Drink', 'Appetizer', 'Dessert'],
            type: 'Combo',
        };
    }

    render() {
        return (
            <div style={{ backgroundColor: '#E9E9E9', height: '100px', width: '100%' }}
            >
                {this.state.lists.map((list, index) => (
                    <Button key={index} className="btn btn-light"
                        variant="primary" onClick={() => this.setState({ type: list })}
                        style={this.state.type === list ? {
                            width: '150px', height: '52px', backgroundColor: '#ffffff',
                            borderColor: '#F63C3C', fontWeight: 'bold', color: '#F63C3C',
                            margin: '25px 25px 25px 67px', borderRadius: '50px', boxShadow: '1px 1px #F63C3C'
                        } : {
                            width: '150px', height: '52px', backgroundColor: '#ffffff',
                            borderColor: '#ffffff', fontWeight: 'bold', color: '#000000', margin: '25px 25px 25px 67px', borderRadius: '12px'
                        }}>
                        {list}
                    </Button>
                ))}
            </div>
        );
    }
}

export default FoodType;