import React, { PureComponent } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import FoodType from './FoodType';
import FoodCard from './FoodCard';
import { getFood } from "../services/food";

class FoodTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            foodData: [],

            showModal: false,
            newFoodName: "",
            newFoodPrice: "",
            newFoodImage: ""
        };
    }

     async componentDidMount() {
        const { data } = await getFood();
        this.setState({foodData: data})
    }

    handleShowModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    handleAddFood = () => {
        // Add new food to the menu
        const { newFoodName, newFoodPrice, newFoodImage } = this.state;
        // You can implement your logic here to add the new food to your menu
        console.log("New food added: ", newFoodName, newFoodPrice, newFoodImage);
        // Close the modal and reset the input values
        this.setState({ showModal: false, newFoodName: "", newFoodPrice: "", newFoodImage: "" });
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <div style={{ width: '100%' }}>
                    <FoodType />
                </div>
                <Button variant="primary" onClick={this.handleShowModal} style={{ margin: '20px' }}>
                    Add Food
                </Button>
                <div style={{ backgroundColor: '#E9E9E9', width: '100%' }}>
                    {
                        this.state.foodData.map((data, index) => {
                            return <FoodCard key={index} name={data.food_name} price={data.price} image={data.imageUrls} />
                        })
                    }
                </div>
                <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Food</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="foodName">
                                <Form.Label>Food Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter food name" name="newFoodName" value={this.state.newFoodName} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="foodPrice">
                            <Form.Label>Food Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter food price" name="newFoodPrice" value={this.state.newFoodPrice} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="foodImage">
                            <Form.Label>Food Image URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter food image URL" name="newFoodImage" value={this.state.newFoodImage} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleAddFood}>
                        Add Food
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default FoodTable;