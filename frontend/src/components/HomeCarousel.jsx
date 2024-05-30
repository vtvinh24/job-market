import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import useNewsContent from "../hooks/useNewsContent.js";

function HomeCarousel() {

  const {news, loading, error } = useNewsContent();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='carousel-container'>
      <Carousel data-bs-theme="dark" className='Carousel'>
        <Carousel.Item>
          <div className="p-3 border bg-light text-center content-boxs">Content Box 1</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="p-3 border bg-light text-center content-boxs">Content Box 2</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="p-3 border bg-light text-center content-boxs">Content Box 3</div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
