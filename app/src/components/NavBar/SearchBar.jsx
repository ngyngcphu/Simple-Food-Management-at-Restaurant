import React, { Component } from "react";
import "./SearchBar.css";
import { FoodDetailOnSearch } from "../FoodDetail"
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { GrClose as CloseIcon } from "react-icons/gr";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
            wordEntered: "",
            showFoodDetail: false,
            selectedFoodId: null,
        };
    }

    handleFilter = (event) => {
        const searchWord = event.target.value;
        this.setState({
            wordEntered: searchWord,
        });

        const newFilter = this.props.data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        this.props.handleUpdateFoodData(newFilter);

        console.log(newFilter);

        if (searchWord === "") {
            this.setState({
                filteredData: [],
            });
        } else {
            this.setState({
                filteredData: newFilter,
            });
        }
    };

    clearInput = () => {
        this.setState({
            filteredData: [],
            wordEntered: "",
        });
    };

    // set show state to true and selectedFoodId when dataItem is clicked
    handleDataItemClick = (foodId) => {
        this.setState({ showFoodDetail: true, selectedFoodId: foodId });
    };

    // set show state to false when close button in FoodDetailOnSearch is clicked
    handleCloseFoodDetail = () => {
        this.setState({ showFoodDetail: false });
    };

    render() {
        const { placeholder } = this.props;
        const { filteredData, wordEntered } = this.state;

        return (
            <div>
                <div className="search">
                    <div className="searchInputs">
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={wordEntered}
                            onChange={this.handleFilter}
                        />
                        <div className="searchIcon">
                            {filteredData.length === 0 ? (
                                <SearchIcon />
                            ) : (
                                <CloseIcon id="clearBtn" onClick={this.clearInput} />
                            )}
                        </div>
                    </div>
                    {filteredData.length !== 0 && (
                        <div className="dataResult">
                            {filteredData.slice(0, 15).map((value, key) => {
                                return (
                                    <div
                                        key={key}
                                        className="dataItem"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => this.handleDataItemClick(value.id)} // handleDataItemClick is called when dataItem is clicked
                                    >
                                        <p>{value.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {this.state.showFoodDetail && (
                    // show FoodDetailOnSearch when showFoodDetail state is true
                    <FoodDetailOnSearch
                        id={this.state.selectedFoodId}
                        name={
                            filteredData.find((f) => f.id === this.state.selectedFoodId)?.name // add a check for the 'name' property
                        }
                        price={
                            filteredData.find((f) => f.id === this.state.selectedFoodId)?.price // add a check for the 'price' property
                        }
                        discount={
                            filteredData.find((f) => f.id === this.state.selectedFoodId)?.discount // add a check for the 'discount' property
                        }
                        imageUrls={
                            filteredData.find((f) => f.id === this.state.selectedFoodId)?.imageUrls // add a check for the 'imageUrls' property
                        }
                        description={
                            filteredData.find((f) => f.id === this.state.selectedFoodId)?.description // add a check for the 'description' property
                        }
                        foodData={this.props.data}
                        showFoodDetail={this.state.showFoodDetail}
                        handleClose={this.handleCloseFoodDetail}
                    />
                )}

            </div>
        );
    }
}

export default SearchBar;