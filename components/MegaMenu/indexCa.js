import React from "react";
import device from "../../utils/mediaUtils";

import BlackBarCa from "./BlackBarCa";
import GarageCa from "./MenuDropDown/GarageCa";
import OutdoorCa from "./MenuDropDown/OutdoorCa";
import TopBarCa from "./TopBarCa";
import WhiteBarCa from "./WhiteBarCa";

import styled from "styled-components";
import { useState } from "react";
import SaleCa from "./MenuDropDown/SaleCa";
import Kitchen from "./MenuDropDown/Kitchen";
import Home from "./MenuDropDown/Home";
import FlooringCa from "./MenuDropDown/FlooringCa";
import ServicesCa from "./MenuDropDown/ServicesCa";
import WhatsNew from "./MenuDropDown/WhatsNew";
// import InputField from "@components/NAPFormComponents/InputField";
// import { DefaultButton } from "@components/CommonComponents";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const Div = styled.div`
  .menu-drop-down {
    position: relative;
    width: 1640px;
    margin: 0 auto;
    z-index: 3;
    ${device.desktop} {
      width: 1400px;
    }
    ${device.laptopL} {
      width: 1300px;
    }
    img {
      width: 100%;
    }
  }
  .back-drop {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: rgb(0 0 0 / 35%);
    transition: 0.6s;
    z-index: 3;
  }
  .back-drop-transparent {
    width: 100%;
    position: fixed;
    top: 236px;
    left: 0;
    height: 100vh;
    background-color: rgb(0 0 0 / 0%);
    transition: 0.6s;
    z-index: 2;
  }
`;

function MegaMenu({ n, setN, loading, setLoading }) {
  const [dropDown, setDropDown] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [backDropToggle, setBackDropToggle] = useState(false);

  function megaMenuDropDownHandler(index) {
    let tempDropDown = dropDown;
    for (let i = 0; i < tempDropDown.length; i++) {
      tempDropDown[i] = false;
    }
    tempDropDown[index] = true;
    setDropDown([...dropDown]);
    setBackDropToggle(true);
    setN(n + 1);
  }
  function closeAllDropDownHandler() {
    let tempDropDown = dropDown;
    for (let i = 0; i < tempDropDown.length; i++) {
      tempDropDown[i] = false;
    }
    setBackDropToggle(false);
    setDropDown([...dropDown]);
  }

  return (
    <ClickAwayListener
      onClickAway={() => {
        closeAllDropDownHandler;
      }}
    >
      <Div>
        <TopBarCa />
        <BlackBarCa />
        <WhiteBarCa
          megaMenuDropDownHandler={megaMenuDropDownHandler}
          dropDown={dropDown}
        />

        <div className="menu-drop-down">
          {dropDown[0] && <GarageCa />}
          {dropDown[1] && <OutdoorCa />}
          {/* {dropDown[2] && <Kitchen />}
					{dropDown[3] && <Home />} */}

          {dropDown[2] && <FlooringCa />}
          {dropDown[3] && <SaleCa />}
          {dropDown[4] && <ServicesCa />}
          {dropDown[5] && <WhatsNew />}
        </div>

        {backDropToggle && (
          <div
            className="back-drop-transparent"
            onClick={() => closeAllDropDownHandler()}
          ></div>
        )}
      </Div>
    </ClickAwayListener>
  );
}

export default MegaMenu;
