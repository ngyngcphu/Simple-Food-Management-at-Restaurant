import { PureComponent } from "react";
import { Button, Modal } from "react-bootstrap";
import DetailModal from "./DetailModal";
import { putFood, deleteFood } from "../services/food";

export default class FoodDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showEditModal: false,
            edittingId: null,
        }
    }

    showEditModal = (id) => {
        this.setState({ edittingId: id, showEditModal: true });
    };

    closeEditModal = () => {
        this.setState({ showEditModal: false });
    };

    saveEditModal = async (id, editFood) => {
        try {
            const response = await putFood(id, editFood);
            console.log(response.data);
            const updatedFoodData = [...this.props.foodData];
            const index = updatedFoodData.findIndex((food) => food.id === id);
            updatedFoodData[index] = response.data;
            this.setState({ foodData: updatedFoodData, showEditModal: false });
        } catch (error) {
            console.error(error);
        }
    };
    deleteEditModal = async (id) => {
        try {
            const response = await deleteFood(id);
            console.log(response.data);
            this.setState({
                foodData: this.props.foodData.filter((food) => food.id !== id),
                showEditModal: false,
            });
        } catch (error) {
            console.error(error);
        }
    };


    render() {
        return (
            <div>
                <Button
                    className="btn btn-light text-danger"
                    variant="primary"
                    style={{
                        marginLeft: '15%',
                        width: '183px',
                        height: '52px',
                        backgroundColor: '#ffffff',
                        borderColor: '#BF0000',
                        fontWeight: 'bold',
                        color: '#BF0000'
                    }}
                    onClick={() => this.setState({ show: true })}
                >
                    Xem
                </Button>
                <Modal size="xl" show={this.state.show} onHide={() => this.setState({ show: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thông tin món ăn</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container p-4">
                            <div className="row">
                                <div className="col-md-6 col-lg-5">
                                    <div className="row p-0">
                                        <img className="w-100" style={{ height: '400px' }} src={this.props.imageUrls} alt="foodImage" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="container">
                                        <div className="row text-start">
                                            <h1>{this.props.name}</h1>
                                        </div>
                                        <div className="text-danger text-start" style={{ width: '18rem', color: '#F63C3C', fontWeight: 'bold' }}>
                                            <h4>
                                                <span className="badge rounded-pill bg-danger">- {this.props.discount}</span>
                                            </h4>
                                            <span className="text-decoration-line-through text-secondary">{Intl.NumberFormat().format(this.props.price) + " VNĐ"}</span>
                                            <br />
                                            <span style={{ fontSize: '25px' }}>{Intl.NumberFormat().format(this.props.price * (1 - parseFloat(this.props.discount) / 100)) + " VNĐ"}</span>
                                        </div>
                                        <div className="row text-start fs-4 my-3">
                                            <h3>Thông tin chi tiết:</h3>
                                            <p>{this.props.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ show: false })}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.showEditModal(this.props.id)}>
                            Edit
                        </Button>
                    </Modal.Footer>
                </Modal>
                <DetailModal
                    show={this.state.showEditModal}
                    handleClose={this.closeEditModal}
                    food={
                        this.props.foodData?.find((x) => x.id === this.state.edittingId) ?? {}

                    }
                    handleSaveChanges={this.saveEditModal}
                    handleDelete={this.deleteEditModal}
                />
            </div>
        );
    }
}

export class FoodDetailOnSearch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.showFoodDetail,
            showEditModal: false,
            edittingId: null,
        }
    }

    showEditModal = (id) => {
        this.setState({ edittingId: id, showEditModal: true });
    };

    closeEditModal = () => {
        this.setState({ showEditModal: false });
    };

    saveEditModal = async (id, editFood) => {
        try {
            const response = await putFood(id, editFood);
            console.log(response.data);
            const updatedFoodData = [...this.props.foodData];
            const index = updatedFoodData.findIndex((food) => food.id === id);
            updatedFoodData[index] = response.data;
            this.setState({ foodData: updatedFoodData, showEditModal: false });
        } catch (error) {
            console.error(error);
        }
    };
    deleteEditModal = async (id) => {
        try {
            const response = await deleteFood(id);
            console.log(response.data);
            this.setState({
                foodData: this.props.foodData.filter((food) => food.id !== id),
                showEditModal: false,
            });
        } catch (error) {
            console.error(error);
        }
    };


    render() {
        return (
            <div>
                <Modal size="xl" show={this.state.show} onHide={() => { this.setState({ show: false }); this.props.handleClose() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thông tin món ăn</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container p-4">
                            <div className="row">
                                <div className="col-md-6 col-lg-5">
                                    <div className="row p-0">
                                        <img className="w-100" style={{ height: '400px' }} src={this.props.imageUrls} alt="foodImage" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="container">
                                        <div className="row text-start">
                                            <h1>{this.props.name}</h1>
                                        </div>
                                        <div className="text-danger text-start" style={{ width: '18rem', color: '#F63C3C', fontWeight: 'bold' }}>
                                            <h4>
                                                <span className="badge rounded-pill bg-danger">- {this.props.discount}</span>
                                            </h4>
                                            <span className="text-decoration-line-through text-secondary">{Intl.NumberFormat().format(this.props.price) + " VNĐ"}</span>
                                            <br />
                                            <span style={{ fontSize: '25px' }}>{Intl.NumberFormat().format(this.props.price * (1 - parseFloat(this.props.discount) / 100)) + " VNĐ"}</span>
                                        </div>
                                        <div className="row text-start fs-4 my-3">
                                            <h3>Thông tin chi tiết:</h3>
                                            <p>{this.props.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ show: false })}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.showEditModal(this.props.id)}>
                            Edit
                        </Button>
                    </Modal.Footer>
                </Modal>
                <DetailModal
                    show={this.state.showEditModal}
                    handleClose={this.closeEditModal}
                    food={
                        this.props.foodData?.find((x) => x.id === this.state.edittingId) ?? {}

                    }
                    handleSaveChanges={this.saveEditModal}
                    handleDelete={this.deleteEditModal}
                />
            </div>
        );
    }
}