import React from 'react'
import { useCategoryData } from '../Context/CategoryApi';
import styled from 'styled-components';
import Filters from './Filters';


const Category = () => {
    const {articles}= useCategoryData();
    console.log(articles);
    
 

    if (!articles || !Array.isArray(articles.articles)) {
        return <p>Loading...</p>; // or handle the error accordingly
      }
      
      return (
        <Wrapper>
          <Filters/>
          <div>
            {articles.articles.map((elem) => {
              
              const { description,url,name,category,country } = elem;
              return (
                <div key={elem.id}>
                  {/* Your rendering logic for each element goes here */}
                  {description}
                 <a href= {url} target='_blank'>{ name}</a>
                  <button>{category}</button>
                  <button>{country}</button>
                </div>
              );
            })}
          </div>
        </Wrapper>
      );
        }  
const Wrapper = styled.section`
justify-content:center;
align-items:center;
display:flex;
gap:20px;
div{
    marginTop: '90px';
    height:200px;
    width:200px;
    
}
`
export default Category