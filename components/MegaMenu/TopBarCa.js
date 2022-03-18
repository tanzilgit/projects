import React from "react";
import styled from "styled-components";
import CountryToggler from "./CountryToggler";

const Div = styled.div`
  width: 100%;
  height: 36px;
  background: #1a1a1a;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .sales-text {
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    /* letter-spacing: 2.7px; */
    letter-spacing: 2px;
    font-size: 16px;
    ::after {
      content: "\f054";
      font-family: FontAwesome;
      padding-left: 5px;
      left: 0px;
      font-size: 10px;
      top: -2px;
      position: relative;
      -webkit-transition: all 0.2s;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }
    :hover::after {
      position: relative;
      left: 5px;
    }
  }
`;

function TopBar({}) {
  return (
    <Div>
      <a href="/ca/design-services/" className="ff-pr fc-white sales-text">
        FREE VIRTUAL DESIGN CONSULTATION BOOK NOW
      </a>
      <CountryToggler />
    </Div>
  );
}

export default TopBar;
