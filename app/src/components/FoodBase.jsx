import React, { Component } from "react";
import { getFood, addFood } from "../services/food";
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
        this.setState({ searchData: newData });
    }

    handleAddFood = async (newFood) => {
        // Add new food to the server
        const response = await addFood(newFood);

        // Update state with new food data
        const updatedFoodData = [...this.state.searchData, response.data];
        this.setState({ searchData: updatedFoodData });
    }

    render() {
        const { searchData } = this.state;

        return (
            <div>
                <NavBar foodData={searchData} updateFoodData={this.handleFoodDataUpdate} addFood={this.handleAddFood} />
                <FoodTable foodData={searchData} />
            </div>
        );
    }

}
