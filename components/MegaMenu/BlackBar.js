import React from "react";
import styled from "styled-components";
import device from "../../utils/mediaUtils"
import { useState } from "react";
import Link from "next/link";

const BlackBarMainDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  position: relative;
  /*  */
  .white svg {
    color: #fff !important;
  }
  .black svg {
    z-index: 1;
    color: #000 !important;
  }
  /*  */
  .back-drop {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: transparent !important;
    transition: 0.6s;
    z-index: 3;
  }
`;

const Div = styled.div`
  /* width: 100%; */
  width: 1640px;
  margin: 0 auto;
  height: 80px;
  background: #000;
  border-bottom: "1px solid #ccc";
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
  align-items: center;
  position: relative;
  ${device.desktop} {
    width: 1400px;
  }
  ${device.laptopL} {
    width: 1280px;
  }
  ${device.laptopB} {
    width: 1150px;
  }
  ${device.laptopM} {
    width: 1000px;
  }

  .left-side {
    width: 175px;
  }
  .logo-img-box {
    /* width: 230px; */
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${device.desktop} {
      width: 180px;
    }
    ${device.laptopM} {
      width: 150px;
      left: 45%;
    }
    img {
      width: 100%;
    }
  }
  .right-side {
    display: flex;
    color: #fff;
    .ds-flex {
      align-items: center;
    }
    .menu-black-title {
      font-size: 18px;
      letter-spacing: 1px;
      ${device.laptopB} {
        height: 16px;
      }
      ${device.laptopM} {
        font-size: 16px;
      }
    }
    img.menu-icons {
      width: auto;
      height: 30px;
      margin-right: 15px;
      ${device.laptopB} {
        height: 21px;
        margin-right: 9px;
      }
    }
    a + a {
      margin-left: 30px;
    }
  }
`;

function BlackBar() {
  return (
    <>
	
      <BlackBarMainDiv className="BlackBarMainDiv">
        <Div>
          {/* Left Side Black Menu Details */}
          {/* <div> */}

          {/* <div className='left-side-wrapper'> */}

          {/* </div> */}

          {/* </div> */}
          {/* Logo */}
          <div className="logo-img-box">
            {/* <Link href="/">
              <Image src="/assets/mega-menu/nap-logo-black-back.PNG" alt="" />
            </Link> */}
          </div>

          {/* Right Side Black Menu Details */}
          
        </Div>
      </BlackBarMainDiv>
    </>
  );
}

export default BlackBar;
