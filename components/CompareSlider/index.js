/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import device from "../../utils/mediaUtils";
import Image from 'next/image'

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Container = styled.div`
  display: inline-block;
  width: 100%;

  .slider div:nth-of-type(3) {
    border-left: 4px solid rgb(51 51 51 / 50%);
  }

  .showInDesktop {
    display: block;
  }
  .showInMobile {
    display: none !important;
  }

  ${device.tablet} {
    .showInDesktop {
      display: none !important;
    }
    .showInMobile {
      display: block !important;
    }
  }
  .handle {
    width: 90px;
    margin-top: -180px;
  }
`;

function CompareSlider({
  src1,
  src2,
  mobileSrc1,
  mobileSrc2,
  altTextLeft,
  altTextRight,
  ...otherProps
}) {
  return (
    <Container {...otherProps}>
      <ReactCompareSlider
        className="slider"
        handle={
          <div style={{ display: "grid", height: "100%", placeContent: "end" }}>
            <img
              alt=""
              className="handle"
              src="/assets/img-compare-icon.png"
              layout="fill"
            />
          </div>
        }
        itemOne={
          <div>
            <ReactCompareSliderImage
              src={src1}
              alt={altTextLeft}
              className="showInDesktop"
            />
            <ReactCompareSliderImage
              src={mobileSrc1}
              alt={altTextLeft}
              className="showInMobile"
              width={375}
              height={375}
            />
          </div>
        }
        itemTwo={
          <div>
            <ReactCompareSliderImage
              src={src2}
              alt={altTextRight}
              className="showInDesktop"
            />
            <ReactCompareSliderImage
              src={mobileSrc2}
              alt={altTextRight}
              className="showInMobile"
              width={375}
              height={375}
            />
          </div>
        }
      />
    </Container>
  );
}

CompareSlider.defaultProps = {
  src1: "/assets/left.jpg",
  src2: "/assets/right.jpg",
  mobileSrc1: "/assets/left-m.jpg",
  mobileSrc2: "/assets/right-m.jpg",
};

export default CompareSlider;
