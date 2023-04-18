import { PureComponent } from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class FoodCard extends PureComponent {
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
                            (discount.length > 0 && discount[0] !== "0") ? <div className="text-primary text-start" >
                                <p className="text-decoration-line-through text-secondary" style={{ marginLeft: '30%' }}>{Intl.NumberFormat().format(price) + " VNĐ"}</p>
                                <h4 style={{ marginLeft: '23%' }}>{Intl.NumberFormat().format(price * (1 - parseFloat(discount) / 100)) + " VNĐ"}</h4>
                            </div> : <div className="text-primary text-start" >
                                <p className="text-decoration-line-through text-secondary" style={{ marginLeft: '30%' }}>{Intl.NumberFormat().format(price) + " VNĐ"}</p>
                                <h4 style={{ marginLeft: '23%' }}>{Intl.NumberFormat().format(price * (1 - parseFloat(discount) / 100)) + " VNĐ"}</h4>
                            </div>
                        } */}
                        <span className="text-start text-danger fs-5" style={{ marginLeft: '25%' }}>{Intl.NumberFormat().format(price) + " VNĐ"}</span>
                    </Card.Text>
                    <Button className="btn btn-light text-danger" variant="primary"
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
