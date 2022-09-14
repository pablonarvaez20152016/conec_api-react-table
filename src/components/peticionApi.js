import React, { useMemo } from 'react'
import axios from "axios";


export const PeticionApi = async(pages)=>{
    try {
        
            const {data} = await axios({
                            url:'https://reqres.in/api/users', 
                            method:'GET',
                            params:{
                            page:pages
                            }
                            });
            return data.data 
    } catch (error) {
        console.log(error)
    }
}
