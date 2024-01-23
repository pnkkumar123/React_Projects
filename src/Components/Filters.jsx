import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const apikey = import.meta.env.VITE_REACT_APP_API_KEY;
const ApiUrl = 'https://newsdata.io/api/1/news?'
const Filters = () => {
  const [category,setCategory] = useState('top');
  
  // const [query,setQuery] = useState('cricket');
  const [newsdata,setNewsData] = useState('')
    const getData = async (url)=>{
      try{
        const response = await axios.get(url);
      const data = await response.data;
      console.log(data);
      setNewsData(data);
      }catch(e){
        console.log(e);
      }
    }
    // =pub_36889e18a58cac6ef61267a938a28a6a7f623&q=cricket
    // &q=${query}
    useEffect(()=>{
          getData(`${ApiUrl}category=${category}&apikey=${apikey}`)
    },[category])

  

  return (
    <Wrapper>
      <div>
      <nav>
        <button
        onClick={()=>{setCategory('business')}}
        >business</button>
        <button
        onClick={()=>{setCategory('entertainment')}}
        >entertainment</button>
        <button
        onClick={()=>{setCategory('world')}}
        >world</button>
        <button
        onClick={()=>{setCategory('technology')}}
        >technology</button>
        <button
        onClick={()=>{setCategory('domestic')}}
        >domestic</button>
        <button
        onClick={()=>{setCategory('sports')}}
        >Sports</button>
        </nav>
      </div>
     
      
    <div>
      {newsdata.results && newsdata.results.map((curElem) => {
        const { description,image_url } = curElem;
        return (
          <div key={curElem.title} className='news-data'>
            <img src={image_url} alt="" />
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  </Wrapper>
  );
};

const Wrapper = styled.section`
.news-data{
  height: 400px;
width: 300px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 4px 8px lightblue;
margin-bottom: 20px;

img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 10px;
}

p {
  width: 100%;
  overflow: hidden;
  padding: 0 10px;
  text-align: center;
}

@media (min-width: 768px) {
  width: calc(33.33% - 20px); /* Three items in one row with 20px gap */
  margin-right: 20px;

  &:nth-child(3n) {
    margin-right: 0; /* No margin for the last item in a row */
  }
}
}
  // Add your styling here
`;

export default Filters;
