// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

// const SideBar = () => {
//   const [category, setCategory] = useState('sports');
//   const [country, setCountry] = useState('us'); // Add country state
// const [data,setData] = useState('')
//   useEffect(() => {
//     // Make the API call when category or country changes
//     const apiUrl = `https://newsapi.org/v2/top-headlines/sources?category=buisness&country=us&apiKey=b70f9aca61f7445ea69da493563a773a`;

//     // Use fetch or your preferred method to make the API call here

//     // Example using fetch:
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         // Handle the data from the API response
//         setData(data)
//       })
//       .catch(error => {
//         // Handle errors
//         console.error(error);
//       });
//   }, [category, country]); // Add category and country to the dependency array

//   return (
//     <Wrapper>
//       <div>
//         {
//             data.articles.map((elem)=>{
//               return(
//                 <div key={elem.id}>
//                   <button onClick={() => setCategory('buisness')}>buisness</button>
//         <button onClick={() => setCountry('us')}>USA</button>

//                 </div>
//               )
//             })
//         }
//         {/* Add more buttons for other categories */}
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   /* Add your styling here */
// `;

// export default SideBar;
