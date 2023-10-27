import React, { useEffect, useState } from 'react'
import HotelDetails from './HotelDetails'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from './actions/RestAction'






function Home() {

    const dispatch = useDispatch()

    
        useEffect(() => {
            dispatch(getRestaurants)
        } , [] )

        const restaurants = useSelector(state => state.restReducer.restList)



        return (

            <div className='text-center'>

                <div>

                    <HotelDetails data = {}>  </HotelDetails>

                </div>

            </div>

        )

}

export default Home









   //    // state to hold he data
    //     const [Hotels , setHotels] = useState([])

    //    //  api to get all contacts from db.json
    //     const fetchHotel = async() => {

    //         var result = await fetch('/Restaurant.json')
            
    //         // comvert to js
    //         result.json().then(data => setHotels(data.restaurants))

    //   }
            // console.log(Hotels);