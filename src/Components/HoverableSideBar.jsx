// import React,{useState,useEffect} from 'react';
// import styled from 'styled-components'
// import { CiMenuBurger } from "react-icons/ci";
// import { FaLock } from "react-icons/fa";

// const HoverableSidebarNavbar = ()=>{
//     const [isLocked,setIsLocked] = useState(false);
//     const [isHoverable,setIsHoverable] = useState(true);
//     const [isClosed,setIsClosed] = useState(window.innerWidth<800);

//  const toggleLock =()=>{
//     setIsLocked(!isLocked);
//     setIsHoverable(!isLocked);
//  };
//  const hideSidebar=()=>{
//     if(isHoverable){
//         setIsClosed(true);
//     }
//  };
//  const showSidebar =()=>{
//     if(isHoverable){
//         setIsClosed(false);
//     }
//  };
//  const toggleSidebar = ()=>{
//     setIsClosed(!isClosed);
//  };
// //  check why innerwidth is used here 
//  const handleResize = ()=>{
//     setIsClosed(window.innerWidth<800);
//     setIsLocked(false);
//     setIsHoverable(true);
//  };
//  useEffect(()=>{
//     window.addEventListener('resize',handleResize);
//     return()=>{
//         window.removeEventListener('resize',handleResize);
//     };

//  },[]);

//  const handleCategoryClick=(category)=>{
//     // handle category click
//     console.log(category);
//  };
//  const handleCountryClick = (country)=>{
//     console.log(country);
//  };

//  return (
//     <Wrapper>
//         {/* sidebar */}
//         <nav
//         className={`sidebar ${isClosed ? 'close' :''} ${isLocked ? 'locked':''}`}
//         >
//             <div className='logo_items'>
//                 <span className='nav_image'>
//                     <img src="data:image/jpeg;base64,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" alt="logo_img"
//                     className='img' />
//                     <span className='logo_name '>
//                         NEWS X FEEDER

//                     </span>
//                     <FaLock
//                     className={`bx ${isLocked ? 'bx-lock-open-alt' : 'bx-lock-alt'} `}
//                     onClick={toggleLock}
//                     title='Unlock Sidebar'
//                     />

//                 </span>

//             </div>

//             <div className="menu_container">
//                 {/* add category buttons */}
//                <button onClick={()=> handleCategoryClick('buisness')} className='link'>Business</button>
//                <button onClick={()=> handleCategoryClick('sports')} className='link '>Business</button>

//             </div>
//             <div className="country_buttons">
//                <button onClick={()=> handleCountryClick('gb')} className='link '>England</button>
//                <button onClick={()=> handleCountryClick('us')} className='link '>United States</button>
//                <button onClick={()=> handleCountryClick('ca')} className='link '>Canada</button>

//             </div>
//         </nav>
//         {/* navbar */}

//         <nav className='navbar'>
//         <CiMenuBurger className='menu-icon' onClick={toggleSidebar} />
//         <input type="text" placeholder='Search....' className='search_box ' />


//         </nav>
//     </Wrapper>
//  )
    

// }
// const Wrapper = styled.section`
// img{
//     height:100px,

//     width:100px,
//     object-fit:cover,
// }

// `
// export default HoverableSidebarNavbar;