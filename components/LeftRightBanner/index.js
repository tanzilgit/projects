import Image from "next/image";
import styled from "styled-components";
import device from "../../utils/mediaUtils";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ParentContainer = styled.section``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-direction: ${(props) => (props.reverse ? "row" : "row-reverse")};
  ${device.tablet} {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  width: 64%;
  padding: ${(props) => (props.reverse ? "0 0 0 20px" : "0 20px 0 0")};
  position: relative;
  ${device.tablet} {
    padding: 0;
    width: 90%;
    margin-left: ${(props) => (props.mobReverse ? "10%" : "0")};
  }
`;
const ContentContainer = styled.div`
  width: 36%;
  display: flex;
  align-items: center;

  header {
    max-width: 350px;
    margin-left: 15%;
    text-align: left;
    @media (max-width: 1200px) {
      /* margin-left: 10%; */
    }
    @media (max-width: 1100px) {
      max-width: 260px;
      /* margin-left: 5%; */
    }
    ${device.laptop} {
      /* max-width: 250px; */
      /* margin-left: 10%; */
    }

    ${device.laptopS} {
      margin-left: 10%;
      padding-right: 20px;
    }
    ${device.laptopM} {
      /* margin-left: 10%; */
      /* max-width: 300px; */
    }

    ${device.tablet} {
      margin-left: 10%;
      padding-right: 0;
    }
    .first-content {
      margin-bottom: 20px;
    }
  }

  ${device.tablet} {
    /* width: 300px; */
    width: 100%;
    margin-top: 30px;
  }
`;
const DesktopImage = styled.div`
  height: 100%;
  ${device.tablet} {
    display: none;
  }
`;
const MobileImage = styled.div`
  display: none;
  ${device.tablet} {
    display: block;
  }
`;

const CompareContainer = styled.div`
  width: 64%;
  ${device.tablet} {
    width: 100%;
    margin-left: ${(props) => (props.mobReverse ? "10%" : "0")};
  }

  .slider div:nth-of-type(3) {
    border-left: 4px solid rgb(51 51 51 / 50%);
  }
`;

const WhiteText = styled.div`
  position: absolute;
  color: #fff;
  bottom: 30px;
  left: 30px;
  max-width: 300px;

  ${device.tablet} {
    display: none;
  }
`;

function LeftRightBanner({
  hero,
  desktop,
  mobile,
  reverse,
  children,
  mobReverse,
  compare,
  isSlider,
  onImageText,
  video,
  videoSrc,
  className,
  ...otherProps
}) {
  console.log(desktop);
  return (
    <ParentContainer className="left-right-banner">
      <Container
        className={`flex-container ${className}`}
        reverse={reverse}
        {...otherProps}
      >
        {!isSlider && (
          <ImageContainer
            reverse={reverse}
            className="image-container"
            mobReverse={mobReverse}
          >
            {video && (
              <DesktopImage>
                <video
                  autoplay="autoplay"
                  loop="loop"
                  muted="muted"
                  width="100%"
                >
                  <source src={videoSrc} type="video/mp4"></source>
                </video>
              </DesktopImage>
            )}
            {!video && (
              <DesktopImage>
                {!hero && (
                  <Image
                    className="desktop-image"
                    src={desktop.src}
                    width={desktop.width || 1000}
                    height={desktop.height || 615}
                    layout="responsive"
                  />
                )}
                {hero && (
                  <div
                    style={{
                      backgroundImage: `url(${desktop.src})`,
                      backgroundSize: "cover",
                      height: "100%",
                    }}
                  ></div>
                )}
              </DesktopImage>
            )}
            {/* <DesktopImage>
              <Image
                className="desktop-image"
                src={desktop.src}
                width={desktop.width || 1000}
                height={desktop.height || 615}
                layout="responsive"
              />
            </DesktopImage> */}
            <MobileImage>
              <Image
                className="mobile-image"
                src={mobile.src}
                width={mobile.width || 460}
                height={mobile.height || 510}
                layout="responsive"
              />
            </MobileImage>
            <WhiteText className="white-text">{onImageText}</WhiteText>
          </ImageContainer>
        )}

        {isSlider && (
          <CompareContainer
            className="compare-container"
            mobReverse={mobReverse}
          >
            <ReactCompareSlider
              className="slider"
              handle={
                <div
                  style={{
                    display: "grid",
                    height: "100%",
                    placeContent: "end",
                  }}
                >
                  <img
                    className="handle"
                    src="/assets/img-compare-icon.png"
                    style={{ width: 90, marginTop: -180 }}
                  />
                </div>
              }
              itemOne={
                <div>
                  <ReactCompareSliderImage
                    src={compare.src1}
                    alt={compare.altText}
                    className="showInDesktop"
                  />
                  <ReactCompareSliderImage
                    src={compare.mobileSrc1}
                    alt={compare.altText}
                    className="showInMobile"
                  />
                </div>
              }
              itemTwo={
                <div>
                  <ReactCompareSliderImage
                    src={compare.src2}
                    alt={compare.altText}
                    className="showInDesktop"
                  />
                  <ReactCompareSliderImage
                    src={compare.mobileSrc2}
                    alt={compare.altText}
                    className="showInMobile"
                  />
                </div>
              }
            />
          </CompareContainer>
        )}
        <ContentContainer className="content-container">
          {children}
        </ContentContainer>
      </Container>
    </ParentContainer>
  );
}

LeftRightBanner.defaultProps = {
  desktop: {
    src: "/assets/kitchen/kitchen-cabinets/kitchen-cabinet-frame.jpg",
  },
  mobile: {
    src: "/assets/kitchen/kitchen-cabinets/kitchen-cabinet-frame-1.jpg",
  },
  reverse: false,
  compare: false,
  isSlider: false,
};

export default LeftRightBanner;
