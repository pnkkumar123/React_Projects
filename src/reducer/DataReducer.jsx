import React from 'react'



const DataReducer = (state,action) => {
 switch(action.type){
    case 'SET_LOAD':
        return{
            ...state,
            isLoading:true,
        }
        case 'SET_DATA':
            console.log(typeof(action.payload.results.country));
            // Filter articles with non-null image_url
           const filteredArticles = action.payload.results.filter(
            (curElem) => 
              curElem.image_url !== null && 
              curElem.category.includes('top')
          );
           const SportsArticles = action.payload.results.filter(
            (curElem) => curElem.category.includes('sports')
          );
          console.log(SportsArticles);
          const BusinessArticles = action.payload.results.filter(
            (curElem) => curElem.category.includes('business')
          );
          console.log(BusinessArticles);;
          const TechnologyArticles = action.payload.results.filter(
            (curElem) => curElem.category.includes('general')
          );
          console.log(TechnologyArticles);
          
          // console.log(filteredArticles);
          const filterArticles = action.payload.results.filter(
            (curElem) => curElem.image_url !== null
          );
          
          // Organize articles by category using map
          const articlesByCategory = filterArticles.reduce((accumulator, article) => {
            const { category } = article;
            return {
              ...accumulator,
              [category]: [...(accumulator[category] || []), article],
            };
          }, {});
          
          
            // console.log(articlesByCategory);
            // const articlesTop = filteredArticles.filter((curElem)=>{
            //     return curElem.category === 'top';
            // })
            // console.log(articlesTop);
          
            return {
              isLoading: false,
              articles: action.payload,
              TopArticles: filteredArticles,
              ImageArticles:articlesByCategory,
              SportsArticle:SportsArticles,
             Business:BusinessArticles,
             Technology: TechnologyArticles,
            };
          
    case 'SET_ERROR':
        return{
            ...state,
            isLoading:false,
            isError:true
        }
    }
    
}

export default DataReducer