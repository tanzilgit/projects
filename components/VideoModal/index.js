/* eslint-disable @next/next/no-img-element */
import device from "../../utils/mediaUtils";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import ReactPlayer from "react-player";
import Image from "next/image";
import React, { useState } from "react";

const MainContainer = styled.div`
  position: relative;
  width: fit-content;
  position: relative;
  margin: auto;
  width: 100%;
  /* border: 1px solid black; */
  .black-text {
    color: #fff;
    text-align: center;
    left: 0;
    font-size: 18px;
    position: absolute;
    height: auto;
    width: 100%;
    background: black;
    bottom: 0px;
    padding: 9px 0;
    line-height: normal;
    cursor: pointer;
  }
  button {
    padding: 0;
    cursor: pointer;
    appearance: none;
    background-color: transparent;
    border: none;
    position: relative;
    width: 100%;
  }

  .play-icon {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    img {
      width: 50px;
      height: 50px;
    }
  }
  /* img {
    border: 1px solid black;
  } */
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  box-shadow: 0px 0px 20px 5px #111;
  background: #000;
  /*  */
  padding: 20px;
  &:focus {
    outline: none;
  }
  ${device.tablet} {
    width: 75%;
  } ;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const StyledPlayer = styled(ReactPlayer)`
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

function VideoModal({
  src,
  width,
  height,
  videoModalId,
  playIcon,
  tagName,
  blackTag,
  ...otherProps
}) {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    // console.log("video button clicked")
    setModal(true);
  };
  return (
    <>
      <MainContainer {...otherProps}>
        <button onClick={() => handleClick()}>
          <Image
            className="video-thumbnail"
            src={src}
            width={width}
            height={height}
            priority
            layout="responsive"
            alt="Video Modal"
          />
          {playIcon && (
            <div className="play-icon">
              {/* <Image
                src={playIcon.src}
                width={playIcon.width}
                height={playIcon.height}
                priority
              /> */}
              <img src={playIcon.src} alt="play-icon" />
            </div>
          )}
          {blackTag && <p className="black-text">{tagName}</p>}
        </button>
      </MainContainer>
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
    </>
  );
}

VideoModal.defaultProps = {
  src: "/assets/garage-storage-cabinets/pro-series/1.jpg",
  width: 1200,
  height: 676,
  videoModalId: "328747379",
  playIcon: { src: "/assets/play-white-icon.png", width: "50", height: "50" },
};

export default VideoModal;
