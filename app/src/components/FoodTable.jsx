import React, { PureComponent } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import FoodCard from './FoodCard';
import Footer from "./Footer";
import { getFood } from "../services/food";

class FoodTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            foodData: [],

            lists: ['Combo', 'Foody', 'Drink', 'Appetizer', 'Dessert'],
            type: 'Combo',

            showModal: false,
            newFoodName: "",
            newFoodPrice: "",
            newFoodImage: ""
        };
    }

    async componentDidMount() {
        const { data } = await getFood();
        this.setState({ foodData: data })
    }

    classifyFood = (foodData) => {
        return foodData.type === this.state.type;
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
                </div>
                <Button variant="primary" onClick={this.handleShowModal} style={{ margin: '20px' }}>
                    Add Food
                </Button>
                <div style={{ backgroundColor: '#E9E9E9', width: '100%' }}>
                    {
                        this.state.foodData.filter(this.classifyFood).map((data, index) => {
                            return <FoodCard key={index} name={data.name} price={data.price} image={data.imageUrls} discount={data.discount} />
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
                <div style={{ backgroundColor: '#E9E9E9' }}>
                    <div id="PaginationSearch" >
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center pagination-lg">
                                <li className="page-item">
                                    <button className="page-link text-primary" aria-label="Previous" /*onClick={() => ChangePage(pageNumber - 1)}*/ style={{ color: 'rgb(246, 60, 60)' }}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </button>
                                </li>
                                {/* {
                                Array.from({ length: Math.ceil(temp.length / 10) }, (_, i) => i + 1).map((index) => { return <li class="page-item"><button class="page-link text-primary" onClick={() => Page(index)} style={{ color: 'rgb(246, 60, 60)' }}>{index}</button></li> })
                            } */}
                                <li className="page-item">
                                    <button className="page-link text-primary" aria-label="Next" /*onClick={() => ChangePage(pageNumber + 1)}*/ style={{ color: 'rgb(246, 60, 60)' }}>
                                        <span aria-hidden="true">&raquo;</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default FoodTable;