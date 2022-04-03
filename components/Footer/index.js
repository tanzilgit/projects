/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styled from "styled-components";
import device from "../../utils/mediaUtils";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";

import { useState } from "react";

export const FooterContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  ${device.tablet} {
    margin-top: 20px;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  background: #292929;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  padding: 65px 0;
  > div > a {
    color: #efefef;
    padding: 10px 0;
    cursor: pointer;
    font-weight: normal;
    font-size: 16px;
    position: relative;
    overflow: hidden;
    width: fit-content;
    letter-spacing: 1px;
    ${device.laptopB} {
      font-size: 12px;
      padding: 7px 5px;
    }
  }
  > div > a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: -100%;
    background: #efefef;
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  > div > a:hover::after {
    left: 0;
  }
  > div > span {
    color: #efefef;
    padding: 10px 0;
    font-weight: normal;
    font-size: 16px;
    position: relative;
    overflow: hidden;
    width: fit-content;
    letter-spacing: 1px;
    ${device.laptopB} {
      font-size: 12px;
      padding: 7px 5px;
    }
  }
`;
export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;

  ${device.desktop} {
    min-width: 150px;
  }

  ${device.laptopS} {
    min-width: auto;
  }

  .MuiSvgIcon-root + .MuiSvgIcon-root {
    margin-left: 8px;
  }
  .houzz-icon {
    width: 15px;
  }
`;
export const NavCategory = styled.div`
  font-size: 22px;
  /* font-weight: bold; */
  font-family: "ProximaNova Semi Bold";
  /* font-family: ProximaNova Regular; */
  letter-spacing: 1px;
  line-height: normal;
  width: auto;
  padding: 10px 0px;
  cursor: context-menu;
  overflow: hidden;
  color: #fff;
  ${device.laptopB} {
    font-size: 15px;
    padding: 10px 5px;
  }
  ${device.tablet} {
    font-size: 18px;
    padding: 10px 0;
  }
`;
export const ShowInDesktop = styled.div`
  ${device.tablet} {
    display: none;
  }
`;
export const ShowInMobile = styled.div`
  display: none;
  ${device.tablet} {
    display: block;
    margin-bottom: 0;
  }
`;
export const MobileNavContainer = styled.div`
  padding: 30px 0;
  margin: 0 auto;
  background: #292929;
  color: #fff;
  .MuiAccordion-root {
    width: 300px;
    margin: 0 auto;
  }
  .MuiAccordionDetails-root {
    flex-direction: column;
    padding-left: 0;
    padding-bottom: 0;
  }
  .MuiPaper-root {
    background-color: transparent;
    color: #fff;
    box-shadow: none;
  }
  .MuiIconButton-root {
    padding: 0 12px;
    color: #fff;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    /* margin: 10px 0; */
    margin: 10px 0 0;
  }
  .MuiAccordion-root.Mui-expanded {
    /* margin: 16px auto; */
    margin: 0 auto 15px;
  }
  .MuiAccordionSummary-root.Mui-expanded {
    min-height: 25px;
  }
  .MuiAccordionSummary-root {
    min-height: 42px;
    padding: 0;
  }
  .MuiAccordion-root:before {
    background-color: transparent;
  }
  .MuiAccordionSummary-content {
    font-size: 18px;
    /* font-weight: bold; */
    font-family: "ProximaNova Semi Bold";
    padding: 10px 0;
    letter-spacing: 1px;
  }
  /* .MuiAccordionSummary-content.Mui-expanded {
    color: #676767;
  } */
`;

export const MobileFooterNav = styled.a`
  padding: 7px 0;
  font-size: 18px;
  font-weight: normal;
  color: #efefef;
`;

export const MinusIcon = styled.div`
  /* padding: 0 12px; */
  color: #fff;
  margin-right: -12px;
  flex: 0 0 auto;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 50%;
  transform: rotate(0deg);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &:after {
    content: "-";
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    line-height: 1;
  }
`;

function Footer() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <FooterContainer id="footer-com" className="demo">
      <ShowInDesktop>
        <NavContainer>
          <NavItem>
            <NavCategory>Footer Category 1</NavCategory>
            <a href="#">Footer Sub Category</a>
            <a href="#">Footer Sub Category</a>
            <a href="#">Footer Sub Category</a>
            <a href="#">Footer Sub Category</a>
          </NavItem>
          <NavItem>
            <NavCategory>Footer Category 2</NavCategory>
            <a href="#">Footer Sub Category</a>
            <a href="#">Footer Sub Category</a>
            <a href="#">Footer Sub Category</a>
          </NavItem>
          <NavItem>
            <NavCategory>Footer Category 3</NavCategory>
            <a href="#">Footer Sub Category</a>
            <a href="#">Footer Sub Category</a>
          </NavItem>
        </NavContainer>
      </ShowInDesktop>
      {/*  */}
      <ShowInMobile>
        <MobileNavContainer>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={expanded === "panel1" ? <MinusIcon /> : <AddIcon />}
              aria-controls="panel1a-content"
            >
              Footer Category 1
            </AccordionSummary>
            <AccordionDetails>
              <MobileFooterNav href="#">Footer Sub Category</MobileFooterNav>
              <MobileFooterNav href="#">Footer Sub Category</MobileFooterNav>
              <MobileFooterNav href="#">Footer Sub Category</MobileFooterNav>
              <MobileFooterNav href="#">Footer Sub Category</MobileFooterNav>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={expanded === "panel2" ? <MinusIcon /> : <AddIcon />}
              aria-controls="panel1a-content"
            >
              Footer Category 2
            </AccordionSummary>
            <AccordionDetails>
              <MobileFooterNav href="#">Footer Sub Category</MobileFooterNav>
              <MobileFooterNav href="#">Footer Sub Category</MobileFooterNav>
              <MobileFooterNav href="#">Footer Sub Category</MobileFooterNav>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={expanded === "panel3" ? <MinusIcon /> : <AddIcon />}
              aria-controls="panel1a-content"
            >
              Footer Category 3
            </AccordionSummary>
            <AccordionDetails>
              <MobileFooterNav href="#">Footer Sub Category</MobileFooterNav>
              <MobileFooterNav href="#">Footer Sub Category</MobileFooterNav>
            </AccordionDetails>
          </Accordion>
        </MobileNavContainer>
      </ShowInMobile>
    </FooterContainer>
  );
}

export default Footer;
