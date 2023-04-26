import React, { PureComponent, Component } from "react";
import { Button, Modal, Form, Row } from "react-bootstrap";
import FoodCard from "./FoodCard";
import Footer from "./Footer";
import { getFood } from "../services/food";
import NavBar from "./NavBar/NavBar";

export class FoodData extends Component {
    static defaultProps = {
        searchData: []
    }

    constructor(props) {
        super(props);
        this.state = {
            searchData: props.searchData
        }
    }

    async componentDidMount() {
        const data = await getFood();
        this.setState({ searchData: data.data });
    }

    render() {
        const { searchData } = this.state;

        return (
            <div>
                <NavBar foodData={searchData} updateFoodData={this.handleFoodDataUpdate} />
                <FoodTable foodData={searchData} />
            </div>
        );
    }

    handleFoodDataUpdate = (newData) => {
        this.setState({ foodData: newData });
    }
}

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
        this.setState({ showModal: false });
    };

    handleAddFood = () => {
        // Add new food to the menu
        const { newFoodName, newFoodPrice, newFoodImage } = this.state;
        // You can implement your logic here to add the new food to your menu
        console.log(
            "New food added: ",
            newFoodName,
            newFoodPrice,
            newFoodImage
        );
        // Close the modal and reset the input values
        this.setState({
            showModal: false,
            newFoodName: "",
            newFoodPrice: "",
            newFoodImage: "",
        });
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    sortNS = (a, b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        return 0;
    };

    sortNA = (a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    };

    sortND = (a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
    };

    sortPA = (a, b) => {
        if (
            a.price * (1 - parseFloat(a.discount) / 100) >
            b.price * (1 - parseFloat(b.discount) / 100)
        )
            return 1;
        if (
            a.price * (1 - parseFloat(a.discount) / 100) <
            b.price * (1 - parseFloat(b.discount) / 100)
        )
            return -1;
        return 0;
    };

    sortPD = (a, b) => {
        if (
            a.price * (1 - parseFloat(a.discount) / 100) <
            b.price * (1 - parseFloat(b.discount) / 100)
        )
            return 1;
        if (
            a.price * (1 - parseFloat(a.discount) / 100) >
            b.price * (1 - parseFloat(b.discount) / 100)
        )
            return -1;
        return 0;
    };

    handleFilter = (event) => {
        this.setState({ filterSelection: event.target.value });
        console.log(event.target.value);
        var sortFunc;
        switch (event.target.value) {
            case "na":
                sortFunc = this.sortNA;
                break;

            case "nd":
                sortFunc = this.sortND;
                break;

            case "pa":
                sortFunc = this.sortPA;
                break;

            case "pd":
                sortFunc = this.sortPD;
                break;

            default:
                sortFunc = this.sortNS;
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

                        {/* <Form.Select size="lg">
                                <option>Large select</option>
                                </Form.Select>
                                <br />
                                <Form.Select>
                                <option>Default select</option>
                                </Form.Select>
                            <br /> */}
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
                                    name={data.name}
                                    price={data.price}
                                    image={data.imageUrls}
                                    discount={data.discount}
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
                            <Form.Group controlId="foodImage">
                                <Form.Label>Food Image URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter food image URL"
                                    name="newFoodImage"
                                    value={this.state.newFoodImage}
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
                <div style={{ backgroundColor: "#E9E9E9" }}>
                    <div id="PaginationSearch">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center pagination-lg">
                                <li className="page-item">
                                    <button
                                        className="page-link text-primary"
                                        aria-label="Previous"
                                        /*onClick={() => ChangePage(pageNumber - 1)}*/ style={{
                                            color: "rgb(246, 60, 60)",
                                        }}
                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                    </button>
                                </li>
                                {/* {
                                Array.from({ length: Math.ceil(temp.length / 10) }, (_, i) => i + 1).map((index) => { return <li class="page-item"><button class="page-link text-primary" onClick={() => Page(index)} style={{ color: 'rgb(246, 60, 60)' }}>{index}</button></li> })
                            } */}
                                <li className="page-item">
                                    <button
                                        className="page-link text-primary"
                                        aria-label="Next"
                                        /*onClick={() => ChangePage(pageNumber + 1)}*/ style={{
                                            color: "rgb(246, 60, 60)",
                                        }}
                                    >
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

export default FoodData;
