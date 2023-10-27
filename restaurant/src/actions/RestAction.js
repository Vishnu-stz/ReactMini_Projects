import axios from "axios";
import { FAIL, SUCCESS } from "../constants/RestConstants";



// logic to update store data


// api call   -   dispatchable function
export const getRestaurants = async (dispatch) => {

    // const result = await axios.get('/restaurant.json')
    // console.log(result.data.restaurants);

    try {

        const {data} = await axios.get('/restaurant.json')
        console.log(data.restaurants);
        // dispatch the expected output payload to reducer

        dispatch(
            {
                payload : data.restaurants ,
                type    : SUCCESS 
            }
        )

    }
    catch(error) {

        dispatch (
            {
                payload : error ,
                type    : FAIL
            }
        )
        
    }

    



}