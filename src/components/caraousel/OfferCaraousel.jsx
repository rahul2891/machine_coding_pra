import React from 'react';
import Carousel from 'react-multi-carousel';
import styled, { keyframes } from 'styled-components';
import 'react-multi-carousel/lib/styles.css';


const breatheAnimation = keyframes`
 0% { left: -100%; }
  
 100% { left: 0}`;

const ActiveStyledButton = styled.button`
  position: relative;
  width: ${(props) => (props.active ? '16px' : '6px')};
  height: 6px;
  border-radius: ${(props) => (props.active ? '4px' : '3px')};
  border: none;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  background: ${(props) => (props.active ? '#F9B0CC' : '#e2e2e2')};
  overflow: hidden;
`;

const AnimatedDot = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #e5095c;
  border-radius: 0px;
  padding: 0;
  box-sizing: border-box;
  animation-name: ${breatheAnimation};
  animation-duration: ${(props) =>
    props.slideTimer ? `${props.slideTimer}s` : '4s'};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
`;

const CustomDot = ({ onClick, active, slideTimer }) => {
  return (
    <ActiveStyledButton active={active} onClick={() => onClick()} type="button">
      {active && <AnimatedDot slideTimer={slideTimer} />}
    </ActiveStyledButton>
  );
};

const OffersCaraousel = (props) => {
  const {
    children = {},
    slideTimer,
    partialVisible = true,
    autoPlay = true,
    items = 1,
    partialVisibilityGutter = 0,
    showDots = true,
    swipeable = true,
    minDesktop = 768,
  } = props;
  return (
    <Carousel
      partialVisible={partialVisible}
      additionalTransfrom={0}
      arrows={false}
      autoPlay={autoPlay}
      autoPlaySpeed={slideTimer}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      // infinite={offersCount > 2}
      itemClass="padding-16-px"
      keyBoardControl
      minimumTouchDrag={100}
      pauseOnHover={false}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: minDesktop + 1,
          },

          items,
          partialVisibilityGutter,
        },
        mobile: {
          breakpoint: {
            max: minDesktop,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 0,
        },
      }}
      rewind
      rewindWithAnimation
      rtl={false}
      shouldResetAutoplay
      showDots={showDots}
      sliderClass=""
      slidesToSlide={1}
      swipeable={swipeable}
      customDot={<CustomDot slideTimer={slideTimer / 1000} />}
    >
      {children}
    </Carousel>
  );
};

export default OffersCaraousel;