import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BannerSwatch from "../../components/BannerSwatch";
import Header from "../../components/Header";
import HeroBanner from "../../components/HeroBanner";
import MegaMenu from "../../components/MegaMenu";
// import styles from "../styles/Home.module.css";
//import styles from "../styles/Home.module.css";

import styled from "styled-components";
import GridRowItems from "../../components/GridRowItems";
import Slider from "react-slick";
import CompareSlider from "../../components/CompareSlider";

import LeftRightBanner from "../../components/LeftRightBanner";
import BannerSlider from "../../components/BannerSlider";
import ServiceBlack from "../../components/ServiceBlack";
import SimpleAccordion from "../../components/Accordion";
import { NAPContainer } from "../../components/CommonComponents";
import Footer from "../../components/Footer";

import FetchAsync from "../../components/APIFetching/FetchAsync";
import FetchPromise from "../../components/APIFetching/FetchPromise";
import SliderPopUp from "../../components/SliderPopUp";
import NAPButton from "@components/NAPButton";
import Modal from "@material-ui/core/Modal";
import { CloseTag, ModalContainer } from "@components/VideoModal";
import Gallery from "@components/Gallery";
import HomeGridView from "@components/HomePage/HomeGridView";
import Link from "next/link";

/* CHECK calc -> index.js - FOR BUTTON STATE CHANGE AS PER USING STYLED COMPONENTS AND OTHER WAY IS USING className  */

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

export const GalleryWrapper = styled.div`
  svg.slick-prev {
    left: -60px;
  }
  svg.slick-next {
    right: -60px;
  }
`;
const MainHeaderWrapper = styled.div`
  .logo-wrapper {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    background: transparent;
    display: block;
    position: relative;
    overflow: hidden;

    img {
      border-radius: 50%;
      /*  */
      transform: scale(1.05);
      transition: 0.3s all;
      :hover {
        /* transform: scale(1.1); */
        transform: scale(1.1);
        transition: 0.3s all;
      }
    }
    span {
      border-radius: 50%;
    }
  }
`;

