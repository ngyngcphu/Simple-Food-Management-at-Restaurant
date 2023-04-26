import React, { Component } from "react";
import { getFood } from "../services/food";
import NavBar from "./NavBar/NavBar";
import FoodTable from "./FoodTable";

export default class FoodBase extends Component {
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

    handleFoodDataUpdate = (newData) => {
        console.log('hey there');
        this.setState({ searchData: newData });
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

}