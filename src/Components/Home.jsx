import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useNewsData } from '../Context/DataApi';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const { TopArticles } = useNewsData();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, // Set autoplay speed in milliseconds (2 seconds in this case)
  };

  return (
    <Slider {...settings}>
      {TopArticles.map((curElem) => {
        const { description, image_url, publishedAt } = curElem;

        return (
          <Article key={publishedAt}>
            <Image src={image_url} alt="" />
            <Description>{description}</Description>
          </Article>
        );
      })}
    </Slider>
  );
};

const Article = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

const Description = styled.p`
  margin-top: 10px;
`;

export default Home;
