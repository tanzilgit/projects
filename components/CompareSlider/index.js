import styled from "styled-components";
import device from "../../utils/mediaUtils";
import Image from "next/Image";
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
            <Image
              alt=""
              className="handle"
              src="/assets/img-compare-icon.png"
              style={{ width: 90, marginTop: -180 }}
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
            />
          </div>
        }
      />
    </Container>
  );
}

CompareSlider.defaultProps = {
  src1: "/assets/kitchen/kitchen-sinks/left-slider-new.jpg",
  src2: "/assets/kitchen/kitchen-sinks/right-slider-new.jpg",
  mobileSrc1: "/assets/kitchen/kitchen-sinks/mobile/slider1.png",
  mobileSrc2: "/assets/kitchen/kitchen-sinks/mobile/slider2.png",
};

export default CompareSlider;
