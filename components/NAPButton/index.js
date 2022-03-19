import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import device from "../../utils/mediaUtils";

import Modal from "@material-ui/core/Modal";
import ReactPlayer from "react-player";

export const Button = styled.button`
  margin-top: ${(props) => props.margintop}px;
  margin-bottom: ${(props) => props.marginbottom}px;
  margin-left: ${(props) => props.marginleft}px;
  margin-right: ${(props) => props.marginright}px;
  cursor: ${(props) => (props.type === "coming-soon" ? "initial" : "pointer")};
  text-align: center;
  display: inline-block;
  background: ${(props) =>
    props.type === "primary"
      ? "#0072bc"
      : props.type === "secondary"
        ? "#337ab7"
        : props.type === "ghost" ||
          props.type === "link" ||
          props.type === "link-light" ||
          props.type === "outlined" ||
          props.type === "link-heading" ||
          props.type === "link-col-head" ||
          props.type === "link-jumbo" ||
          props.type === "coming-soon"
          ? "transparent"
          : "#fff"};

  color: ${(props) =>
    props.type === "ghost" || props.type === "outlined" || props.type === "link"
      ? "#0072bc"
      : props.type === "link-light"
        ? "#33ccff"
        : props.type === "link-heading"
          ? "#0072bc"
          : props.type === "link-col-head"
            ? "#0072bc"
            : props.type === "link-jumbo"
              ? "#0072bc"
              : props.type === "video"
                ? "#000"
                : props.type === "coming-soon"
                  ? "#c2c2c2"
                  : "#fff"};

  color: ${(props) => props.color} !important;

  padding: ${(props) =>
    props.type === "link" ||
      props.type === "link-light" ||
      props.type === "coming-soon" ||
      props.type === "link-col-head" ||
      props.type === "link-jumbo" ||
      props.type === "link-heading"
      ? "0"
      : "15px 24px"};
  border-radius: 5px;
  /* font-size: 14px; */
  font-size: ${(props) =>
    props.type === "link-heading"
      ? "25px"
      : props.type === "link-col-head"
        ? "18px"
        : props.type === "link-jumbo"
          ? "40px"
          : "14px"};
  letter-spacing: 1px;
  border: ${(props) => (props.type === "outlined" ? "1px solid" : "none")};
  border-color: ${(props) => props.color};
  outline: none;
  font-family: ${(props) =>
    props.notBold ? "ProximaNova Regular" : "ProximaNova Semi Bold"};
  text-transform: ${(props) => (props.noTransform ? "none" : "uppercase")};

  ${device.laptopL} {
    font-size: ${(props) =>
    props.type === "link-heading"
      ? "20px"
      : props.type === "link-col-head"
        ? "18px"
        : props.type === "link-jumbo"
          ? "32px"
          : "14px"};
  }

  ${device.laptopB} {
    font-size: ${(props) =>
    props.type === "link-heading"
      ? "20px"
      : props.type === "link-col-head"
        ? "18px"
        : props.type === "link-jumbo"
          ? "28px"
          : "14px"};
  }

  ${device.laptopS} {
    font-size: ${(props) =>
    props.type === "link-heading"
      ? "20px"
      : props.type === "link-col-head"
        ? "18px"
        : props.type === "link-jumbo"
          ? "22px"
          : "14px"};
  }

  ${device.tablet} {
    color: ${(props) => props.mobColor};
    font-size: ${(props) =>
    props.type === "link-heading"
      ? "20px"
      : props.type === "link-col-head"
        ? "16px"
        : props.type === "link-jumbo"
          ? "20px"
          : "14px"};
  }
  &:hover {
    background: ${(props) =>
    props.type === "primary"
      ? "#245e90"
      : props.type === "secondary"
        ? "#002654"
        : props.type === "ghost"
          ? "#e4e4e4"
          : props.type === "outlined"
            // ? "#0072bc"
            ? "#000"
            : "transparent"};
    color: ${(props) =>
    props.type === "ghost"
      ? "#666"
      : props.type === "link"
        ? "#0072bc"
        : props.type === "link-heading"
          ? "#0072bc"
          : props.type === "link-col-head"
            ? "#0072bc"
            : props.type === "link-jumbo"
              ? "#0072bc"
              : props.type === "link-light"
                ? "#33ccff"
                : props.type === "coming-soon"
                  ? "#c2c2c2"
                  : "#fff"};
    color: ${(props) => props.color};
  }
  &::after {
    ${(props) =>
    props.video
      ? `content: "\f01d"`
      : props.type === "coming-soon"
        ? `content: ""`
        : `content: "\f054"`};
    font-family: FontAwesome;
    padding-left: 5px;
    left: 0px;
    ${(props) =>
    props.type === "video"
      ? "font-size: 13px;"
      : props.type === "link-col-head"
        ? "font-size: 7px"
        : props.type === "link-heading" || props.video
          ? "font-size: 13px;"
          : props.type === "link-jumbo"
            ? "font-size: 15px;"
            : "font-size: 7px;"};
    ${(props) => (props.video ? `top: 0;` : `top: -1.5px;`)};
    position: relative;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;

    ${device.laptopM} {
      ${(props) =>
    props.type === "video"
      ? "font-size: 13px;"
      : props.type === "link-col-head"
        ? "font-size: 7px"
        : props.type === "link-heading" || props.video
          ? "font-size: 12px;"
          : props.type === "link-jumbo"
            ? "font-size: 13px;"
            : "font-size: 7px;"};
    }

    ${device.laptopS} {
      ${(props) =>
    props.type === "video"
      ? "font-size: 13px;"
      : props.type === "link-col-head"
        ? "font-size: 7px"
        : props.type === "link-heading" || props.video
          ? "font-size: 12px"
          : props.type === "link-jumbo"
            ? "font-size: 12px"
            : "font-size: 7px;"};
    }
  }
  &:hover:after {
    position: relative;
    ${(props) => (props.video ? `left: 0;` : `left: 5px;`)};
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  &:focus {
    outline: none;
  }
  ${device.tablet} {
    width: 75%;
  } ;
`;

