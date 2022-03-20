import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import device from "../../utils/mediaUtils";

export const ParentContainer = styled.div`
  position: relative;

  .full-width {
    width: 100%;
  }
  .image-wrapper {
    display: inline-block;
    width: 100%;
  }
  .relative {
    position: relative;
    float: none;
    width: 40%;
    color: #000;
    top: 0;
    left: 0;
    transform: none;
    justify-content: center;
    margin: 0 5%;
  }
`;

export const BannerSwatchContainer = styled.div`
  display: flex;
  /* flex-direction: ${(props) =>
    props.flex_direction ? "row-reverse" : "row"}; */
  flex-direction: ${(props) => props.flex_direction};
  justify-content: center;
  text-align: center;
`;
export const FloatContent = styled.div`
  /* float: left;
  width: 35%;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: #fff;
  top: 50%;
  left: 5%;
  transform: translate(0, -50%); */
  text-align: center;

  .swatch-wrapper {
    display: flex;
    /* margin-top: 20px; */
    margin: 20px 0;
    justify-content: center;
  }

  img + img {
    margin-left: 20px;
  }

  ${device.laptopL} {
    .swatch-img {
      width: 65px;
      height: 65px;
    }
  }
  ${device.laptopM} {
    .swatch-img {
      width: 40px;
      height: 40px;
    }
  }

  ${device.tablet} {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    text-align: center;
    width: 100%;
    float: none;
    color: #000;
    margin: 20px 0;

    .swatch-wrapper {
      justify-content: center;
    }
  }
  /* position: ${(props) => (props.relative = "relative")}; */
  /* position: ${(props) => (props.text_position ? "relative" : "absolute")}; */
`;
export const SwatchImage = styled.img`
  border: ${(props) => (props.activated ? "5px solid #ccc" : "none")};
  border-radius: ${(props) => (props.activated ? "50%" : "50%")};
  width: 60px;
  height: 60px;
  cursor: pointer;
  + img {
    margin-left: 20px:
  }
  ${device.tablet} {
    width: 50px;
    height: 50px;
  }
`;

const BannerSwatch = ({
  heading,
  description,
  types,
  cname,
  flex_direction,
}) => {
  const [typeIndex, setTypeIndex] = useState(0);

  // console.log(typeIndex, types[typeIndex].mobile_image_url)
  return (
    <ParentContainer className="banner-swatch">
      <BannerSwatchContainer
        className="banner-swatch-container"
        flex_direction={flex_direction}
      >
        {/* <div className="image-wrapper showInMobile">
          <Image
            className=" full-width"
            src={types[typeIndex].mobile_image_url}
            alt=""
          />
        </div> */}

        <div className="main-container">
          <FloatContent className={`float-swatch ${cname}`}>
            <h3 className="main-heading ff-psb first-content">{heading}</h3>
            <h3 className="sub-heading ff-pr second-content">{description}</h3>
            <div className="swatch-wrapper">
              {/* Swatch Images here */}
              {types.map(({ swatch_color }, index) => (
                <SwatchImage
                  className={`swatch-img ${index}`}
                  key={index}
                  src={swatch_color}
                  activated={index === typeIndex}
                  onClick={() => setTypeIndex(index)}
                />
              ))}
            </div>
          </FloatContent>
        </div>

        {/* Banner image here */}
        <div className="image-wrapper showInDesktop">
          <img
            className="full-width"
            src={types[typeIndex].image_url}
            layout="responsive"
            alt=""
          />
        </div>

        {/* When we use Image Tag of NextJS the Images blinks on change click */}
        {/* <Image src={types[typeIndex].image_url} width={1920} height={750} /> */}
      </BannerSwatchContainer>
    </ParentContainer>
  );
};

export default BannerSwatch;
