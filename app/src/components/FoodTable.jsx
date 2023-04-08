import { Component } from "react";
import FoodType from './FoodType'
import FoodCard from './FoodCard'
import MockData from './MockData'

class FoodTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div style={{ width: '100%' }}>
                    <FoodType />
                </div>
                <div style={{ backgroundColor: '#E9E9E9', width: '100%' }}>
                    {
                        MockData.map((val) => {
                            return <FoodCard name={val.food_name} price={val.price} image={val.img} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default FoodTable;