import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BannerSwatch from "../components/BannerSwatch";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import MegaMenu from "../components/MegaMenu";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Home.module.css";

//import '../styles/crm.css';
import styled from "styled-components";
import GridRowItems from "../components/GridRowItems";
import Slider from "react-slick";
import CompareSlider from "../components/CompareSlider";

import LeftRightBanner from "../components/LeftRightBanner";
import BannerSlider from "../components/BannerSlider";
import ServiceBlack from "../components/ServiceBlack";
import SimpleAccordion from "../components/Accordion";
import { NAPContainer } from "../components/CommonComponents";
import Footer from "../components/Footer";

import FetchAsync from "../components/APIFetching/FetchAsync";
import FetchPromise from "../components/APIFetching/FetchPromise";
import SliderPopUp from "../components/SliderPopUp";
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

      {/* CRM starts */}
      <section className="CRM">
        {/* <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div> */}

        <div className="container">
          <div className="header">
            <MainHeaderWrapper className="MainHeaderWrapper">
              <div className="logo-wrapper">
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/logo-1.png"
                      width={150}
                      height={150}
                      alt="Tanzil"
                    />
                  </a>
                </Link>
              </div>
            </MainHeaderWrapper>
            <h1 className="name">Tanzil Ansari</h1>
            <p className="title">Senior Consultant</p>
            <p className="subtitle">Technology Consulting</p>
            <div className="contact-info">
              <a href="tel:+919821778945" className="contact-item">
                📞 +91 9821778945
              </a>
              <a
                href="mailto:tanzilahmed.ansari7@gmail.com"
                className="contact-item"
              >
                ✉️ Email
              </a>
              <a
                href="linkedin.com/in/tanzilahmedansari"
                className="contact-item"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://github.com/tanzilgit/projects"
                className="contact-item"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="card">
              <h2>🚀 Areas of Expertise</h2>
              <div className="expertise-grid">
                <div className="skill-tag">Microsoft Dynamics 365</div>
                <div className="skill-tag">Power Platform</div>
                <div className="skill-tag">Logic Apps</div>
                <div className="skill-tag">Client-Side Validations</div>
                <div className="skill-tag">Web Development</div>
                <div className="skill-tag">Quality Testing</div>
                <div className="skill-tag">Scrum & Pre-Sales</div>
                <div className="skill-tag">JavaScript</div>
                <div className="skill-tag">ReactJS</div>
                <div className="skill-tag">NextJS</div>
                <div className="skill-tag">SharePoint</div>
                <div className="skill-tag">Data Analytics</div>
                <div className="skill-tag">Reporting Solutions</div>
              </div>
              <div class="experience-summary">
                <h3>Industry Expertise</h3>
                <p>
                  Public and Private sector industries, including Technology Consulting and
                  Product based companies.
                </p>
              </div>
            </div>

            <div className="card">
              <h2>💼 Professional Experience</h2>
              <div className="experience-summary">
                <h3>5.5 Years of Excellence</h3>
                <p>
                  Diverse consulting and product-based industry experience with
                  deep knowledge in CRM frameworks, Microsoft Sales and Project
                  Operations CRM Module Customization and Configuration.
                </p>
              </div>
              <div className="experience-summary">
                <h3>Technical Leadership</h3>
                <p>
                  Expertise in Power Platform Technical and Functional
                  consulting across various D365 implementations. Skilled in
                  JavaScript, Business Rules, Workflows and Dataverse
                  integrations.
                </p>
              </div>
              <div className="experience-summary">
                <h3>Frontend Development Expertise</h3>
                <p>
                  Extensive experience in Frontend Development with technologies
                  like JavaScript, ReactJS, NextJS, HTML, CSS. Cross-browser
                  testing and site optimization using analytics tools like
                  Google Analytics.
                </p>
              </div>
            </div>
          </div>
          <div className="projects-section">
            <h2>🎯 Major Projects Portfolio</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>CRM Technical Developer</h3>
                <div className="company">Engineering Services Company</div>
                <p>
                  Led the complete transformation of customer management systems
                  with Full Revamp of Microsoft Sales Model Driven App featuring
                  advanced customizations and seamless integrations.
                </p>
                <div className="project-highlights">
                  <ul>
                    <li>
                      Managed all client-side validations and third-party
                      integrations
                    </li>
                    <li>
                      Implemented Power Platform Automate and System Workflows
                    </li>
                    <li>
                      Developed Dataverse integrations with external systems
                    </li>
                    <li>
                      Handled Resource Allocation and legacy system migration
                    </li>
                  </ul>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">Microsoft Dynamics 365</span>
                  <span className="tech-tag">Power Platform</span>
                  <span className="tech-tag">Dataverse</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Power Automate</span>
                </div>
              </div>

              <div className="project-card">
                <h3>Microsoft Project Operations Implementation</h3>
                <div className="company">Resource Management System</div>
                <p>
                  Led implementation of Microsoft Project Operations for
                  comprehensive resource allocation and project management,
                  integrating with existing D365 ecosystem for seamless
                  operations.
                </p>
                <div className="project-highlights">
                  <ul>
                    <li>
                      Configured Project Operations modules for resource
                      tracking
                    </li>
                    <li>Implemented custom timesheet and expense management</li>
                    <li>
                      Integrated with Microsoft Sales for unified customer
                      experience
                    </li>
                    <li>Developed custom reporting and analytics solutions</li>
                  </ul>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">Project Operations</span>
                  <span className="tech-tag">Resource Management</span>
                  <span className="tech-tag">D365 Integration</span>
                  <span className="tech-tag">Custom Workflows</span>
                </div>
              </div>

              <div className="project-card">
                <h3>D365 Customer Experience Implementation</h3>
                <div className="company">Technology Consulting Project</div>
                <p>
                  Served as Technical Consultant for comprehensive D365 Customer
                  Experience Sales implementation, specializing in custom and
                  system-level client-side validations.
                </p>
                <div className="project-highlights">
                  <ul>
                    <li>Handled custom and system-level validations</li>
                    <li>Implemented business process automation</li>
                    <li>Configured sales pipeline and lead management</li>
                    <li>Integrated with third-party applications</li>
                  </ul>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">D365 Sales</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Business Rules</span>
                  <span className="tech-tag">Workflows</span>
                </div>
              </div>

              <div className="project-card">
                <h3>POC Development Projects</h3>
                <div className="company">Multiple Client Implementations</div>
                <p>
                  Developed and implemented various Proof of Concept solutions
                  involving Power Platform understanding and integration using
                  LogicApps for diverse business requirements.
                </p>
                <div className="project-highlights">
                  <ul>
                    <li>
                      Built scalable POC solutions for client requirements
                    </li>
                    <li>Implemented Logic Apps for process automation</li>
                    <li>Integrated multiple systems using Power Platform</li>
                    <li>Created custom connectors and workflows</li>
                  </ul>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">Logic Apps</span>
                  <span className="tech-tag">Power Platform</span>
                  <span className="tech-tag">API Integration</span>
                  <span className="tech-tag">Automation</span>
                </div>
              </div>

              <div className="project-card">
                <h3>Web Application Development</h3>
                <div className="company">Product-Based Company</div>
                <p>
                  Developed comprehensive web applications for household, garage
                  and kitchen products using modern JavaScript frameworks with
                  focus on user experience and performance optimization.
                </p>
                <div className="project-highlights">
                  <ul>
                    <li>
                      Built responsive web applications using ReactJS and NextJS
                    </li>
                    <li>
                      Implemented comprehensive Quality Assurance processes
                    </li>
                    <li>
                      Optimized applications for search engine performance
                    </li>
                    <li>Created scalable and maintainable code architecture</li>
                  </ul>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">ReactJS</span>
                  <span className="tech-tag">NextJS</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">SEO Optimization</span>
                  <span className="tech-tag">Quality Assurance</span>
                </div>
              </div>

              <div className="project-card">
                <h3>GitHub Repository Management</h3>
                <div className="company">Code Management & Collaboration</div>
                <p>
                  Maintained comprehensive code repositories using GitHub for
                  all project implementations, ensuring version control,
                  collaboration, and code quality standards.
                </p>
                <div className="project-highlights">
                  <ul>
                    <li>Maintained clean and organized code repositories</li>
                    <li>
                      Implemented proper branching strategies and workflows
                    </li>
                    <li>Ensured code quality through reviews and testing</li>
                    <li>
                      Facilitated team collaboration and knowledge sharing
                    </li>
                  </ul>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">GitHub</span>
                  <span className="tech-tag">Version Control</span>
                  <span className="tech-tag">Code Review</span>
                  <span className="tech-tag">Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>
          <div className="education-cert-section">
            <div className="education-cert-section">
              <div className="education-card">
                <h2>🎓 Education</h2>
                <div className="degree">Bachelor of Engineering</div>
                <div className="university">
                  Information Technology
                  <br />
                  Mumbai University
                </div>
              </div>

              <div className="cert-card">
                <h2>📜 Professional Certifications</h2>
                <div className="cert-item">
                  <h4>Web Development Certification</h4>
                  <p>Completed comprehensive web development program</p>
                </div>
                <div className="cert-item">
                  <h4>CRM Training - Microsoft Modules</h4>
                  <p>Ongoing specialized training in Microsoft CRM solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="nextjs-wrapper">
            <Link href="nextjs-components">
              <a className="contact-item">Some of my NextJS Components</a>
            </Link>
          </div>
        </div>
      </section>
      {/* CRM Ends */}

      {/* Earlier NextJS code use to start from here, fir component was <HeroBanner>
      Then entire code is moved to nextjs-components page */}
    </IndexWrapper>
  );
}
