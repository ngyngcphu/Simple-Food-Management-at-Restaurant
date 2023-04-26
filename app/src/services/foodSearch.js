import { getFood } from "./food";
//import{FoodTable} from "../components/FoodTable"

export class FilteredData {
    constructor() {
        this.data = [];
        this.isSearch = false;
    }
}

var searchData = new FilteredData();

export function updateSearchData(newData) {
    searchData.data = newData;
    searchData.isSearch = true;
    //console.log(searchData.data)
}

export async function getFoodSearch() {
    if (searchData.isSearch) {
        return Promise.resolve(searchData.data);
    } else {
        const foodData = await getFood();
        return foodData;
    }
}

export { searchData };