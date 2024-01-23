import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      // Adjust the threshold based on your design preference
      const scrollThreshold = documentHeight - windowHeight - 100;

      setIsFooterVisible(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FooterContainer style={{ visibility: isFooterVisible ? 'visible' : 'hidden' }}>
      <p>&copy; 2024 Your News App. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  transition: visibility 0.3s ease;
`;

export default Footer;
