import { PureComponent } from "react";
import { Card } from 'react-bootstrap';
import FoodDetail from './FoodDetail';

class FoodCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { id, name, price, image, discount, description, foodData } = this.props;

        return (
            <div>
                <Card
                    style={{
                        width: '18rem',
                        display: 'inline-block',
                        marginTop: '3%',
                        marginBottom: '4%',
                        marginLeft: '6px',
                        marginRight: '5px'
                    }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>{name}</Card.Title>
                        <Card.Text style={{ width: '18rem', color: '#F63C3C', fontWeight: 'bold' }}>
                            {
                                <span className="text-danger text-start" >
                                    <span className="text-decoration-line-through text-secondary" style={{ marginLeft: '30%' }}>{Intl.NumberFormat().format(price) + " VNĐ"}</span>
                                    <br />
                                    <span style={{ marginLeft: '20%', fontSize: '25px' }}>{Intl.NumberFormat().format(price * (1 - parseFloat(discount) / 100)) + " VNĐ"}</span>
                                </span>
                            }
                        </Card.Text>
                        <FoodDetail
                            id={id}
                            name={name}
                            price={price}
                            discount={discount}
                            imageUrls={image}
                            description={description}
                            foodData={foodData}
                        />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default FoodCard;