export const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  background-color: #000;
`;
export const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const CloseTag = styled.span`
  position: absolute;
  z-index: 9;
  top: -20px;
  right: -20px;
  height: 40px;
  width: 40px;
  background: url("/assets/close-icon.png") no-repeat;
  background-size: contain;
  cursor: pointer;
`;

function NAPButton({
  text,
  url,
  type,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  color,
  mobileColor,
  videoIcon,
  as,
  className,
  videoModal,
  videoModalId,
  noTransform,
  notBold,
  ...otherProps
}) {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    // console.log("video button clicked")
    setModal(true);
  };

  return (
    <>
      <Link href={url || "#"} passHref={videoModal ? false : true}>
        <Button
          onClick={() => handleClick()}
          as={as || "a"}
          marginright={marginRight}
          marginleft={marginLeft}
          margintop={marginTop}
          marginbottom={marginBottom}
          type={type}
          color={color}
          video={videoIcon}
          mobColor={mobileColor}
          noTransform={noTransform}
          notBold={notBold}
          className={`nap-btn-global ${className}`}
          {...otherProps}
        >
          {text}
        </Button>
      </Link>

      {/* Video modal */}
      {videoModal && (
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          disableAutoFocus={true}
          className="modal"
        >
          <ModalContainer className="modal-container">
            <VideoContainer className="video-container">
              <StyledPlayer
                width="100%"
                height="100%"
                muted={false}
                loop={true}
                controls={true}
                playing
                url={`https://vimeo.com/${videoModalId}`}
                config={{
                  vimeo: {
                    background: true,
                    autoplay: true,
                  },
                }}
              />
            </VideoContainer>
            <CloseTag
              className="close-icon"
              onClick={() => setModal(false)}
            ></CloseTag>
          </ModalContainer>
        </Modal>
      )}
    </>
  );
}

NAPButton.defaultProps = {
  text: "Button",
  type: "primary",
  videoIcon: false,
  videoModal: false,
};

export default NAPButton;
