import { useEffect, useReducer,useContext, useState } from 'react';
import React from 'react';
import axios from 'axios'
import reducer from '../reducer/CategoryReducer'
const api = 'b70f9aca61f7445ea69da493563a773a'
let apiKey = 'https://newsapi.org/v2/top-headlines?'

const intialState = {
   sources:[],
    isLoading:true,
    isError:false,
}

const CategoryContext = React.createContext();

const CategoryProvider=({children})=>{
    const [state,dispatch] = useReducer(reducer,intialState)
    // const [category,setCategory] = useState('technology')
    const [country,setCountry] = useState('us')
    const getCategoryData = async (url)=>{
           try{
            dispatch({type:'SET_LOADING'})
            const response = await axios.get(url);
           const data = await response.data;
           console.log(data);
           dispatch({type:'SET_DATA',payload:data})
           }catch(e){
            dispatch({type:'SET_ERROR'})
           }
    }
useEffect(()=>{
getCategoryData(`${apiKey} &country=us&apiKey=${api}`)
},[])


    return (<CategoryContext.Provider value={{...state,}}>{children}</CategoryContext.Provider>)
}
const useCategoryData = (()=>{
    return useContext(CategoryContext)
})
export {CategoryContext,CategoryProvider,useCategoryData}