import React from "react";
import styled from "styled-components";
import device from "../../../utils/mediaUtils";
import Image from "next/image";
import NAPButton from "@components/NAPButton/index";
import Slider from "react-slick";
import Link from "next/link";

const HomeGridViewContainer = styled.div`
  width: 100%;
`;

const CustomItemContainer = styled.div`
  width: 100%;
  display: flex;
  /* width: 98%;
    margin: 0 1%; */
  padding: 0 30px;
  ${device.laptopB} {
    padding: 0 15px;
  }

  /* justify-content: space-between; */
  .individual-item {
    width: 100%;
  }
  .image-wrapper {
    width: 100%;
    display: block;
    position: relative;
    overflow: hidden;
  }
  .image-wrapper img {
    transition: 0.3s all;
  }
  .image-wrapper:hover img {
    transform: scale(1.1);
    transition: 0.3s all;
  }
  .content {
    position: relative;
    top: 0;
    left: 0;
    text-align: center;
    margin-top: 30px;
    display: inline-block;
    width: 100%;
    ${device.laptopB} {
      margin-top: 20px;
    }
  }
  .main-heading + .btn-container {
    margin-top: 10px;
  }

  .individual-item-cta {
    text-transform: capitalize;
    float: none;
    padding: 0 !important;
    font-size: 24px;
    text-transform: none;
    letter-spacing: 0px;
    ${device.desktop} {
      font-size: 24px;
    }
    ${device.laptopB} {
      font-size: 16px;
    }
    ${device.laptopS} {
    }
  }
  .image-wrapper.on-hover {
    width: 100%;
    display: block;
    position: relative;
    overflow: hidden;
    /* margin: 0 15px; */
  }
  .on-hover-image-show {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: auto;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    opacity: 0;
  }
  .image-wrapper.on-hover:hover .on-hover-image-show {
    opacity: 1;
  }
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
    ${device.laptopB} {
      margin-left: 15px;
    }
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
`;
const SliderContainer = styled.div`
  display: none;
  ${device.tablet} {
    display: ${(props) => (props.mobile ? "block" : "none")};
    .slick-slide {
      padding: 0 10px;
    }
    .slick-arrow {
      top: 35%;
    }
    .content {
      margin-top: 20px;
      text-align: center;
    }
    .main-heading + .btn-container {
      margin-top: 10px;
    }
    .individual-item-cta {
      text-transform: none;
      letter-spacing: 1px;
      font-size: 18px;
    }
  }

  .item {
    width: 100%;
  }
`;

function HomeGridView({
  HomeGridViewData,
  dots,
  arrows,
  centerMode,
  mobileSlider,
  mobFullWidth,
  onHover,
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
    <HomeGridViewContainer>
      <CustomItemContainer
        className="item-container"
        align="stretch"
        mobile={mobileSlider}
        fullWidth={mobFullWidth}
      >
        {HomeGridViewData.map((item, index) => (
          <div className="individual-item" key={index}>
            <Link href={item.productURL}>
              <a>
                {!onHover ? (
                  <div className="image-wrapper">
                    <Image
                      src={item.desktopImg}
                      width="615"
                      height="500"
                      layout="responsive"
                      alt="Tanzil"
                    />
                  </div>
                ) : (
                  <div className="image-wrapper on-hover">
                    <div className="on-hover-image">
                      <Image
                        src={item.desktopImg}
                        width="615"
                        height="500"
                        layout="responsive"
                        alt="Tanzil"
                      />
                    </div>
                    <div className="on-hover-image-show">
                      <Image
                        src={item.hoverDesktopImg}
                        width="615"
                        height="500"
                        layout="responsive"
                        alt="Tanzil"
                      />
                    </div>
                  </div>
                )}
                <div className="content">
                  <h3 className="main-heading">{item.productTitle}</h3>
                  <div className="btn-container">
                    <NAPButton
                      type="link"
                      text={item.productCTA}
                      url={item.productURL}
                      className="individual-item-cta"
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </CustomItemContainer>
      <SliderContainer className="slider-container " mobile={mobileSlider}>
        <Slider {...settings}>
          {HomeGridViewData.map((item, index) => (
            <>
              <div className="image-wrapper" key={index}>
                <Image
                  src={item.mobileImg}
                  width="285"
                  height="285"
                  layout="responsive"
                  alt="Tanzil"
                />
              </div>
              <div className="content">
                <h3 className="main-heading">{item.productTitle}</h3>
                <div className="btn-container">
                  <NAPButton
                    type="link"
                    text={item.productCTA}
                    url={item.productURL}
                    className="individual-item-cta"
                  />
                </div>
              </div>
            </>
          ))}
        </Slider>
      </SliderContainer>
    </HomeGridViewContainer>
  );
}

HomeGridView.defaultProps = {
  mobileSlider: false,
  dots: true,
  arrows: false,
  arrowsColor: "#000",
  centerMode: true,
  onHover: false,
};

export default HomeGridView;
