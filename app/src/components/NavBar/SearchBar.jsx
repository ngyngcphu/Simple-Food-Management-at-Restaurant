import React, { Component } from "react";
import "./SearchBar.css";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { GrClose as CloseIcon } from "react-icons/gr";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
            wordEntered: "",
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

    render() {
        const { placeholder } = this.props;
        const { filteredData, wordEntered } = this.state;

        return (
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
                                <a
                                    key={key}
                                    className="dataItem"
                                    href={value.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p>{value.name}</p>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default SearchBar;