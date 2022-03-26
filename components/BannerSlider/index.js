import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import device from "../../utils/mediaUtils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { NAPContainer } from "@components/CommonComponents";
import { NAPContainer } from "../CommonComponents";

const SliderContainer = styled.div`
  display: block;
`;
const Container = styled.div`
  position: relative;
  outline: none !important;
`;
const ContentContainer = styled(NAPContainer)`
  position: absolute;
  height: calc(100% - 105px);
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  color: #fff;
`;
const CustomSlider = styled(Slider)`
  .slick-dots {
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .slick-dots li button {
    width: 12px;
    height: 12px;
    background: #dbdbdb;
    border: 4px solid #c7c9cb;
    border-radius: 50%;
    ${device.laptop} {
      width: 10px;
      height: 10px;
    }
  }
  .slick-dots .slick-active button {
    background: #0073c0;
    border: 4px solid #a1c9e1;
  }
  .slick-dots li button:before {
    color: transparent;
  }
  .slick-dots li.slick-active button:before {
    color: transparent;
  }

  .slick-arrow {
    &:before {
      display: none;
    }

    background-color: rgba(255, 255, 255, 0.6);

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  .slick-prev:hover,
  .slick-prev:focus {
    &:hover,
    &:focus {
    }
  }

  .slick-next:hover,
  .slick-next:focus {
    &:hover,
    &:focus {
    }
  }
`;

export const ArrowRight = styled.button`
  position: absolute;
  top: 50%;
  right: 30px;
  cursor: pointer;
  width: 50px;
  height: 65px;

  ${(props) =>
    props.arrowsColor === "white" ? "filter: invert(1)" : "filter: invert(0)"};

  img {
    max-width: 20px;
  }

  &.MuiSvgIcon-root {
    color: ${(props) => props.arrow};
    font-size: 40px;
    ${device.tablet} {
      display: none;
    }
  }
`;

export const ArrowLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 30px;
  cursor: pointer;
  z-index: 10;
  width: 50px;
  height: 65px;

  ${(props) =>
    props.arrowsColor === "white" ? "filter: invert(1)" : "filter: invert(0)"};

  img {
    max-width: 20px;
  }

  &.MuiSvgIcon-root {
    color: ${(props) => props.arrow};
    font-size: 40px;
    ${device.tablet} {
      display: none;
    }
  }
`;

const BannerSlider = ({
  dots,
  arrows,
  arrowsColor,
  items,
  activeSlide,
  children,
  autoplay,
  ...otherProps
}) => {
  const sliderRef = useRef(null);

  // console.log("check",sliderRef)

  useEffect(() => {
    sliderRef.current.slickGoTo(activeSlide - 1);
  }, [activeSlide]);

  const settings = {
    dots: dots,
    arrows: arrows,
    infinite: true,
    slidesToShow: 1,
    dotsClass: "common-dots",
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 6000,
  };

  return (
    <SliderContainer {...otherProps}>
      <CustomSlider className="custom-slider" ref={sliderRef} {...settings}>
        {children}
      </CustomSlider>
    </SliderContainer>
  );
};

BannerSlider.defaultProps = {
  dots: false,
  arrows: false,
  autoplay: false,
};

export default BannerSlider;

// HAS BEEN USED IN WORKBENCHES PAGE
