import React from "react"
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
  width: 98%;
  background: #000;
  padding: 50px 30px;
  margin: 25px auto;

  > div {
    margin-top: 0;
  }
  > div + div {
    margin-top: 0;
    margin-bottom: 0;
  }
  .coming-soon {
    color: #c2c2c2;
    margin-top: 20px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .button-wrapper {
    margin-top: 20px;
  }
  ${device.tablet} {
    width: 92%;
    margin: 0 auto 5%;
  }
`
const Header = styled.header`
  text-align: center;
  color: ${(props) => (props.black ? "white" : "black")};
  margin-bottom: 30px !important;
  ${device.tablet} {
    margin-bottom: 0 !important;
  }
  /* margin-bottom: 0 !important; */
`
const NapContainer = styled(NAPContainer)`
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;

  .main-heading {
    color: #fff;

    /* ${device.laptop} {
      font-size: 30px;
    }

    ${device.laptopS} {
      font-size: 22px;
    } */
  }

  ${device.tablet} {
    margin-bottom: 15px;
  }
`
const Main = styled.h3`
  font-size: 40px;
  font-weight: 400;
  color: #fff;

  @media screen and (max-width: 1300px) {
    font-size: 24px;
  }
  @media screen and (max-width: 990px) {
    font-size: 20px;
  }
  ${device.tablet} {
    /* display: none; */
    font-size: 25px;
  }
`
const Description = styled.p`
  font-size: 20px;
  padding: 0;
  color: #fff;
  max-width: 300px;
  margin: auto;
  @media screen and (max-width: 1300px) {
    font-size: 16px;
    /* font-size: 13px; */
  }
  @media screen and (max-width: 990px) {
    font-size: 12px;
    /* font-size: 10px; */
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 0 40px;
    /* display: none; */
  }
`
const Nap2 = styled(NAPContainer)`
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
`
const Contentflex = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  .desktopCta {
    display: block !important;
  }
  .mobCta {
    display: none !important;
  }
  button {
    color: #33ccff;
  }

  p + button {
    margin-top: 20px;
  }

  ${device.tablet} {
    display: block;
    .desktopCta {
      display: none !important;
    }
    .mobCta {
      display: block !important;
      margin-left: auto;
      margin-right: auto;
    }
  }
`
const ColOne = styled.div`
  text-align: center;
  margin: 0 50px;
  @media screen and (max-width: 1300px) {
    /* margin: 0 30px; */
  }
  ${device.laptopS} {
    margin: 0 15px;
  }
  & > img,
  h3 {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1480px) {
    width: 100%;
    margin: 0 15px;
  }
  ${device.tablet} {
    & > img,
    h3 {
      margin-left: auto;
      margin-right: auto;
    }
    & > img {
      max-width: 100px;
    }
    margin: 0;
    width: 100%;
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

const ThisNAPButton = styled(NAPButton)`
  .comming-soon {
    color: #fff;
  }
  ${device.laptop} {
    font-size: 11px;
  }
  ${device.tablet} {
    font-size: 14px;
  }
`

const row = [
  {
    heading: "Measuring",
    description:
      "Step-by-step space measuring instructions to help you plan a perfect and functional kitchen.",
    link: "BEFORE YOU BUY HELP",
    link_url: "/kitchen/kitchen-planning-guide",
  },
  {
    heading: "Planning",
    description:
      "Experience a more personalized planning experience with our Kitchen Design Experts.",
    link: "BOOK DESIGN CONSULTATION",
    link_url: "/kitchen/kitchen-planning-guide/#form",
  },
  {
    heading: "DIY Support",
    description:
      "Find the DIY support you need, with videos, installation guides and advice from product experts.",
    link: "GO TO SUPPORT HUB",
    link_url: "/support-hub/",
  },
]
function ServiceBlack({ items, bg, mainHeading, ...otherProps }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight color="#32393b" />,
    prevArrow: <ArrowLeft color="#32393b" />,
  }
  return (
    <SectionWrap {...otherProps}>
      <NapContainer className="item-container">
        <Header>
          <h3 className="main-heading">{mainHeading}</h3>
        </Header>
      </NapContainer>
      <Nap2>
        <Contentflex className="content-flex">
          {items?.map((item, index) => (
            <ColOne key={index}>
              <Main className="" black={bg}>
                {item.heading}
              </Main>
              <Description black={bg} className="">
                {item.description}
              </Description>
              {item.link != "coming soon" ? (
                <a href={item.link_url}>
                  {item.mobLink ? (
                    <>
                      <ThisNAPButton
                        className="button-wrapper desktopCta"
                        type="link"
                        color="#33ccff"
                        text={item.link}
                        url={item.link_url}
                        target="_blank"
                      />
                      <ThisNAPButton
                        className="button-wrapper mobCta"
                        type="link"
                        color="#33ccff"
                        text={item.mobLink}
                        url={item.link_url}
                        target="_blank"
                      />
                    </>
                  ) : (
                    // item.mobLink == null ?
                    //   (

                    //     <ThisNAPButton
                    //       className="button-wrapper desktopText"
                    //       type="link"
                    //       color="#33ccff"
                    //       text={item.link}
                    //       url={item.link_url}
                    //       target="_blank"
                    //     />
                    //   ) :
                    <ThisNAPButton
                      className="button-wrapper desktopText"
                      type="link"
                      color="#33ccff"
                      text={item.link}
                      url={item.link_url}
                      target="_blank"
                    />
                  )}
                </a>
              ) : (
                // <div className="coming-soon">Coming Soon</div>
                <span className="coming-soon"></span>
              )}
            </ColOne>
          ))}
        </Contentflex>
      </Nap2>
    </SectionWrap>
  )
}

ServiceBlack.defaultProps = {
  items: row,
  mainHeading: "We can help you measure, plan, and install your kitchen.",
}

export default ServiceBlack
