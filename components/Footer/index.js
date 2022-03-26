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

  .footer-contact-social {
    display: inline-block;
    width: 100%;
    float: left;
    margin-top: 20px;
    /* padding-left: 5px; */

    ${device.laptopS} {
      display: grid;
      width: 80px;
      /* float: left; */
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 20px;
      gap: 5px;
      padding-left: 5px;
    }

    ${device.tablet} {
      display: inline-block;
      margin-top: 0;
      padding-left: 0;
      width: 100%;
      margin-bottom: 0;
    }
    a {
      display: inline-block;
    }

    a + a {
      margin-left: 5px;

      ${device.laptopM} {
        margin-left: 3px;
      }

      ${device.laptopS} {
        margin-left: 0;
      }

      ${device.tablet} {
        margin-left: 7px;
      }
    }

    .social-icons {
      background-color: #464646;
      height: 36px;
      width: 36px;
      float: left;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      font-family: FontAwesome;
      position: relative;
      font-size: 22px;
      color: #fff;
      text-align: center;
      display: table;

      ${device.desktop} {
        height: 33px;
        width: 33px;
        font-size: 17px;
      }

      ${device.laptopB} {
        height: 24px;
        width: 24px;
        font-size: 17px;
      }

      ${device.laptopM} {
        height: 22px;
        width: 22px;
      }

      ${device.tablet} {
        height: 38px;
        width: 38px;
        font-size: 24px;
      }

      &:hover {
        background: #fff;
        color: #000;
      }

      &::after {
        display: table-cell;
        vertical-align: middle;
      }

      &.fb::after {
        content: "\f09a";
      }
      &.insta::after {
        content: "\f16d";
      }
      &.pin::after {
        content: "\f231";
      }
      &.lkdin::after {
        content: "\f0e1";
      }
      &.ytube::after {
        content: "\f16a";
      }
      &.houzz::after {
        content: "\f27c";
      }
    }
  }
`;

export const MobileNavContainer = styled.div`
  padding: 40px 0 0;
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
      <div>
        <MobileNavContainer>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={expanded === "panel1" ? <MinusIcon /> : <AddIcon />}
              aria-controls="panel1a-content"
            >
              Accordion Parent 1
            </AccordionSummary>
            <AccordionDetails>
              <MobileFooterNav href="#">Child Accordion Title</MobileFooterNav>
              <MobileFooterNav href="#">Child Accordion Title</MobileFooterNav>
              <MobileFooterNav href="#">Child Accordion Title</MobileFooterNav>
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
              Accordion Parent 2
            </AccordionSummary>
            <AccordionDetails>
              <MobileFooterNav href="#">Child Accordion Title</MobileFooterNav>
              <MobileFooterNav href="#">Child Accordion Title</MobileFooterNav>
              <MobileFooterNav href="#">Child Accordion Title</MobileFooterNav>
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
              Accordion Parent 3
            </AccordionSummary>
            <AccordionDetails>
              <MobileFooterNav href="#">Child Accordion Title</MobileFooterNav>
              <MobileFooterNav href="#">Child Accordion Title</MobileFooterNav>
              <MobileFooterNav href="#">Child Accordion Title</MobileFooterNav>
            </AccordionDetails>
          </Accordion>
        </MobileNavContainer>
      </div>
    </FooterContainer>
  );
}

export default Footer;
