import Image from "next/image"
import styled from "styled-components"
import ReactPlayer from "react-player"
import device from "../../utils/mediaUtils"
import { NAPContainer } from "../CommonComponents"

const Container = styled.section`
  position: relative;
  .desc-content {
    position: absolute;
    left: 3%;
    bottom: 2%;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .img-desc {
    color: #fff;
    margin: 0;
    font-size: 14px;
  }
`
const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  ${device.tablet} {
    display: none;
  } ;
`
const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`
const MobileImage = styled.div`
  display: none;
  ${device.tablet} {
    display: block;
  } ;
`
const DesktopImage = styled.div`
  ${device.tablet} {
    display: none;
  } ;
`
export const ContentContainer = styled(NAPContainer)`
  position: absolute;
  height: calc(100% - 105px);
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  /* border: 2px solid red; */
`

function HeroBanner({
  isVideo,
  videoId,
  imageDesc,
  imageDescValue,
  desktop,
  mobile,
  alt,
  children,
  priority,
  ...otherProps
}) {
  // console.log(children)
  return (
    <Container {...otherProps}>
      {isVideo ? (
        <VideoContainer className="video-container">
          <StyledPlayer
            width="100%"
            height="100%"
            muted={true}
            loop={true}
            playing
            url={`https://vimeo.com/${videoId}`}
            config={{
              vimeo: {
                background: true,
                autoplay: true,
              },
            }}
            className="styled-player"
          />
        </VideoContainer>
      ) : (
        <>
          <DesktopImage className="desktop-image">
            <Image
              src={desktop.src}
              width={desktop.width || 1920}
              height={desktop.height || 950}
              priority={priority}
              layout="responsive"
              alt={alt || "alt-image"}
            />
          </DesktopImage>
          {imageDesc && (
            <div className="desc-content showInDesktop">
              <p className="img-desc">{imageDescValue}</p>
            </div>
          )}
        </>
      )}
      <MobileImage className="mobile-image">
        <Image
          src={mobile.src}
          width={mobile.width || 432}
          height={mobile.height || 730}
          layout="responsive"
          priority={priority}
          alt={alt || "alt-image"}
        />
      </MobileImage>
      <ContentContainer className="hello content-container" direction="column">
        {children}
      </ContentContainer>
    </Container>
  )
}

HeroBanner.defaultProps = {
  desktop: {
    src: "/assets/banner-1.jpg?var=111",
  },
  mobile: {
    src: "/assets/mobile-banner.jpg",
  },
  priority: false,
  videoId: 279549964,
  imageDesc: false,
}

export default HeroBanner
