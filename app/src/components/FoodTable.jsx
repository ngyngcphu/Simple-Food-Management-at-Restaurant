import React, { PureComponent } from "react";
import { Button, Modal, Form, Row } from "react-bootstrap";
import FoodCard from "./FoodCard";
import Footer from "./Footer";
import { request } from "../utils/request";
import { sortNA, sortND, sortNS, sortPA, sortPD } from "../services/sort";
export class FoodTable extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            foodData: props.foodData,
            lists: ["Combo", "Foody", "Drink", "Appetizer", "Dessert"],
            type: "",
            showModal: false,
            newFoodName: "",
            newFoodPrice: "",
            newFoodDiscount: "",
            newFoodImageUrl: "",
            newFoodType: "",
            newFoodDescription: "",
            newFoodImage: "",
            filterSelection: "ns",
        };
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.foodData !== this.props.foodData) {
            this.setState({ foodData: this.props.foodData });
        }
    }

    classifyFood = (foodData) => {
        return this.state.type === "" || foodData.type === this.state.type;
    };

    handleShowModal = () => {
        this.setState({ showModal: true });
    };

    handleCloseModal = () => {
        this.setState({
            showModal: false,
            newFoodName: "",
            newFoodPrice: "",
            newFoodDiscount: "",
            newFoodImageUrl: "",
            newFoodType: "",
            newFoodDescription: "",
        });
    };

    handleAddFood = async () => {
        // Create a new food item object
        const newFood = {
            name: this.state.newFoodName,
            price: parseFloat(this.state.newFoodPrice),
            discount: this.state.newFoodDiscount,
            imageUrls: this.state.newFoodImageUrl,
            type: this.state.newFoodType,
            description: this.state.newFoodDescription,
        };

        try {
            // Send a POST request to the server to add the new food item
            const response = await request.post('/food', newFood);

            // If the request is successful, update the state with the new food item
            const updatedFoodData = [...this.state.foodData, response.data];
            this.setState({
                foodData: updatedFoodData,
                showModal: false,
                newFoodName: "",
                newFoodPrice: "",
                newFoodDiscount: "",
                newFoodImageUrl: "",
                newFoodType: "",
                newFoodDescription: "",
            });
        } catch (error) {
            // Handle errors if any
            console.log(error);
        }
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleFilterSelection = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
            newFoodType: value // Update the newFoodType property with the selected value
        });
    };

    handleFilter = (event) => {
        this.setState({ filterSelection: event.target.value });
        console.log(event.target.value);
        var sortFunc;
        switch (event.target.value) {
            case "na":
                sortFunc = sortNA;
                break;

            case "nd":
                sortFunc = sortND;
                break;

            case "pa":
                sortFunc = sortPA;
                break;

            case "pd":
                sortFunc = sortPD;
                break;

            default:
                sortFunc = sortNS;
                break;
        }
        this.state.foodData.sort(sortFunc);
        this.setState({ foodData: this.state.foodData });
    };

    render() {

        return (
            <div>
                <div style={{ width: "100%" }}>
                    <Row
                        style={{
                            backgroundColor: "#E9E9E9",
                            height: "100px",
                            width: "100%",
                            "justifyContent": "space-between",
                        }}
                    >
                        {this.state.lists.map((list, index) => (
                            <Button
                                key={index}
                                className="btn btn-light"
                                variant="primary"
                                onClick={() => {
                                    if (this.state.type === list)
                                        this.setState({ type: "" });
                                    else this.setState({ type: list });
                                }}
                                style={
                                    this.state.type === list
                                        ? {
                                            width: "100px",
                                            height: "52px",
                                            backgroundColor: "#ffffff",
                                            borderColor: "#F63C3C",
                                            fontWeight: "bold",
                                            color: "#F63C3C",
                                            margin: "25px 25px 25px 25px",
                                            borderRadius: "50px",
                                            boxShadow: "1px 1px #F63C3C",
                                        }
                                        : {
                                            width: "100px",
                                            height: "52px",
                                            backgroundColor: "#ffffff",
                                            borderColor: "#ffffff",
                                            fontWeight: "bold",
                                            color: "#000000",
                                            margin: "25px 25px 25px 25px",
                                            borderRadius: "12px",
                                        }
                                }
                            >
                                {list}
                            </Button>
                        ))}

                        <Form.Select
                            size="sm"
                            style={{
                                width: "150px",
                                margin: "25px",
                                color: "white",
                                backgroundColor: "#F63C3C",
                            }}
                            defaultValue="ns"
                            onChange={this.handleFilter}
                        >
                            <option
                                value="ns"
                                style={{
                                    color: "black",
                                    backgroundColor: "white",
                                }}
                            >
                                Not Specified
                            </option>
                            <option
                                value="na"
                                style={{
                                    color: "black",
                                    backgroundColor: "white",
                                }}
                            >
                                Name Ascending
                            </option>
                            <option
                                value="nd"
                                style={{
                                    color: "black",
                                    backgroundColor: "white",
                                }}
                            >
                                Name Descending
                            </option>
                            <option
                                value="pa"
                                style={{
                                    color: "black",
                                    backgroundColor: "white",
                                }}
                            >
                                Price Ascending
                            </option>
                            <option
                                value="pd"
                                style={{
                                    color: "black",
                                    backgroundColor: "white",
                                }}
                            >
                                Price Descending
                            </option>
                        </Form.Select>
                    </Row>
                </div>
                <Button
                    variant="primary"
                    onClick={this.handleShowModal}
                    style={{ margin: "20px" }}
                >
                    Add Food
                </Button>
                <div
                    style={{
                        backgroundColor: "#E9E9E9",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {this.state.foodData
                        .filter(this.classifyFood)
                        .map((data, index) => {
                            return (
                                <FoodCard
                                    key={index}
                                    id={data.id}
                                    name={data.name}
                                    price={data.price}
                                    image={data.imageUrls}
                                    discount={data.discount}
                                    description={data.description}
                                    foodData={this.state.foodData}
                                />
                            );
                        })}
                </div>
                <Modal
                    show={this.state.showModal}
                    onHide={this.handleCloseModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Food</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="foodName">
                                <Form.Label>Food Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter food name"
                                    name="newFoodName"
                                    value={this.state.newFoodName}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="foodPrice">
                                <Form.Label>Food Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter food price"
                                    name="newFoodPrice"
                                    value={this.state.newFoodPrice}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="foodDiscount">
                                <Form.Label>Food Discount</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter food discount"
                                    name="newFoodDiscount"
                                    value={this.state.newFoodDiscount}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="foodImage">
                                <Form.Label>Food Image URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter food image URL"
                                    name="newFoodImageUrl"
                                    value={this.state.newFoodImageUrl}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="foodType">
                                <Form.Label>Food Type</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="type"
                                    value={this.state.type}
                                    onChange={this.handleFilterSelection}
                                >
                                    <option value="">All</option>
                                    <option value="Combo">Combo</option>
                                    <option value="Foody">Foody</option>
                                    <option value="Drink">Drink</option>
                                    <option value="Appetizer">Appetizer</option>
                                    <option value="Dessert">Dessert</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="foodDescription">
                                <Form.Label>Food Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Enter food description"
                                    name="newFoodDescription"
                                    value={this.state.newFoodDescription}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.handleCloseModal}
                        >
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleAddFood}>
                            Add Food
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Footer />
            </div>
        );
    }
}

export default FoodTable;
