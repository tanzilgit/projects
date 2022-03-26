import React from "react"
import Link from "next/link"

import styled from "styled-components"
import { NAPContainer } from "../CommonComponents"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import device from "@utils/mediaUtils"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import NAPButton from "@components/NAPButton"
const SectionWrap = styled.section`
  position: relative;
  width: 100%;
  background: ${(props) => (props.black ? "#000" : "#f5f6f6")};
  padding: 50px 0;
  margin: 25px 0;
  ${device.tablet} {
    margin: 0;
  }
`
const Header = styled.header`
  text-align: center;
  color: ${(props) => (props.black ? "white" : "black")};
`
const NapContainer = styled(NAPContainer)`
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
`
const Main = styled.h3`
  font-size: 25px;
  color: ${(props) => (props.black ? "#33ccff" : "#337ab7")};
  cursor: pointer;
  font-family: "ProximaNova Semi Bold";
  :after {
    content: "\f054";
    font-family: FontAwesome;
    padding-left: 5px;
    left: 0px;
    font-size: 12px;
    top: -3px;
    position: relative;
    -webkit-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    @media screen and (max-width: 767px) {
      font-size: 8px;
      top: -2px;
    }
  }
  :hover:after {
    position: relative;
    left: 5px;
  }
  @media screen and (max-width: 1300px) {
    font-size: 24px;
  }
  @media screen and (max-width: 990px) {
    font-size: 20px;
  }
`
const Description = styled.p`
  font-size: 20px;
  padding: 0;
  color: ${(props) => (props.black ? "white" : "black")};
  @media screen and (max-width: 1300px) {
    font-size: 16px;
  }
  @media screen and (max-width: 990px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 0 40px;
  }
`
const Nap2 = styled(NAPContainer)`
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
`
const Contentflex = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  /* .individual-service:last-child {
    display: none;
  } */
`
const ColOne = styled.div`
  text-align: center;
  margin: 0 30px;
  width: 33.33%;
  ${device.tablet} {
    width: 100%;
  }
  & > img,
  h3 {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1480px) {
    width: 100%;
  }

  @media screen and (max-width: 1300px) {
    margin: 0 10px;
  }
  ${device.tablet} {
    & > img,
    h2 {
      margin-left: auto;
      margin-right: auto;
    }
    & > img {
      max-width: 100px;
    }
    width: 100%;
    margin: 0;
  }
`
const SliderContainer = styled.div`
  display: none;
  ${device.tablet} {
    display: block;
    width: 300px;
    margin-left: calc(50% - 150px);
  }
`
const CustomSlider = styled(Slider)`
  .slick-dots {
    bottom: -54px;
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
`
export const ArrowRight = styled(ArrowForwardIcon)`
  position: absolute;
  top: 45%;
  right: 30px;
  cursor: pointer;
  &.MuiSvgIcon-root {
    color: ${(props) => props.arrow};
    font-size: 40px;
    ${device.tablet} {
      color: #32393b;
    }
  }
`
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
      color: #32393b;
    }
  }
`

const row = [
  {
    img: "https://newageproducts-xiw173ersdfrnjpuobc.netdna-ssl.com/wp-content/themes/newage/img/icons/diy.png",
    heading: <>DIY Support </>,
    description: (
      <>
        Videos, installation guides,
        <br /> product expert advice and more
      </>
    ),
    url: "https://www.guidesmanager.shopnewage.com/guides/JXvGeCwoqCCX7P3K5d4ahpoOLIBQYsmn8mR5MDug.pdf",
  },
  {
    img: "https://newageproducts-xiw173ersdfrnjpuobc.netdna-ssl.com/wp-content/themes/newage/img/icons/delivery.png",
    heading: <>Delivery </>,
    description: (
      <>
        Choose Curbside or White
        <br /> Glove delivery of your new set.
      </>
    ),
    url: "https://www.guidesmanager.shopnewage.com/guides/JXvGeCwoqCCX7P3K5d4ahpoOLIBQYsmn8mR5MDug.pdf",
  },
  {
    img: "https://newageproducts-xiw173ersdfrnjpuobc.netdna-ssl.com/wp-content/themes/newage/img/icons/installation.png",
    heading: <>Installation </>,
    description: (
      <>
        Step-by-step measuring instructions.
        <br />
        Or arrange for our pros to handle it for you.
      </>
    ),
    url: "https://www.guidesmanager.shopnewage.com/guides/JXvGeCwoqCCX7P3K5d4ahpoOLIBQYsmn8mR5MDug.pdf",
  },
]
function index({ items, bgDark, mainHeading, ...otherProps }) {
  const settings = {
    dots: true,
    // arrows: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight color="#32393b" />,
    prevArrow: <ArrowLeft color="#32393b" />,
    dotsClass: "common-dots",
  }

  return (
    <SectionWrap {...otherProps} black={bgDark} id="planning-design-install">
      <NapContainer>
        <Header black={bgDark}>
          <h3 className="main-heading">{mainHeading}</h3>
        </Header>
      </NapContainer>
      {!bgDark && (
        <Nap2>
          <div className="showInDesktop">
            <Contentflex className="content-flex">
              {items?.map((item, index) => (
                <ColOne key={index} className="individual-service">
                  <img src={item.img} />
                  {item.url && (
                    <Link href={item.url}>
                      <Main black={bgDark}>{item.heading}</Main>
                    </Link>
                  )}
                  <Description black={bgDark}>{item.description}</Description>
                </ColOne>
              ))}
            </Contentflex>
          </div>
          <div className="showInMobile">
            <SliderContainer>
              <CustomSlider {...settings}>
                {items?.map((item) => (
                  <ColOne>
                    <img src={item.img} />
                    <Link href={item.url}>
                      <Main black={bgDark}>{item.heading}</Main>
                    </Link>
                    <Description black={bgDark}>{item.description}</Description>
                  </ColOne>
                ))}
              </CustomSlider>
            </SliderContainer>
          </div>
        </Nap2>
      )}

      {bgDark && (
        <Nap2>
          <div className="showInDesktop">
            <Contentflex className="content-flex">
              {items?.map((item, index) => (
                <ColOne key={index} className="individual-service">
                  <img src={item.img} />
                  {item.url && (
                    <Link href={item.url}>
                      <Main black={bgDark}>{item.heading}</Main>
                    </Link>
                  )}
                  <Description black={bgDark}>{item.description}</Description>
                </ColOne>
              ))}
            </Contentflex>
          </div>
          <div className="showInMobile">
            <SliderContainer>
              <CustomSlider {...settings}>
                {items?.map((item) => (
                  <ColOne>
                    <img src={item.img} />
                    <Link href={item.url}>
                      <Main black={bgDark}>{item.heading}</Main>
                    </Link>
                    <Description black={bgDark}>{item.description}</Description>
                  </ColOne>
                ))}
              </CustomSlider>
            </SliderContainer>
          </div>
        </Nap2>
      )}
    </SectionWrap>
  )
}

index.defaultProps = {
  items: row,
  mainHeading: "We can help you design, plan and install your purchase.",
}

export default index
