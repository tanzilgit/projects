import styled from "styled-components"
import device from "../../utils/mediaUtils"
export const NAPContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  width: 100%;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  /* color: ${(props) => props.color || "inherit"}; */
  margin: 50px auto;
  max-width: ${(props) => (props.small ? "1300px" : "1640px")};
  @media (max-width: 1700px) {
    max-width: 1300px;
  }
  @media (max-width: 1420px) {
    max-width: 1150px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
  @media (max-width: 990px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 390px;
    ${(props) => props.mobFullWidth && "max-width: 90%;"};
  }
  @media (max-width: 400px) {
    max-width: 300px;
    ${(props) => props.mobFullWidth && "max-width: 90%;"};
  }
`

export const DesktopBreak = styled.br`
  ${device.tablet} {
    display: none;
  } ;
`

export const MobileBreak = styled.br`
  display: none;
  ${device.tablet} {
    display: block;
  } ;
`

export const ShowInDesktop = styled.div`
  ${device.tablet} {
    display: none;
  }
`

export const ShowInMobile = styled.div`
  display: none;
  ${device.tablet} {
    display: block;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: ${(props) => props.wrap && "wrap"};
  margin: 80px auto;
  width: 75%;
  ${device.laptopL} {
    margin: 30px auto;
    width: 85%;
  }
  ${device.laptop} {
    width: 95%;
  }
  ${device.tablet} {
    ${(props) => props.mobWidth && `width: ${props.mobWidth}%;`};
    flex-direction: column;
  } ;
`
export const TabButtonLink = styled.button`
  color: #707070;
  border: 1px solid #e4e4e4;
  background-color: ${(props) => (props.active ? "#e4e4e4" : "#fff")};
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  font-family: "ProximaNova Semi Bold";
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background-color: #e4e4e4;
  }
  &::after {
    content: "\f054";
    font-family: FontAwesome;
    padding-left: 5px;
    left: 0px;
    font-size: 7px;
    top: -1.5px;
    position: relative;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  &:hover:after {
    position: relative;
    left: 5px;
  }
`

export const ButtonLink = styled.button`
  color: #0072bc;
  border: none;
  background-color: transparent;
  padding: ${(props) => props.padding || "10px 30px;"};
  border-radius: 5px;
  /* font-size: ${(props) => props.font || "14px;"}; */
  font-size: ${(props) => props.font || "18px;"};
  ${(props) =>
    props.transform
      ? `text-transform: ${props.transform}`
      : `text-transform: uppercase;`};
  outline: none;
  font-family: ${(props) => props.ff || "ProximaNova Semi Bold"};
  letter-spacing: 1px;
  cursor: pointer;
  &::after {
    content: "\f054";
    font-family: FontAwesome;
    padding-left: 5px;
    left: 0px;
    font-size: 7px;
    top: -1.5px;
    position: relative;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  &:hover:after {
    position: relative;
    left: 5px;
  }
  ${device.laptopS} {
    font-size: ${(props) => props.font || "16px;"};
  }
  ${device.tablet} {
    font-size: ${(props) => props.font || "18px;"};
  }
`
export const DefaultButton = styled.button`
  margin: ${(props) => props.margin && props.margin};
  color: #fff;
  border: none;
  background-color: #0072bc;
  padding: ${(props) => props.padding || "15px 24px;"};
  border-radius: 5px;
  font-size: 14px;
  ${(props) =>
    props.transform
      ? `text-transform: ${props.transform}`
      : `text-transform: uppercase;`};
  outline: none;
  font-family: "ProximaNova Semi Bold";
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background: #245e90;
  }
  &::after {
    content: "\f054";
    font-family: FontAwesome;
    padding-left: 5px;
    left: 0px;
    font-size: 7px;
    top: -1.5px;
    position: relative;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  &:hover:after {
    position: relative;
    left: 5px;
  }
`
