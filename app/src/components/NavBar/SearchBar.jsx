import React, { useState } from "react";
import "./SearchBar.css";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { GrClose as CloseIcon } from "react-icons/gr";



export function SearchBar(data, updateFoodDatas) {

    const [filteredData, setFilteredData] = useState([]);
    //console.log(data)
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        //console.log(Array.isArray(data.data))
        if (Array.isArray(data.data)) {
            const newFilter = data.data.filter((value) => {
                return value.name.toLowerCase().includes(searchWord.toLowerCase());
            });
            updateFoodDatas(newFilter);
            //console.log(searchData.getData());
            if (searchWord === "") {
                setFilteredData([]);
            } else {
                setFilteredData(newFilter);
            }
        }
    };

    const clearFilter = () => {
        setFilteredData([]);
    };

    return (
        <div>
            <SearchBarFormat
                placeholder="Search for something"
                data={data}
                onFilter={handleFilter}
                filteredData={filteredData}
                onClear={clearFilter}
            />
            {/* Other components */}
        </div>
    );
}

export default function SearchBarFormat({ placeholder, data, onFilter, filteredData, onClear }) {
    const [wordEntered, setWordEntered] = useState("");

    const handleFilterChange = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        onFilter(event);
    };

    const handleClear = () => {
        onClear();
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilterChange}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={handleClear} />
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className="dataItem" href={value.link} target="_blank" rel="noreferrer">
                                <p>{value.name} </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
