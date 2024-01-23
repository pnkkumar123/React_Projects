

const CategoryFilterReducer = (state,action) => {
   switch(action.type){
    case 'LOAD_FILTER_ARTICLES':
        
      
        return {
          ...state,
          Filter_Articles: [...(action.payload.results || [])],
          All_Articles: [...(action.payload.results || [])],
          Filters: { ...state.Filters },
        };
      
    case 'UPDATE_FILTERS':
        const {name,value} = action.payload.results;
        return{
            ...state,
            Filters:{
                ...state.Filters,
                [name]:value,
            }

        }
    case 'FILTER_ARTICLES':
        let {All_Articles} =  state.results;
        console.log(All_Articles);
        let tempFilterArticle = [...All_Articles];
    

        const {category,country} = state.Filters;
        console.log(category);

        if(category  ){
            tempFilterArticle = tempFilterArticle.filter((curElem)=>{
                return curElem.category === category;
            })
        }
        if(country ){
            tempFilterArticle = tempFilterArticle.filter((curElem)=>{
                return curElem.country === country;
            })
        }
        if(language ){
            tempFilterArticle = tempFilterArticle.filter((curElem)=>{
                return curElem.language === language;
            })
        }
        return {
            ...state,
            All_Articles:tempFilterArticle,
        }

          default:
        return state;
  }
  
  
  
}

export default CategoryFilterReducer