export default function Home() {
  // States
  const [tabContent, setTabContent] = useState("content-one");

  // Modal
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    // console.log("video button clicked")
    setModal(true);
  };

  const HomeGridViewData = [
    {
      desktopImg: "/assets/test-image.jpg",
      hoverDesktopImg: "/assets/hp-cycle/img/march-cycle-1-2022/dining.jpg",
      mobileImg: "/assets/test-image.jpg",
      productTitle: "Grid Title",
      productCTA: "Grid Linking",
      productURL: "#",
    },
    {
      desktopImg: "/assets/test-image.jpg",
      hoverDesktopImg: "/assets/hp-cycle/img/march-cycle-1-2022/of.jpg",
      mobileImg: "/assets/test-image.jpg",
      productTitle: "Grid Title",
      productCTA: "Grid Linking",
      productURL: "#",
    },
    {
      desktopImg: "/assets/test-image.jpg",
      hoverDesktopImg: "/assets/hp-cycle/img/march-cycle-1-2022/of.jpg",
      mobileImg: "/assets/test-image.jpg",
      productTitle: "Grid Title",
      productCTA: "Grid Linking",
      productURL: "#",
    },
  ];

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

  //Service Black component Datas
  const row = [
    {
      img: "/assets/garage-flooring/install-white.png",
      heading: <>Heading 1 </>,
      description: (
        <>
          Have your home bar installed quickly and easily by our professional
          installation experts.
        </>
      ),
      url: "/installation-services/",
    },
    {
      img: "/assets/garage-flooring/design-icon-white2.png",
      heading: <>Heading 2 </>,
      description: (
        <>
          Let our Home Design Experts help construct the perfect bar for your
          needs.
        </>
      ),
      url: "/design-services/",
    },
    {
      img: "/assets/garage-flooring/delivery-icon-white3.png",
      heading: <>Heading 3 </>,
      description: (
        <>
          Home Bar delivery made even easier, with room of choice drop off and
          unboxing.
        </>
      ),
      url: "/delivery-services/",
    },
    {
      img: "/assets/garage-flooring/diy-support-icon-white.png",
      heading: <>Heading 4 </>,
      description: (
        <>
          Find the DIY support you need, with videos, installation guides and
          advice from product experts.
        </>
      ),
      url: "/delivery-services/",
    },
  ];

  const galleryitems = [
    [
      {
        id: 1,
        img: "/assets/pvc-slatwall/g-c1r1.JPG",
        title: "Sports Equipment",
        cover: "30%",
        height: 711,
        width: 650,
      },
      {
        id: 2,
        img: "/assets/pvc-slatwall/g-c1r2.JPG",
        title: "Home Gym",
        cover: "40%",
        height: 893,
        width: 650,
      },
      {
        id: 3,
        img: "/assets/pvc-slatwall/g-c1r3.JPG",
        title: "Creative Space",
        cover: "30%",
        height: 711,
        width: 650,
      },
    ],
    //
    [
      {
        id: 4,
        img: "/assets/pvc-slatwall/g-c2r1.JPG",
        title: "Tool Storage",
        cover: "20%",
        height: 358,
        width: 450,
      },
      {
        id: 5,
        img: "/assets/pvc-slatwall/g-c2r2.JPG",
        title: "Craft Room",
        cover: "30%",
        height: 666,
        width: 450,
      },
      {
        id: 6,
        img: "/assets/pvc-slatwall/g-c2r3.JPG",
        title: "Gardening",
        cover: "30%",
        height: 722,
        width: 450,
      },
      {
        id: 7,
        img: "/assets/pvc-slatwall/g-c2r4.JPG",
        title: "Bike Storage",
        cover: "20%",
        height: 484,
        width: 450,
      },
    ],
    //
    [
      {
        id: 8,
        img: "/assets/pvc-slatwall/g-c3r1.JPG",
        title: "Home Office",
        cover: "60%",
        height: 676,
        width: 650,
      },
      {
        id: 9,
        img: "/assets/pvc-slatwall/g-c3r2.JPG",
        title: "Everyday Family Organization",
        cover: "40%",
        height: 444,
        width: 650,
      },
      {
        id: 10,
        img: "/assets/pvc-slatwall/g-c3r3.JPG",
        title: "Laundry Room",
        cover: "60%",
        height: 447,
        width: 650,
      },
      {
        id: 11,
        img: "/assets/pvc-slatwall/g-c3r4.JPG",
        title: "Garage",
        cover: "40%",
        height: 711,
        width: 650,
      },
    ],
  ];

  // Gallery Modal Images Desktop
  const modalItems = [
    {
      id: 1,
      img: "/assets/pvc-slatwall/collage/garage-slatwall.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Sports Equipment</h3>
          <p className="desc">
            Add PVC Slatwall and Slatwall Accessories to your garage cabinet
            system, and organize all of your difficult to store items like
            sports equipment, grass trimmers, shovels, boots, and more.
          </p>
        </>
      ),
    },
    {
      id: 2,
      img: "/assets/pvc-slatwall/collage/newage-garage-slatwall.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Home Gym</h3>
          <p className="desc">
            Add function to your workout space with heavy-duty PVC Slatwall and
            Slatwall Accessories to hold your weights, ropes, bands, rollers,
            yoga mats, and sports gear.
          </p>
        </>
      ),
    },
    {
      id: 3,
      img: "/assets/pvc-slatwall/collage/slatwall-organization.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Creative Space</h3>
          <p className="desc">
            Keep your art studio tidy and allow space for creativity to flow
            with PVC Slatwall, Slatwall Accessories and Bold Series cabinetry.
          </p>
        </>
      ),
    },
    //
    {
      id: 4,
      img: "/assets/pvc-slatwall/collage/garage-pvc-slatwall.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Tool Storage</h3>
          <p className="desc">
            PVC Slatwall and Slatwall Accessories like our Magnetic Tool Bar and
            Parts Bins are the perfect companion for the DIY homeowner looking
            to store small hand tools, hardware, power tools, levels, and
            ladders.
          </p>
        </>
      ),
    },
    {
      id: 5,
      img: "/assets/pvc-slatwall/collage/premium-garage-slatwall.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Craft Room</h3>
          <p className="desc">
            Keep your workspace organized with shelves and hooks for storing
            craft supplies, materials and tools, while beautifying your space
            with a modern wall treatment.
          </p>
        </>
      ),
    },
    {
      id: 6,
      img: "/assets/pvc-slatwall/collage/pvc-slatwall-organization.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Gardening</h3>
          <p className="desc">
            Store hoses, rakes, shovels, and gardening tools with ease with our
            variety of hooks, baskets and shelves on our easy-to-clean PVC
            Slatwall.
          </p>
        </>
      ),
    },
    {
      id: 7,
      img: "/assets/pvc-slatwall/collage/newage-garage-pvc-slatwall.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Bike Storage</h3>
          <p className="desc">
            Get your bikes and helmets off the floor and onto your walls with
            PVC Slatwall and Shallow Basket with Bike Hook accessories.
          </p>
        </>
      ),
    },
    //
    {
      id: 8,
      img: "/assets/pvc-slatwall/collage/garage-slatwall-organization.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Home Office</h3>
          <p className="desc">
            Create the perfect home office space to store binders, books, pens
            and office supplies with PVC Slatwall, Slatwall Accessories and the
            Pro Series Workbench.
          </p>
        </>
      ),
    },
    {
      id: 9,
      img: "/assets/pvc-slatwall/collage/garage-slatwall-organization2.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Everyday Family Organization</h3>
          <p className="desc">
            Store all of your familys gear from bikes, trikes, balls, golf bags,
            and other sports and recreational equipment, as well as seasonal
            items with PVC Slatwall, bike hooks, and shelf accessories.
          </p>
        </>
      ),
    },
    {
      id: 10,
      img: "/assets/pvc-slatwall/collage/garage-pvc-slatwall-organizer.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Laundry Room</h3>
          <p className="desc">
            Elegant off-the-floor storage for your ironing board, iron, drying
            rack, and cleaning supplies with our PVC Slatwall and Accessories.
          </p>
        </>
      ),
    },
    {
      id: 11,
      img: "/assets/pvc-slatwall/collage/newage-products-garage-slatwall.jpg",
      height: 950,
      width: 1920,
      caption: (
        <>
          <h3 className="grid-heading">Garage</h3>
          <p className="desc">
            Get all of your garage items and seasonal gear off the ground and
            onto your walls with PVC Slatwall and Slatwall Accessories.
          </p>
        </>
      ),
    },
  ];

  // Mobile Galleries below galleryItems1 and galleryItems2
  // Mobile Gallery 1
  const galleryItems1 = [
    [
      {
        id: 1,
        img: "/assets/pvc-slatwall/g-c1r1.JPG",
        title: "Bikes and Sports Equipment",
        cover: "100%",
        height: 200,
        width: 250,
      },
      {
        id: 2,
        img: "/assets/pvc-slatwall/g-c2r3.JPG",
        title: "Small Tool Storage",
        cover: "40%",
        height: 300,
        width: 250,
      },
    ],
    [
      {
        id: 3,
        img: "/assets/pvc-slatwall/g-c3r1.JPG",
        title: "Golf Bags and Gears",
        cover: "60%",
        height: 300,
        width: 166,
      },
      {
        id: 4,
        img: "/assets/pvc-slatwall/g-c2r1.JPG",
        title: "Ladders and Bulky Items",
        cover: "60%",
        height: 200,
        width: 166,
      },
    ],
  ];

  // Mobile Gallery 2
  const galleryItems2 = [
    [
      {
        id: 5,
        img: "/assets/pvc-slatwall/g-c3r4.JPG",
        title: "Bikes and Sports Equipment",
        cover: "100%",
        height: 200,
        width: 180,
      },
      {
        id: 6,
        img: "/assets/pvc-slatwall/g-c3r2.JPG",
        title: "Small Tool Storage",
        cover: "40%",
        height: 150,
        width: 180,
      },
    ],
    [
      {
        id: 7,
        img: "/assets/pvc-slatwall/g-c1r2.JPG",
        title: "Golf Bags and Gear",
        cover: "60%",
        height: 380,
        width: 220,
      },
    ],
  ];

  // Mobile Gallery Modal Images
  const galleryModalMobile = [
    {
      id: 1,
      img: "/assets/pvc-slatwall/collage/mobile/9.jpg",
      height: 295,
      width: 360,
      caption: (
        <>
          <h3 className="grid-heading">Sports Equipment</h3>
          <p className="desc">
            Add PVC Slatwall and Slatwall Accessories to your garage cabinet
            system, and organize all of your difficult to store items like
            sports equipment, grass trimmers, shovels, boots, and more.
          </p>
        </>
      ),
    },
    {
      id: 2,
      img: "/assets/pvc-slatwall/collage/mobile/2.jpg",
      height: 295,
      width: 360,
      caption: (
        <>
          <h3 className="grid-heading">Home Gym</h3>
          <p className="desc">
            Add function to your workout space with heavy-duty PVC Slatwall and
            Slatwall Accessories to hold your weights, ropes, bands, rollers,
            yoga mats, and sports gear.
          </p>
        </>
      ),
    },
    {
      id: 3,
      img: "/assets/pvc-slatwall/collage/mobile/8.jpg",
      height: 295,
      width: 360,
      caption: (
        <>
          <h3 className="grid-heading">Creative Space</h3>
          <p className="desc">
            Keep your art studio tidy and allow space for creativity to flow
            with PVC Slatwall, Slatwall Accessories and Bold Series cabinetry.
          </p>
        </>
      ),
    },
    {
      id: 4,
      img: "/assets/pvc-slatwall/collage/mobile/11.jpg",
      height: 295,
      width: 360,
      caption: (
        <>
          <h3 className="grid-heading">Tool Storage</h3>
          <p className="desc">
            PVC Slatwall and Slatwall Accessories like our Magnetic Tool Bar and
            Parts Bins are the perfect companion for the DIY homeowner looking
            to store small hand tools, hardware, power tools, levels, and
            ladders.
          </p>
        </>
      ),
    },
    {
      id: 5,
      img: "/assets/pvc-slatwall/collage/mobile/4.jpg",
      height: 295,
      width: 360,
      caption: (
        <>
          <h3 className="grid-heading">Craft Room</h3>
          <p className="desc">
            Keep your workspace organized with shelves and hooks for storing
            craft supplies, materials and tools, while beautifying your space
            with a modern wall treatment.
          </p>
        </>
      ),
    },
    {
      id: 6,
      img: "/assets/pvc-slatwall/collage/mobile/7.jpg",
      height: 295,
      width: 360,
      caption: (
        <>
          <h3 className="grid-heading">Gardening</h3>
          <p className="desc">
            Store hoses, rakes, shovels, and gardening tools with ease with our
            variety of hooks, baskets and shelves on our easy-to-clean PVC
            Slatwall.
          </p>
        </>
      ),
    },
    {
      id: 7,
      img: "/assets/pvc-slatwall/collage/mobile/5.jpg",
      height: 295,
      width: 360,
      caption: (
        <>
          <h3 className="grid-heading">Bike Storage</h3>
          <p className="desc">
            Get your bikes and helmets off the floor and onto your walls with
            PVC Slatwall and Shallow Basket with Bike Hook accessories.
          </p>
        </>
      ),
    },
  ];

  return (
    <IndexWrapper className="">
      <Head>
        <title>Tanzil WorkBase</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />


      {/*  */}
      <HeroBanner>
        <div className="asset-overlay">
          <h1 className="main-heading fc-white ff-psb">Tanzil WorkBase</h1>
        </div>
        <div className="cta-wrapper second-content">
          <NAPButton
            text="Modal"
            type="outlined"
            color="#FFF"
            onClick={() => handleClick()}
          />
        </div>
      </HeroBanner>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        disableAutoFocus={true}
        className="modal"
      >
        <ModalContainer className="modal-container">
          <header>
            <p className="fc-white main-heading">Simple Modal Contents</p>
          </header>
          <CloseTag
            className="close-icon"
            onClick={() => setModal(false)}
          ></CloseTag>
        </ModalContainer>
      </Modal>
      {/*  */}

      {/*  */}
      <section className="grid-component section-top-padding">
        <header>
          <h3 className="main-heading ff-psb first-content">Grid Component</h3>
        </header>
        {/* <GridRowItems className="quality-cabinets inspiration" mobileSlider> */}
        {/* <Slider {...YMAL}> */}
        {/* <div className="item">
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
          </div> */}
        {/* </Slider> */}
        {/* </GridRowItems> */}
        <NAPContainer>
          <HomeGridView
            HomeGridViewData={HomeGridViewData}
            mobileSlider
            dots
            arrows
            mobFullWidth
          />
        </NAPContainer>
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

                  <h3 className="grid-heading ff-psb second-content">
                    Tab Sub Heading
                  </h3>
                </div>
                <div className="second">
                  <Image
                    src="/assets/test-image.jpg"
                    width={525}
                    height={375}
                    alt=""
                  />

                  <h3 className="grid-heading ff-psb second-content">
                    Tab Sub Heading
                  </h3>
                </div>
                <div className="third">
                  <Image
                    src="/assets/test-image.jpg"
                    width={525}
                    height={375}
                    alt=""
                  />

                  <h3 className="grid-heading ff-psb second-content">
                    Tab Sub Heading
                  </h3>
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

      {/* Gallery */}
      <section className="section-bottom-padding">
        <header>
          <h3 className="main-heading ff-psb first-content">
            Gallery Collage Component with Popup Modal
          </h3>
        </header>
        <GalleryWrapper className="GalleryWrapper">
          <div className="showInDesktop">
            <Gallery
              className="outer-collage custom-gallery"
              items={galleryitems}
              popUpItems={modalItems}
              caption
              sliderCaption
              arrowsColor="white"
            />
          </div>
          <div className="showInMobile">
            <Gallery
              className="gallery-1"
              items={galleryItems1}
              caption
              sliderCaption
              popUpItems={galleryModalMobile}
              arrowsColor="#fff"
            />
            <Gallery
              className="gallery-2"
              items={galleryItems2}
              caption
              sliderCaption
              popUpItems={galleryModalMobile}
              arrowsColor="#fff"
            />
          </div>
        </GalleryWrapper>
      </section>

      {/* Gallery */}

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
      <section className="banner-slider section-top-padding">
        <BannerSlider arrows arrowsColor="#FFF">
          {/* <div className=""> */}
          <Image
            src="/assets/1920-1.jpg"
            alt="Banner-slider"
            layout="responsive"
            width={1920}
            height={800}
          />
          <Image
            src="/assets/1920-3.jpg"
            alt="Banner-slider"
            layout="responsive"
            width={1920}
            height={800}
          />
          {/* </div> */}
        </BannerSlider>
      </section>
      {/*  */}

      {/*  */}
      <section className="bg-section">
        <ServiceBlack
          items={row}
          bgDark
          mainHeading="Component with Dynamic Background"
        />
      </section>
      {/*  */}

      {/*  */}
      <section className="bannerSwatch section-top-padding">
        <BannerSwatch {...Data1} flex_direction="column" />
      </section>
      {/*  */}

      {/*  */}
      <section className="section-top-padding">
        <header>
          <h3 className="main-heading ff-psb first-content">
            On Image Click Open Modal
          </h3>
        </header>
        <SliderPopUp />
      </section>
      {/*  */}

      <section>
        <SimpleAccordion />
      </section>
    </IndexWrapper>
  );
}
