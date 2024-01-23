// HoverableSidebarNavbar.js
// import React, { useState, useEffect } from 'react';
// import './HoverableSidebarNavbar.css'; // Import your CSS file

// const HoverableSidebarNavbar = () => {
//   const [isLocked, setIsLocked] = useState(false);
//   const [isHoverable, setIsHoverable] = useState(true);
//   const [isClosed, setIsClosed] = useState(window.innerWidth < 800);

//   const toggleLock = () => {
//     setIsLocked(!isLocked);
//     setIsHoverable(!isLocked);
//   };

//   const hideSidebar = () => {
//     if (isHoverable) {
//       setIsClosed(true);
//     }
//   };

//   const showSidebar = () => {
//     if (isHoverable) {
//       setIsClosed(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsClosed(!isClosed);
//   };

//   const handleResize = () => {
//     setIsClosed(window.innerWidth < 800);
//     setIsLocked(false);
//     setIsHoverable(true);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleCategoryClick = (category) => {
//     // Handle category click, e.g., dispatch an action, update state, etc.
//     console.log(`Selected category: ${category}`);
//   };

//   const handleCountryClick = (country) => {
//     // Handle country click, e.g., dispatch an action, update state, etc.
//     console.log(`Selected country: ${country}`);
//   };

//   return (
//     <div>
//       {/* Sidebar */}
//       <nav className={`sidebar ${isClosed ? 'close' : ''} ${isLocked ? 'locked' : ''}`}>
//         <div className="logo_items flex">
//           <span className="nav_image">
//             <img src="images/logo.png" alt="logo_img" className="h-10 w-10 rounded-full object-cover" />
//           </span>
//           <span className="logo_name text-2xl font-semibold text-gray-800 transition-all duration-300">
//             CodingNepal
//           </span>
//           <i
//             className={`bx ${isLocked ? 'bx-lock-open-alt' : 'bx-lock-alt'} text-blue-500 cursor-pointer`}
//             onClick={toggleLock}
//             title="Unlock Sidebar"
//           ></i>
//           <i className="bx bx-x text-blue-500 cursor-pointer" onClick={toggleSidebar}></i>
//         </div>

//         <div className="menu_container">
//           {/* Add category buttons */}
//           <button onClick={() => handleCategoryClick('business')} className="link hover:bg-blue-500">
//             Business
//           </button>
//           <button onClick={() => handleCategoryClick('sports')} className="link hover:bg-blue-500">
//             Sports
//           </button>
//           {/* Add more buttons for different categories as needed */}

//           {/* Add country buttons */}
//           <button onClick={() => handleCountryClick('us')} className="link hover:bg-blue-500">
//             US
//           </button>
//           <button onClick={() => handleCountryClick('gb')} className="link hover:bg-blue-500">
//             UK
//           </button>
//           <button onClick={() => handleCountryClick('ca')} className="link hover:bg-blue-500">
//             Canada
//           </button>
//           {/* Add more buttons for different countries as needed */}
//         </div>
//       </nav>

//       {/* Navbar */}
//       <nav className="navbar flex">
//         <i className="bx bx-menu cursor-pointer" onClick={toggleSidebar}></i>
//         <input type="text" placeholder="Search..." className="search_box h-12 max-w-md border rounded px-4 outline-none" />
//         <span className="nav_image">
//           <img src="images/profile.jpg" alt="logo_img" className="h-10 w-10 rounded-full object-cover" />
//         </span>
//       </nav>
//     </div>
//   );
// };

// export default HoverableSidebarNavbar;
