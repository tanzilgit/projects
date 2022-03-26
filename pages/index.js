import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BannerSwatch from "../components/BannerSwatch";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import MegaMenu from "../components/MegaMenu";
// import styles from "../styles/Home.module.css";
import styled from "styled-components";
import GridRowItems from "../components/GridRowItems";
import Slider from "react-slick";
import CompareSlider from "../components/CompareSlider";
import LeftRightBanner from "../components/LeftRightBanner";
import BannerSlider from "../components/BannerSlider";

const IndexWrapper = styled.div`
  header {
    margin-bottom: 30px;
  }
  /*  */
  .tabs-based-components {
    .tab-wrapper {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      margin-top: 30px;
    }
    .contents-wrapper {
      margin-top: 30px;
    }
  }
`;

// Granite and Melamine Buttons
const TabButton = styled.button`
  font-family: "ProximaNova Semi Bold";
  display: inline-block;
  padding: 12px 50px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  color: #707070;
  background: transparent;
  border: none;
  text-transform: uppercase;
  background-color: ${(props) => (props.active ? "#e4e4e4" : "transparent")};
  &:hover {
    background-color: #e4e4e4;
  }
  + button {
    margin-left: 30px;
  }
`;

export default function Home() {
  // States
  const [tabContent, setTabContent] = useState("content-one");

  // Slider
  const YMAL = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 767,
      },
    ],
  };

  // Image Swatch Change, Datas
  const Data1 = {
    heading: <>FrameWorks </>,
    // description: (
    //   <>
    //     <ul>
    //       <li>ReactJS</li>
    //       <li>NextJS</li>
    //       <li>WordPress</li>
    //     </ul>
    //   </>
    // ),
    types: [
      {
        swatch_color: "/assets/bannerSwatch/reactjs-icon.png",
        image_url: "/assets/bannerSwatch/reactjs.jpg",
        // mobile_image_url: "/assets/mobile/shaker-bar-cabinets-grey.jpg",
      },
      {
        swatch_color: "/assets/bannerSwatch/nextjs-icon-2.png",
        image_url: "/assets/bannerSwatch/nextjs.jpg",
        // mobile_image_url: "/assets/mobile/shaker-bar-cabinets-grey.jpg",
      },
      {
        swatch_color: "/assets/bannerSwatch/wp-icon.png",
        image_url: "/assets/bannerSwatch/wp-banner.png",
        // mobile_image_url: "/assets/mobile/shaker-bar-cabinets-white.jpg",
      },
    ],
  };

  return (
    <IndexWrapper className="">
      <Head>
        <title>WorkBase!!!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MegaMenu />
      <Header />

      <HeroBanner />

      {/*  */}
      <section className="grid-component">
        <header>
          <h3 className="main-heading ff-psb first-content">Grid Component</h3>
        </header>
        <GridRowItems className="quality-cabinets inspiration" mobileSlider>
          {/* <Slider {...YMAL}> */}
          <div className="item">
            <Image
              src="/assets/test-image.jpg"
              width={525}
              height={375}
              alt=""
            />
            <h3 className="category-sub-heading ff-psb">Sub Headings 1</h3>
          </div>
          <div className="item">
            <Image
              src="/assets/test-image.jpg"
              width={525}
              height={375}
              alt=""
            />
            <h3 className="category-sub-heading ff-psb">Sub Headings 2</h3>
          </div>
          <div className="item">
            <Image
              src="/assets/test-image.jpg"
              width={525}
              height={375}
              alt=""
            />
            <h3 className="category-sub-heading ff-psb">Sub Headings 3</h3>
          </div>
          {/* </Slider> */}
        </GridRowItems>
      </section>
      {/*  */}

      {/*  */}
      <section className="image-compare-slider">
        <header>
          <h3
            className="main-heading ff-psb first-content"
            style={{ marginBottom: "30px" }}
          >
            Image Compare Slider Component
          </h3>
        </header>
        <CompareSlider />
      </section>
      {/*  */}

      <section className="tabs-based-components section-top-padding section-bottom-padding ">
        <header>
          <h3 className="main-heading ff-psb first-content">
            Tabs Based Components
          </h3>
        </header>
        <div className="tab-wrapper">
          <TabButton
            className="tabs"
            active={tabContent === "content-one" ? 1 : 0}
            onClick={() => setTabContent("content-one")}
          >
            Tab One
          </TabButton>
          <TabButton
            className="tabs"
            active={tabContent === "content-two" ? 1 : 0}
            onClick={() => setTabContent("content-two")}
          >
            Tab Two
          </TabButton>
        </div>
        <div className="contents-wrapper ">
          {/* Content One Datas */}
          {tabContent === "content-one" && (
            <div className="content-one">
              <header>
                <h3 className="main-heading ff-psb first-content">
                  Tab One Contents Heading
                </h3>
                <p className="sub-heading ff-pr second-content">
                  Tab One Contents Sub Heading
                </p>
              </header>
              <GridRowItems className="">
                <div className="first">
                  <Image
                    src="/assets/test-image.jpg"
                    width={525}
                    height={375}
                    alt=""
                  />

                  <h3 className="grid-heading ff-psb">White Pearl Granite</h3>
                </div>
                <div className="second">
                  <Image
                    src="/assets/test-image.jpg"
                    width={525}
                    height={375}
                    alt=""
                  />

                  <h3 className="grid-heading ff-psb">Gold Sand Granite</h3>
                </div>
                <div className="third">
                  <Image
                    src="/assets/test-image.jpg"
                    width={525}
                    height={375}
                    alt=""
                  />

                  <h3 className="grid-heading ff-psb">Black Galaxy Granite</h3>
                </div>
              </GridRowItems>
            </div>
          )}

          {/* Content Two Datas */}
          {tabContent === "content-two" && (
            <div className="content-two">
              <header>
                <h3 className="main-heading ff-psb first-content">
                  Tab Two Contents Heading
                </h3>
                <p className="sub-heading ff-pr second-content">
                  Tab Two Contents Sub Heading
                </p>
              </header>
              <GridRowItems className="">
                <div className="first">
                  <Image
                    src="/assets/test-image.jpg"
                    width={525}
                    height={375}
                    alt=""
                  />

                  <h3 className="grid-heading ff-psb">White Melamine</h3>
                </div>
                <div className="second">
                  <Image
                    src="/assets/test-image.jpg"
                    width={525}
                    height={375}
                    alt=""
                  />

                  <h3 className="grid-heading ff-psb">Espresso Melamine</h3>
                </div>
              </GridRowItems>
            </div>
          )}
        </div>
      </section>

      {/*  */}
      <section className="left-right-component">
        <header>
          <h3
            className="main-heading ff-psb first-content"
            style={{ marginBottom: "30px" }}
          >
            Dynamic Left Right Layout Component
          </h3>
        </header>
        <LeftRightBanner
          className="lr-first"
          desktop={{ src: "/assets/LeftRight-banner.jpg" }}
          mobile={{
            src: "/assets/LeftRight-banner.jpg",
            width: 405,
            height: 390,
          }}
        >
          <header className="showInDesktop">
            <h3 className="main-heading ff-psb first-content">
              LeftRight Component Heading
            </h3>
            <p className="sub-heading ff-pr second-content">
              LeftRight Component Sub Heading
            </p>
          </header>
          <header className="showInMobile">
            <h3 className="main-heading ff-psb first-content">
              LeftRight Component Heading
            </h3>
            <p className="sub-heading ff-pr second-content">
              LeftRight Component Sub Heading
            </p>
          </header>
        </LeftRightBanner>

        {/*  */}

        <LeftRightBanner
          className="lr-first"
          desktop={{ src: "/assets/LeftRight-banner.jpg" }}
          mobile={{
            src: "/assets/LeftRight-banner.jpg",
            width: 405,
            height: 390,
          }}
          reverse
          mobReverse
        >
          <header className="showInDesktop">
            <h3 className="main-heading ff-psb first-content">
              LeftRight Component Heading
            </h3>
            <p className="sub-heading ff-pr second-content">
              LeftRight Component Sub Heading
            </p>
          </header>
          <header className="showInMobile">
            <h3 className="main-heading ff-psb first-content">
              LeftRight Component Heading
            </h3>
            <p className="sub-heading ff-pr second-content">
              LeftRight Component Sub Heading
            </p>
          </header>
        </LeftRightBanner>
      </section>
      {/*  */}

      {/*  */}
      <section className="banner-slider">
        <BannerSlider arrows arrowsColor="#FFF">
          <div className="showInDesktop">
            <Image
              src="/assets/1920-1.jpg"
              alt="Banner-slider"
              layout="fill"
            />
            <Image
              src="/assets/1920-2.jpg"
              alt="Banner-slider"
              layout="fill"
            />
            <Image
              src="/assets/1920-3.jpg"
              alt="Banner-slider"
              layout="fill"
            />
          </div>
        </BannerSlider>
      </section>
      {/*  */}

      {/*  */}
      <section className="bannerSwatch section-top-padding">
        <BannerSwatch {...Data1} flex_direction="column" />
      </section>
      {/*  */}
    </IndexWrapper>
  );
}
