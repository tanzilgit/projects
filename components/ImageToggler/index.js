import { ContentContainer } from "@components/HeroBanner";
import device from "@utils/mediaUtils";
import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
`;
const ImageContainer = styled.div`
  & > img {
    transition: all 5s;
  }
`;
const ToggleContainer = styled.div`
  position: absolute;
  width: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 50px;
  text-align: center;
  ${device.laptop} {
    bottom: 20px;
  }
`;
const TextContainer = styled.h4`
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  ${device.laptop} {
    font-size: 12px;
    margin-top: 5px;
  }
`;
const Image = styled.img`
  display: ${(props) => (props.show ? "block !important" : "none !important")};
`;
const Input = styled.input``;
const Label = styled.label``;

function ImageToggler({
  src1,
  src2,
  mobileSrc1,
  mobileSrc2,
  ToggleBtnText1,
  ToggleBtnText2,
  children,
  toggleId,
  altTextLeft,
  altTextRight,
  ...otherProps
}) {
  const [active, setActive] = useState(ToggleBtnText1);

  const handleOnChange = () => {
    if (active === ToggleBtnText1) {
      setActive(ToggleBtnText2);
    } else setActive(ToggleBtnText1);
  };
  return (
    <MainContainer {...otherProps}>
      <ContentContainer className="toggle-content">{children}</ContentContainer>

      <ImageContainer className="toggle-image showInDesktop">
        <Image
          show={active === ToggleBtnText1}
          src={src1}
          alt={altTextLeft}
          width="100%"
        />
        <Image
          show={active === ToggleBtnText2}
          src={src2}
          alt={altTextRight}
          width="100%"
        />
      </ImageContainer>
      <ImageContainer className="toggle-image showInMobile">
        <Image
          show={active === ToggleBtnText1}
          src={mobileSrc1}
          alt={altTextLeft}
          width="100%"
        />
        <Image
          show={active === ToggleBtnText2}
          src={mobileSrc2}
          alt={altTextRight}
          width="100%"
        />
      </ImageContainer>
      {/* <ContentContainer className="toggle-content">{children}</ContentContainer> */}
      <ToggleContainer>
        <label
          className="toggle-switch"
          htmlFor={toggleId || "toggle-checkbox"}
        >
          <input
            type="checkbox"
            id={toggleId || "toggle-checkbox"}
            onChange={() => handleOnChange()}
          />
          <div className="toggle-slider toggle-round"></div>
        </label>
        <TextContainer>{active}</TextContainer>
      </ToggleContainer>
    </MainContainer>
  );
}

ImageToggler.defaultProps = {
  src1: "/assets/components/toggle-before.jpg",
  src2: "/assets/components/toggle-after.jpg",
  mobileScr1: "/assets/components/toggle-before.jpg",
  mobileScr2: "/assets/components/toggle-after.jpg",
  ToggleBtnText1: "Finished Space",
  ToggleBtnText2: "3D Render",
};

export default ImageToggler;
