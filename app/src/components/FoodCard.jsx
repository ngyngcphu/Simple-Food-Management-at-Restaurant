import { Component } from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class FoodCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { name, price, image } = this.props;

        return (
            <Card style={{ width: '18rem', display: 'inline-block', marginTop: '3%', marginBottom: '4%', marginLeft: '6px', marginRight: '5px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{name}</Card.Title>
                    <Card.Text style={{ width: '18rem', color: '#F63C3C', fontWeight: 'bold' }}>
                        {/* {
                            (discount.length > 0 && discount[0] !== "0") ? <div class="text-primary text-start" >
                                <p class="text-decoration-line-through text-secondary" style={{ marginLeft: '30%' }}>{Intl.NumberFormat().format(price) + " VNĐ"}</p>
                                <h4 style={{ marginLeft: '23%' }}>{Intl.NumberFormat().format(price * (1 - parseFloat(discount) / 100)) + " VNĐ"}</h4>
                            </div> : <div class="text-primary text-start" >
                                <p class="text-decoration-line-through text-secondary" style={{ marginLeft: '30%' }}>{Intl.NumberFormat().format(price) + " VNĐ"}</p>
                                <h4 style={{ marginLeft: '23%' }}>{Intl.NumberFormat().format(price * (1 - parseFloat(discount) / 100)) + " VNĐ"}</h4>
                            </div>
                        } */}
                        <div class="text-primary text-start">
                            <p class="text-danger fs-5" style={{ marginLeft: '25%' }}>{Intl.NumberFormat().format(price) + " VNĐ"}</p>
                        </div>
                    </Card.Text>
                    <Button class="btn btn-light text-danger" variant="primary"
                        style={{ marginLeft: '15%', width: '183px', height: '52px', backgroundColor: '#ffffff', borderColor: '#BF0000', fontWeight: 'bold', color: '#BF0000' }}
                    >
                        Xem
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}
export default FoodCard;
