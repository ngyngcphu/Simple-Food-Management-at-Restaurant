import { getFood } from "../services/food";

export const searchData = async (state , action) => {
    switch (action.type) {
        case "GETDATAFROMSERVICE":
            return await getFood();
        case "UPDATE":
            return action.payload;
        default:
            return await getFood();
    }
};

export default searchData;