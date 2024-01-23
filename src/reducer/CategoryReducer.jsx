import React from 'react'

const CategoryReducer = (state,action) => {
    switch(action.type){
        case 'SET_LOADING':
            return{
                ...state,
                isLoading:true,
            }
        case 'SET_DATA':
            return{
                isLoading:false,
                sources:action.payload,
            }
            
        case 'SET_ERROR':
            return{
                ...state,
                isLoading:false,
                isError:true,
            }

    }
  return state
}

export default CategoryReducer