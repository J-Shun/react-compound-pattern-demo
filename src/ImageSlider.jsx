/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

const ImageSliderContext = createContext();

const ImageSlider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = React.Children.count(children);

  const handleSlideLeft = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const handleSlideRight = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  return (
    <ImageSliderContext.Provider value={{ activeIndex }}>
      <div className='slider-container'>
        <div className='slider'>{children}</div>

        <div className='button-group'>
          <button onClick={handleSlideLeft}>left</button>
          <button onClick={handleSlideRight}>right</button>
        </div>
      </div>
    </ImageSliderContext.Provider>
  );
};

const ImageBox = ({ index, children }) => {
  const { activeIndex } = React.useContext(ImageSliderContext);
  return index === activeIndex && <div className='img-box'>{children}</div>;
};

const Image = ({ src, alt = '' }) => {
  return (
    <div className='img-container'>
      <img className='img' src={src} alt={alt} />
    </div>
  );
};

const ImageTitle = ({ children }) => {
  return <div className='img-title'>{children}</div>;
};

ImageSlider.ImageBox = ImageBox;
ImageSlider.Image = Image;
ImageSlider.ImageTitle = ImageTitle;

export default ImageSlider;
