import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import BannerSlider from "../BannerSlider";
import device from "@utils/mediaUtils";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;

  ${device.tablet} {
    padding: 0 0px;
  }

  /* ${device.desktop} {
    height: 1000px;
  }

  @media screen and (max-width: 1450px) {
    height: 900px;
  } */

  .banner-slider {
    position: relative;
  }
`;
const RowItems = styled.div`
  text-align: center;
  display: grid;
  /* margin: 0 15px; */
  + .row-items {
    /* margin-left: 20px; */
    margin-left: 30px;
  }
  ${device.tablet} {
    /* margin: 0; */

    + .row-items {
      margin-left: 0px;
      /* padding-left: 10px; */
      padding-left: 15px;
    }
  }

  /* &.desktop {
    ${device.desktop} {
      display: none;
    }
  }

  &.desktop-s {
    ${device.desktop} {
      display: grid;
    }
  } */
`;
const StyledImage = styled(Image)`
  ${(props) => props.zoom && `cursor: pointer;`};
  transition: all 0.5s ease;
  &:hover {
    ${(props) => props.zoom && `transform: scale(1.1);`}
  }
`;
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  /* margin: -5px; */
  &:not(:first-child) {
    margin-top: 30px;
  }
  ${device.tablet} {
    &:not(:first-child) {
      /* margin: 10px 10px; */
      /* margin-top: 10px; */
      margin-top: 15px;
    }
    margin: 0;
  }
`;
const CaptionContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #000000c7;
`;
const Text = styled.p`
  margin: 25px 0;
  color: #fff;
  ${device.tablet} {
    font-size: 14px;
    margin: 0;
    padding: 10px 0;
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

  .modal-wrapper {
    position: relative;

    .slider-caption {
      color: #fff;
      position: absolute;
      bottom: -1px;
      left: 0;
      background: rgb(0 0 0 / 0.9);
      height: auto;
      width: 100%;
      padding: 25px 50px;
      ${device.tablet} {
        position: relative;
        padding: 20px;
        bottom: 5px;
      }
    }
  }
`;

const SingleImage = styled.div`
  display: flex;
  background-size: cover;
  ${(props) => props.zoom && `cursor: pointer;`};
  transition: all 0.5s ease;
  &:hover {
    ${(props) => props.zoom && `transform: scale(1.1);`}
  }
`;

export const rows = [
  [
    {
      id: 1,
      img: "/assets/slatwall/slatwall-accessories/slatwall-accessories-kit.jpg",
      title: "Bikes and Sports Equipment",
      cover: "100%",
      height: 850,
      width: 663,
    },
  ],
  [
    {
      id: 2,
      img: "/assets/slatwall/slatwall-accessories/slatwall-accessory.jpg",
      title: "Small Tool Storage",
      cover: "40%",
      height: 374,
      width: 470,
    },
    {
      id: 3,
      img: "/assets/slatwall/slatwall-accessories/newage-slatwall-accessory.jpg",
      title: "Golf Bags and Gear",
      cover: "60%",
      height: 450,
      width: 470,
    },
  ],
  [
    {
      id: 4,
      img: "/assets/collage/clg-4.jpg",
      title: "Ladders and Bulky Items",
      cover: "60%",
      height: 450,
      width: 663,
    },
    {
      id: 5,
      img: "/assets/slatwall/slatwall-accessories/garage-slatwall-accessory-kit.jpg",
      title: "Small Item Storage",
      cover: "40%",
      height: 373,
      width: 663,
    },
  ],
];

export const modalItems = [
  {
    id: 1,
    img: "/assets/collage/clg-1.jpg",
    height: 950,
    width: 1920,
  },
  {
    id: 2,
    img: "/assets/collage/clg-2.jpg",
    height: 950,
    width: 1920,
  },
  {
    id: 3,
    img: "/assets/collage/clg-3.jpg",
    height: 950,
    width: 1920,
  },
  {
    id: 4,
    img: "/assets/collage/clg-4.jpg",
    height: 950,
    width: 1920,
  },
  {
    id: 5,
    img: "/assets/collage/clg-5.jpg",
    height: 950,
    width: 1920,
  },
];

const Caption = (text) => {
  return (
    <CaptionContainer className="caption_container">
      <Text>{text}</Text>
    </CaptionContainer>
  );
};

function Gallery({
  caption,
  showPopUp,
  zoomOnHover,
  items,
  popUpItems,
  arrowsColor,
  sliderCaption,
  ...otherProps
}) {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    console.log({ id });
    setActive(id);
    setModal(true);
  };

  return (
    <Container {...otherProps}>
      {items.map((row, index) => (
        <RowItems key={index} className="row-items desktop">
          {row.map((item, index) => (
            <ImageContainer
              key={index}
              height={item.cover}
              onClick={() => handleClick(item.id)}
              className="image-container"
            >
              {/* <SingleImage
                zoom={zoomOnHover ? 1 : 0}
                style={{
                  backgroundImage: `url(${item.img})`,
                  height: item.height,
                  width: item.width,
                }}
              /> */}
              <StyledImage
                zoom={zoomOnHover ? 1 : 0}
                src={item.img}
                height={item.height}
                width={item.width}
                alt="nap-demo"
                className="styled-image"
              />
              {caption && Caption(item.title)}
            </ImageContainer>
          ))}
        </RowItems>
      ))}
      {popUpItems.length != 0 && showPopUp && (
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          disableAutoFocus={true}
          className="modal"
        >
          <ModalContainer className="modal-container">
            <BannerSlider
              arrows
              className="banner-slider"
              activeSlide={active}
              arrowsColor={arrowsColor}
            >
              {popUpItems.map((item) => (
                <div key={item.id} className="modal-wrapper">
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                  ></Image>
                  {sliderCaption && (
                    <div className="slider-caption">{item.caption}</div>
                  )}
                </div>
              ))}
            </BannerSlider>
            <div className="close-btn" onClick={() => setModal(false)}>
              <i className="fa fa-times-circle"></i>
            </div>
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}

Gallery.defaultProps = {
  caption: false,
  showPopUp: true,
  zoomOnHover: true,
  items: rows,
  popUpItems: modalItems,
  sliderCaption: false,
};

export default Gallery;
