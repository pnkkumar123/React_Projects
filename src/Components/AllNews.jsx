import React from 'react';
import { useNewsData } from '../Context/DataApi';
import SideBar from './SideBar';
import NavBar from './NavBar_Section';

const AllNews = () => {
  const { ImageArticles } = useNewsData();

  // Check if ImageArticles is an object
  if (!ImageArticles || typeof ImageArticles !== 'object') {
    return <p>Loading...</p>; // or handle the error accordingly
  }

  return (
    <div style={{ position: 'relative', boxShadow: '0 4px 4px 4px lightgreen', marginTop: '25px', marginLeft: '20px' }}>
      {/* Sidebar */}
      <NavBar />
      <SideBar />
      {/* Articles Container */}
      <div style={{
        display: 'grid',
        gap: '20px',
        marginTop: '20px',
        marginLeft: '30px',
        zIndex: 1, // Adjust based on Sidebar width
      }}>
        {Object.entries(ImageArticles).map(([category, articles]) => (
          <div key={category}>
            <h2>{category}</h2>
            <div style={{
              display: 'grid',
              overflow:'hidden',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginTop: '20px',
            }}>
              {Array.isArray(articles) ? (
                articles.map((elem) => {
                  const { description, image_url, source_url, id } = elem;
                  const truncatedDescription = description ? description.slice(0, 200) : '';
                  const displayDescription =
                    description && description.length > 200 ? truncatedDescription + '...' : truncatedDescription;

                  return (
                    <div key={elem.id} style={{
                      height: '400px',
                      width: '300px',
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignItems: 'center',
                      boxShadow: '0 4px 8px lightblue',
                    }} >
                      <img src={image_url} alt={id} style={{ height: '200px', width: '100%', objectFit: 'cover', Top: '0' }} />
                      <div style={{ padding: '10px', textAlign: 'center' }}>
                        <p style={{ width: '100%', overflow: 'hidden' }}>{displayDescription}....<a href={source_url} target='_blank' rel="noopener noreferrer">more</a></p>
                      </div>
                    </div>
                  );
                })
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
