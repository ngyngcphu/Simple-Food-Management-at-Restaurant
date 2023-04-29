import { PureComponent } from 'react';
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/foodstore.png';
import { SearchBar } from './SearchBar';
import { getFood } from "../../services/food";

class NavBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            foodData: props.foodData,
        };
    }

    async componentDidMount() {
        const { data } = await getFood();
        this.setState({ foodData: data });
    }

    handleUpdateFoodData = (newData) => {
        this.props.updateFoodData(newData);
    }

    render() {
        return (
            <Navbar bg="white" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="navItem">
                        <img src={logo} alt='Food Store' width="50" className="me-2" />
                        Food Store
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <SearchBar data={this.state.foodData} placeholder={"Enter food name ..."} handleUpdateFoodData={this.handleUpdateFoodData} />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;