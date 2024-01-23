import React, { useContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import reducer from '../reducer/DataReducer'


const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const url = `https://newsdata.io/api/1/news?&apikey=${apiKey}`

const DataContext = React.createContext();

const intialState = {
    articles:[],
    TopArticles:[],
    ImageArticles:[],
    ScienceArticles:[],
    Technology:[],
    SportsArticle:[],
    // ScienceArticles:[],
    Business:[],


    isLoading:true,
    isError:false,
}

const DataProvider = ({children}) => {
    const [country,setCountry] = useState('ca')
    const [category,setCategory]   = useState('technology')
    
    const [state,dispatch] = useReducer(reducer,intialState);

    const getData = async (getr)=>{
    try{
        dispatch({type:'SET_LOAD'})
            const    response = await  axios.get(getr);
            const NewsData = response.data;
            console.log(NewsData);
            dispatch({type:'SET_DATA',payload:NewsData})
           }
    catch(error){
       dispatch({type:'SET_ERROR'})
    }
    }
useEffect(()=>{
    getData(url)
},[category,country]);

// useEffect(() => {
//     const topHeadlinesUrl = `https://newsdata.io/api/1/news?&apikey=pub_36830c30fa61683372abbd9275fe1149aa85e`;
//     getData(topHeadlinesUrl);
//   }, []); // No dependencies as this is a one-time fetch
  
  return (<DataContext.Provider value={{...state,setCategory,setCountry}}>{children}</DataContext.Provider>
    
  )
}
const useNewsData = ()=>{
    return useContext(DataContext);
}

export  {DataProvider,DataContext,useNewsData};