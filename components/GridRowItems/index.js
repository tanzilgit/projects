import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import device from "../../utils/mediaUtils";
import { NAPContainer } from "../CommonComponents";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowLeft, ArrowRight } from "../BannerSlider";

const GridRowDiv = styled.div`
  .showInDesktop {
    display: block;
  }
  .showInMobile {
    display: none !important;
  }
  img {
    margin-bottom: 30px;
  }
  .image-bottom-gap {
    margin-bottom: 30px !important;
  }
  text-align: center;

  ${device.tablet} {
    .showInDesktop {
      display: none !important;
    }
    .showInMobile {
      display: block !important;
    }
  }

  .item {
    width: 100%;
  }
`;

const CustomItemContainer = styled(NAPContainer)`
  ${device.tablet} {
    ${(props) => props.fullWidth && `max-width: 100%;`}
    display: ${(props) => props.mobile && "none"};
    flex-direction: column;
  }
  & img {
    width: 100%;
  }
  & .title {
    margin: 30px 0 0;
    text-align: center;
  }
  > div + div {
    margin-left: 30px;
  }
  ${device.laptop} {
    & .title {
      margin: 20px 0 0;
    }
    /* > div + div {
      margin-left: 0px;
    } */
  }
  ${device.tablet} {
    > div + div {
      margin-left: 0;
    }
  }
  text-align: center;

  ${(props) => props.twoItems && `max-width: 1300px;`}

  ${device.laptopM} {
    ${(props) => props.twoItems && `max-width: 900px;`}
  }

  ${device.laptopS} {
    ${(props) => props.twoItems && `max-width: 700px;`}
  }
`;
const SliderContainer = styled.div`
  display: none;
  ${device.tablet} {
    display: ${(props) => (props.mobile ? "block" : "none")};
  }

  .item {
    width: 100%;
  }
`;

function GridRowItems({
  mobileSlider,
  children,
  mobFullWidth,
  dots,
  centerMode,
  arrows,
  arrowsColor,
  twoItems,
  className,
  ...otherProps
}) {
  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: centerMode,
    slidesToScroll: 1,
    dotsClass: "common-dots",
    arrows: arrows,
  };
  return (
    <GridRowDiv className={className} {...otherProps}>
      <CustomItemContainer
        className="item-container"
        align="stretch"
        mobile={mobileSlider}
        fullWidth={mobFullWidth}
        twoItems={twoItems}
      >
        {children}
      </CustomItemContainer>
      <SliderContainer className="slider-container" mobile={mobileSlider}>
        <Slider {...settings}>{children}</Slider>
      </SliderContainer>
    </GridRowDiv>
  );
}
GridRowItems.defaultProps = {
  mobileSlider: false,
  dots: true,
  arrows: false,
  arrowsColor: "#000",
  centerMode: true,
  twoItems: false,
};
export default GridRowItems;
