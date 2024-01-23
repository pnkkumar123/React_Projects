import { useContext, useEffect, useReducer } from "react";
import React from 'react'
// import { useCategoryData } from "./CategoryApi";
import reducer from '../reducer/CategoryFilterReducer'
import { useNewsData } from "./DataApi";

const intialState ={
    Filter_Articles:[],
    All_Articles:[],
    Filters:{
        category:'top',
        country:'poland',
        language:'polish'
        

    }
}
const FilterContext = React.createContext();

const FilterContextProvider = ({children})=>{
    const {articles} = useNewsData();
    console.log(articles);
    const [state,dispatch] = useReducer(reducer,intialState);

const UpdateValue = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({type:'UPDATE_FILTERS',payload:{name,value}})
}

useEffect(()=>{
       dispatch({type:"FILTER_PRODUCTS"})
},[articles,state.Filters]);

useEffect(()=>{
    dispatch({type:'LOAD_FILTER_ARTICLES',payload:articles})
},[articles])

    return(<FilterContext.Provider value={{...state,UpdateValue}}>{children}</FilterContext.Provider>)
}
const useFilterData = ()=>{
    return useContext(FilterContext)
}
export {FilterContext,FilterContextProvider,useFilterData}