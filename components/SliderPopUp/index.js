/* eslint-disable @next/next/no-img-element */
import { React, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NAPContainer } from "../CommonComponents";
import Modal from "@material-ui/core/Modal";
import BannerSlider from "@components/BannerSlider";
import device from "@utils/mediaUtils";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const SliderContainer = styled.div`
  overflow-x: hidden;
  border: 1px solid transparent;
`;
const SpuDiv = styled.div`
  position: relative;
  ${device.tablet} {
    .container {
      max-width: 100%;
    }
  }
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 2;

  &:focus {
    outline: none;
  }

  .banner-slider {
    position: relative;
  }

  .close-btn {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    z-index: 22;

    &:hover {
      color: #707070;
    }
  }
`;
const Container = styled.div`
  position: relative;
  padding: 10px 15px;
  outline: none !important;
  @media screen and (max-width: 990px) {
    /* padding: 0 25px; */
    padding: 0 10px;
  }
  ${device.tablet} {
    padding: 0 12px;
  }
`;
const NapContainer = styled(NAPContainer)`
  text-align: center;
`;
const CustomSlider = styled(Slider)`
  .slick-slide {
    overflow: hidden;
  }
`;
const SwatchImage = styled.img`
  cursor: pointer;
  border: 4px solid transparent;
  border-radius: 50px;
  width: 56px;
  height: 56px;
  @media (max-width: 1300px) {
    width: 40px;
    height: 40px;
  }
  /* @media (max-width: 990px) {
    width: 40px;
    height: 40px;
  } */
`;
export const ArrowRight = styled(ArrowForwardIcon)`
  position: absolute;
  top: 45%;
  right: 30px;
  cursor: pointer;
  &.MuiSvgIcon-root {
    color: ${(props) => props.arrow};
    font-size: 40px;

    ${device.tablet} {
      display: none;
      right: 6px;
    }
  }
`;
export const ArrowLeft = styled(ArrowBackIcon)`
  position: absolute;
  top: 45%;
  left: 30px;
  cursor: pointer;
  z-index: 10;
  &.MuiSvgIcon-root {
    color: ${(props) => props.arrow};
    font-size: 40px;

    ${device.tablet} {
      display: none;
      left: 6px;
    }
  }
`;
const Swatches = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  ${device.tablet} {
    justify-content: start;
  }
`;
const Caption = styled.div` 
  text-align: center;
  margin: 50px;
  @media screen and (max-width: 990px) {
    margin: 23px;
  }
  ${device.tablet} {
    margin: 30px;
  }
`;

const value = [
  { id: 1, height: 410, width: 370, img: "/assets/collage/modal-1.jpg" },
  { id: 2, height: 410, width: 370, img: "/assets/collage/modal-2.png" },
  { id: 3, height: 410, width: 370, img: "/assets/collage/modal-3.jpeg" },
  { id: 4, height: 410, width: 370, img: "/assets/collage/modal-4.png" },
  { id: 5, height: 410, width: 370, img: "/assets/collage/modal-5.jpg" },
];

const modalItems = [
  {
    id: 1,
    img: "/assets/collage/modal-1.jpg",
    height: 950,
    width: 1900,
  },
  {
    id: 2,
    img: "/assets/collage/modal-2.png",
    height: 950,
    width: 1900,
  },
  {
    id: 3,
    img: "/assets/collage/modal-3.jpeg",
    height: 950,
    width: 1900,
  },
  {
    id: 4,
    img: "/assets/collage/modal-4.png",
    height: 950,
    width: 1900,
  },
  {
    id: 5,
    img: "/assets/collage/modal-5.jpg",
    height: 950,
    width: 1900,
  },
  
];

function SliderPopUp({
  showPopUp,
  dots,
  arrows,
  arrowsColor,
  slideItems,
  popUpItems,
  caption,
  modalClass,
  ...otherProps
}) {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(null);
  const handleClick = (id) => {
    setActive(id);
    setModal(true);
    // console.log(id, "idddd");
  };

  const settings = {
    // nextArrow: (
    //   <SlickButtonFix>
    //     <ArrowRight color="#32393b" />
    //   </SlickButtonFix>
    // ),
    // prevArrow: (
    //   <SlickButtonFix>
    //     <ArrowLeft color="#000" />
    //   </SlickButtonFix>
    // ),
    dots: dots,
    arrows: arrows,
    infinite: true,
    slidesToShow: 4,
    dotsClass: "common-dots",
    slidesToScroll: 1,
    // nextArrow: arrows && <ArrowRight arrow={arrowsColor} />,
    // prevArrow: arrows && <ArrowLeft arrow={arrowsColor} />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <SpuDiv {...otherProps}>
      {" "}
      <NAPContainer className="container">
        <SliderContainer className="slider-container">
          <CustomSlider {...settings} className="slider-container">
            {slideItems.map((item, index) => (
              <Container className="single-slide" key={index}>
                <img
                  onClick={() => handleClick(item.id)}
                  src={item.img}
                  width="100%"
                  alt="products"
                  className="outer-slider"
                />
                {caption && (
                  <Caption className="slide-caption">
                    <p className="sub-heading">{item.title}</p>
                  </Caption>
                )}
              </Container>
            ))}
          </CustomSlider>
        </SliderContainer>
      </NAPContainer>
      {showPopUp && (
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          disableAutoFocus={true}
          className={modalClass}
        >
          <ModalContainer className="modal-container">
            <BannerSlider activeSlide={active} className="banner-slider" arrows>
              {popUpItems.map((item) => (
                <div className="single-item" key={item.id}>
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt="Tanzil"
                  ></Image>
                </div>
              ))}
            </BannerSlider>
            <div className="close-btn" onClick={() => setModal(false)}>
              <i className="fa fa-times-circle"></i>
            </div>
          </ModalContainer>
        </Modal>
      )}
    </SpuDiv>
  );
}

SliderPopUp.defaultProps = {
  showPopUp: true,
  dots: false,
  arrows: false,
  arrowsColor: "white",
  slideItems: value,
  popUpItems: modalItems,
  caption: false,
  modalClass: "default-modal",
};

export default SliderPopUp;
