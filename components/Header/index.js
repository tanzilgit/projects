import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Drawer from "@material-ui/core/Drawer";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import NAPButton from "../NAPButton";
import device from "../../utils/mediaUtils";
// import getSiteType from "@utils/custom-hooks/getSiteType";
import { useRouter } from "next/router";

const HeaderBanner = styled.div`
  text-align: center;
  padding: 10px;
  background: #000;
  color: #fff;
`;
const Shipping = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 auto;
  color: #fff;
`;
const Pincode = styled.div`
  position: absolute;
  left: 10px;
  ${device.tablet} {
    display: none;
  }
`;
const Flag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  ${device.tablet} {
    display: none;
  }
`;
const HeaderContainer = styled.div`
  padding: 15px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  letter-spacing: 1.3px;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid #c4c0c0;
  .shop-header-content {
    justify-content: center;
    .shop-department {
      width: 25%;
    }
    .offers {
      display: flex;
    }
    .offers > div + div {
      margin-left: 25px;
    }
  }

  .right .inspiration-tab {
    justify-content: center;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 15px;
    width: 100%;
  }
  .inspiration-tab > div {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    align-items: end;
  }
  .first-component {
    width: auto;
    height: 145px;
    background: #ebebeb;
    /* width: 220px; */
    width: 231px;
    /* height: 100%; */
  }
  .text-component {
    padding: 18px;
  }
  .text-component .ff-pr {
    font-size: 20px;
  }
  .text-component .ff-psb {
    margin-top: 5px;
    line-height: 16px !important;
    font-size: 16px;
    color: #61636a;
  }
  @media (max-width: 1300px) {
    .inspiration-tab {
      grid-gap: 5px;
      width: 940px;
    }
    .inspiration-tab > div {
      height: 105px;
      width: 180px;
    }
    .first-component {
      margin-right: 5px;
    }
    .text-component {
      padding: 10px 18px;
    }
    .text-component .ff-pr {
      font-size: 16px;
    }
    .text-component .ff-psb {
      font-size: 13px;
      letter-spacing: 0;
    }
    .header-img {
      width: 95%;
    }
  }
  @media (max-width: 1150px) {
    font-size: 14px;
    .shop-header-content .offers {
      width: 70%;
    }
  }
  @media (max-width: 991px) {
    display: none;
  }
`;
const LeftHeader = styled.div`
  display: flex;
  width: 30%;
  padding: 0 20px;
  justify-content: space-around;
  @media (max-width: 1450px) {
    width: 35%;
  }
`;
const MiddleHeader = styled.div`
  width: 20%;
  text-align: right;
  > img {
    width: 200px;
    cursor: pointer;
  }
  @media (max-width: 1450px) {
    /* width: 30%; */
    > img {
      width: 180px;
    }
  }
`;
const RightHeader = styled.div`
  display: flex;
  width: 40%;
  padding: 0 20px;
  justify-content: space-around;
  align-items: center;
  .right-side-mega-menu #searchDiv {
    img {
      margin-top: 10px;
      cursor: pointer;
    }
    position: relative;
  }
  .click-dissable {
    list-style: none;
  }
  .show {
    display: block;
  }
  .right-side-mega-menu form.search-form {
    display: none;
    position: absolute;
    background: #fff;
    box-shadow: 0px 0px 5px 2px #ccc;
    padding: 4px;
    z-index: 2;
    right: 0px;
    top: 50px;
  }
  .right-side-mega-menu form.show {
    display: block;
  }

  .right-side-mega-menu form.search-form:before {
    content: "";
    position: absolute;
    margin: -10px 0 0 0;
    top: 0;
    right: 1%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ededed;
  }

  .right-side-mega-menu .search-input-field input[type="search"] {
    border: 2px solid #e3e3e6;
    padding: 10px 10px;
    width: 350px;
    outline: none;
  }

  .right-side-mega-menu .search-input-field {
    padding: 0;
    top: 0;
  }

  .right-side-mega-menu .img-search-icon {
    left: -55px;
  }
`;
const NavItem = styled.div`
  cursor: pointer;
  padding: 10px 25px;
  border-radius: 5px;
  ${(props) => props.active && "background: #ebebeb;"}
  &:hover {
    background: #ebebeb;
  }
`;
const ExpandHeader = styled.div`
  position: absolute;
  padding: 20px;
  top: 0;
  margin-top: 93px;
  background-color: #fff;
  width: 100%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  z-index: 10;
  /* Shop Tab */
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .flex-col img + img {
    margin-top: 25px;
  }
  a {
    text-transform: initial;
  }
  @media (max-width: 1450px) {
    margin-top: 87px;
  }
  @media (max-width: 1300px) {
    padding: 20px 20px 40px;
  }
  @media (max-width: 1150px) {
    margin-top: 85.5px;
  }
`;
const HeaderContent = styled.div`
  /* width: 70%; */
  width: 1280px;
  /* width: 55%; */
  margin: 0 auto;
  display: flex;
  /* border: 1px solid black; */
  justify-content: space-between;
  > img {
    width: 200px;
  }
  .header-img {
    cursor: pointer;
  }
  .services-image-warpper {
    display: flex;
    img {
      width: 100%;
    }
  }
  .services-image-warpper > div + div {
    margin-left: 30px;
  }
  /* For service tab making them center align with even spaces */
  @media (min-width: 1921px) {
    justify-content: space-evenly;
  }
  /* For service tab making them center align with even spaces */
  @media (max-width: 1750px) {
    /* width: 85%; */
    /* width: 75%; */
  }
  @media (max-width: 1200px) {
    width: 95%;
    /* Services Tab */
    .services-image-warpper {
      width: 70%;
    }
    /*  */
    /* .header-img {
      width: 95%;
    } */
  }
`;

const CartIcon = styled.div`
  > img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
const ProfileIcon = styled.div`
  > img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
const MainMenu = styled.a`
  display: block;
  cursor: pointer;
  font-size: 24px;
  font-weight: 100;
  line-height: 1.7;
  color: #555;
  ${device.laptopM} {
    font-size: 20px;
  }
`;
const PrimaryLink = styled.a`
  display: block;
  cursor: pointer;
  margin: 10px 0;
  font-size: 18px;
  line-height: 1.7;
  font-weight: bold;
  color: #000;
`;
const SecondaryLink = styled.a`
  display: block;
  cursor: pointer;
  margin: 5px 0 0;
  font-size: 15px;
  line-height: 1.7;
  font-weight: 700;
  color: #808080;
`;
const MobileHeader = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: flex;
  }
`;
const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 15px;
  background: #3e4148;
`;
const MobileLogo = styled.div`
  > img {
    width: 100px;
  }
`;
const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    width: 100%;
  }
`;
const DrawerContainer = styled.div`
  padding: 15px;
  height: 100%;
  background: #3e4148;
  overflow-y: scroll;
`;
const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DrawerContent = styled.div`
  width: 80%;
  margin: 20px auto;
  .MuiAccordionDetails-root {
    flex-direction: column;
  }
  .MuiPaper-root {
    background-color: transparent;
    color: #fff;
    box-shadow: none;
  }
  .MuiAccordion-root:before {
    background-color: #898989;
  }
  .MuiIconButton-root {
    padding: 0 12px;
    color: #fff;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 10px 0;
  }
  .MuiAccordionSummary-root.Mui-expanded {
    min-height: 25px;
  }
  .MuiAccordionSummary-root {
    min-height: 42px;
  }
`;
const MobileDrawerLink = styled.a`
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #fff;
  margin: 0 16px;
  padding: 16px 0;
`;

export const departmentTab = [
  [
    {
      mainMenu: "Garage",
      mainMenuBtnText: "Shop All Garage",
      mainMenuBtnLink: "/garage-storage-organization-solutions",
      links: [
        {
          category: "Garage",
          text: "Garage Cabinets",
          link: "/garage-storage-cabinets",
          type: "primary",
        },
        {
          category: "Garage",
          text: "Pro Series",
          link: "/garage-storage-cabinets-pro-3-0-series",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Bold Series",
          link: "/garage-storage-cabinets-bold-3-0-series",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Racks & Shelving",
          link: "/shelves-and-off-the-floor-storage",
          type: "primary",
        },
        {
          category: "Garage",
          text: "Wall Mounted Shelves",
          link: "/pro-series-wall-mounted-steel-shelves",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Wall Mounted Racks",
          link: "/wall-mounted-racks",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Slatwall & Accessories",
          link: "/slatwall",
          type: "primary",
        },
        {
          category: "Garage",
          text: "PVC Slatwall",
          link: "/slatwall/pvc-slatwall",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Steel Slatwall",
          link: "/slatwall/steel-slatwall",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Slatwall Backsplash",
          link: "/slatwall/steel-slatwall-backsplash",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Slatwall Accessories",
          link: "/slatwall/slatwall-accessories",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Workbench Solutions",
          link: "/garage-storage-organization-solutions/workbenches/",
          type: "primary",
        },
        {
          category: "Garage",
          text: "Garage Accessories",
          link: "/garage-storage-organization-solutions/garage-accessories",
          type: "primary",
        },
        {
          category: "Garage",
          text: "Linkable Shop Lights",
          link: "/linkable-shop-lights",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Infrared Heater",
          link: "/garage-storage-organization-solutions/garage-accessories/infrared-heater",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Cabinets Lights",
          link: "https://shopnewage.com/collections/cabinet-lighting/",
          type: "secondary",
        },
      ],
    },
  ],
  [
    {
      mainMenu: "Outdoor",
      mainMenuBtnText: "Shop All Outdoor",
      mainMenuBtnLink: "/outdoor-kitchen",
      links: [
        {
          category: "Outdoor",
          text: "Kitchen Cabinets",
          link: "/outdoor-kitchen",
          type: "primary",
        },
        {
          category: "Outdoor",
          text: "Countertops",
          link: "/outdoor-kitchen/kitchen-cabinets/counter-top",
          type: "secondary",
        },
        {
          category: "Outdoor",
          text: "Aluminum Collection",
          link: "/outdoor-kitchen-cabinets-aluminum",
          type: "secondary",
        },
        {
          category: "Outdoor",
          text: "Stainless Steel Collection",
          link: "/outdoor-kitchen-cabinets-stainless-steel",
          type: "secondary",
        },
        {
          category: "Outdoor",
          text: "BBQ and Grills",
          link: "/outdoor-kitchen/bbq-gril",
          type: "primary",
        },
        {
          category: "Outdoor",
          text: "Gas Grills",
          link: "/outdoor-kitchen/bbq-gril?tab=gas&id#grills",
          type: "secondary",
        },
        {
          category: "Outdoor",
          text: "Charcoal Grills",
          link: "/outdoor-kitchen/bbq-gril?tab=charcoal&id#grills",
          type: "secondary",
        },
        {
          category: "Outdoor",
          text: "Side Burners",
          link: "/outdoor-kitchen/bbq-gril?tab=burner&id#grills",
          type: "secondary",
        },
      ],
      // links: [
      //   {
      //     text: 'Kitchen Cabinet',
      //     link: '#',
      //     type: 'primary'
      //   },
      //   {
      //     text: 'Countertops',
      //     link: '#',
      //     type: 'secondary'
      //   },
      //   {
      //     text: 'Stainless Steel Collection',
      //     link: '#',
      //     type: 'secondary'
      //   },
      //   {
      //     text: 'Alumunium Collection',
      //     link: '#',
      //     type: 'secondary'
      //   },
      //   {
      //     text: 'Cooking Appliances',
      //     link: '#',
      //     type: 'primary'
      //   },
      //   {
      //     text: 'Grills',
      //     link: '#',
      //     type: 'secondary'
      //   },
      //   {
      //     text: 'Dual Side Burners',
      //     link: '#',
      //     type: 'secondary'
      //   }
      // ]
    },
  ],
  [
    {
      mainMenu: "Kitchen",
      mainMenuBtnLink: "/kitchen",
      mainMenuBtnText: "Shop All Kitchen",
      links: [
        {
          category: "Kitchen",
          text: "Cabinets",
          link: "/kitchen/kitchen-cabinets",
          type: "secondary",
        },
        {
          category: "Kitchen",
          text: "Sinks",
          link: "/kitchen/kitchen-sinks",
          type: "secondary",
        },
        {
          category: "Kitchen",
          text: "Faucets",
          link: "/kitchen/kitchen-faucets",
          type: "secondary",
        },
        {
          category: "Kitchen",
          text: "Granite Countertops",
          link: "/kitchen/granite-countertops",
          type: "secondary",
        },
        {
          category: "Kitchen",
          text: "Backsplash",
          link: "/kitchen/backsplash-tile",
          type: "secondary",
        },
        {
          category: "Kitchen",
          text: "Cabinet Hardware",
          link: "/kitchen/cabinet-hardware",
          type: "secondary",
        },
        {
          category: "Kitchen",
          text: "Millwork",
          link: "/kitchen/kitchen-millwork",
          type: "secondary",
        },
        {
          category: "Kitchen",
          text: "Cabinets Organization",
          link: "/kitchen/kitchen-organization",
          type: "secondary",
        },
        {
          category: "Kitchen",
          text: "Lighting",
          link: "/kitchen/kitchen-lighting",
          type: "secondary",
        },
        {
          category: "Kitchen",
          text: "Flooring",
          link: "/inspiration/kitchenflooring",
          type: "secondary",
        },
      ],
    },
  ],
  [
    {
      mainMenu: "Home Bar",
      mainMenuBtnLink: "/home-bar-cabinets",
      mainMenuBtnText: "Shop All Home Bar",
      links: [
        {
          category: "Home Bar",
          text: '21" Home Bar Solutions',
          link: "/home-bar-cabinets/21in-home-bar-cabinets",
          type: "secondary",
        },
        {
          category: "Home Bar",
          text: '24" Home Bar Solutions',
          link: "/home-bar-cabinets/24in-home-bar-cabinets",
          type: "secondary",
        },
      ],
    },
    {
      mainMenu: "Laundry",
      mainMenuBtnLink: "/laundry-room-cabinets",
      mainMenuBtnText: "Shop All Home Bar",
    },
    {
      mainMenu: "Flooring",
      mainMenuBtnLink: "/flooring",
      mainMenuBtnText: "Shop All Flooring",
      links: [
        {
          category: "Flooring",
          text: "Luxury Vinyl Plank",
          link: "/flooring/luxury-vinyl-plank",
          type: "secondary",
        },
        {
          category: "Flooring",
          text: "Luxury Vinyl Tile",
          link: "/flooring/luxury-vinyl-tiles",
          type: "secondary",
        },
      ],
    },
  ],
];

const caDepartmentTab = [
  [
    {
      mainMenu: "Garage",
      mainMenuBtnText: "Shop All Garage",
      mainMenuBtnLink: "/garage-storage-organization-solutions",
      links: [
        {
          category: "Garage",
          text: "Garage Cabinets",
          link: "/ca/garage-storage-cabinets",
          type: "primary",
        },
        {
          category: "Garage",
          text: "Pro Series",
          link: "/ca/garage-storage-cabinets-pro-3-0-series",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Bold Series",
          link: "/ca/garage-storage-cabinets-bold-3-0-series",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Racks & Shelving",
          link: "/ca/shelves-and-off-the-floor-storage",
          type: "primary",
        },
        {
          category: "Garage",
          text: "Wall Mounted Shelves",
          link: "/ca/pro-series-wall-mounted-steel-shelves",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Wall Mounted Racks",
          link: "/ca/wall-mounted-racks",
          type: "secondary",
        },
        {
          category: "Garage",
          text: "Slatwall & Accessories",
          link: "/ca/wall-organization",
          type: "primary",
        },
        {
          category: "Garage",
          text: "Workbench Solutions",
          link: "/ca/garage-storage-organization-solutions/workbenches/",
          type: "primary",
        },
        {
          category: "Garage",
          text: "Linkable Shop Lights",
          link: "/ca/linkable-shop-lights",
          type: "primary",
        },
        {
          category: "Garage",
          text: "Cabinet Lightd",
          link: "https://ca.shopnewage.com/collections/cabinet-lighting/?_ga=2.239278731.923755039.1628501241-522633941.1615800069",
          type: "primary",
        },
        {
          category: "Garage",
          text: "Garage Flooring",
          link: "/ca/flooring/residential-spaces/garage-spaces/",
          type: "primary",
        },
      ],
    },
  ],
  [
    {
      mainMenu: "Outdoor",
      mainMenuBtnText: "Shop All Outdoor",
      mainMenuBtnLink: "/ca/outdoor-kitchen-cabinets",
      links: [
        {
          category: "Outdoor",
          text: "Kitchen Cabinets",
          link: "/ca/outdoor-kitchen",
          type: "primary",
        },
        {
          category: "Outdoor",
          text: "Stainless Steel Collection",
          link: "/outdoor-kitchen-cabinets-stainless-steel",
          type: "secondary",
        },
        {
          category: "Outdoor",
          text: "Aluminum Collection",
          link: "/outdoor-kitchen-cabinets-aluminum",
          type: "secondary",
        },
        {
          text: "Cooking Appliances",
          link: "/ca/outdoor-kitchen-grills/",
          type: "primary",
        },
        {
          text: "Grills",
          link: "/ca/outdoor-kitchen-grills#learn-more1",
          type: "secondary",
        },
        {
          text: "Dual Side Burners",
          link: "/ca/outdoor-kitchen-grills#dual-side-burners",
          type: "secondary",
        },
      ],
      // links: [
      //   {
      //     text: 'Kitchen Cabinet',
      //     link: '#',
      //     type: 'primary'
      //   },
      //   {
      //     text: 'Countertops',
      //     link: '#',
      //     type: 'secondary'
      //   },
      //   {
      //     text: 'Stainless Steel Collection',
      //     link: '#',
      //     type: 'secondary'
      //   },
      //   {
      //     text: 'Alumunium Collection',
      //     link: '#',
      //     type: 'secondary'
      //   },
      //   {
      //     text: 'Cooking Appliances',
      //     link: '#',
      //     type: 'primary'
      //   },
      //   {
      //     text: 'Grills',
      //     link: '#',
      //     type: 'secondary'
      //   },
      //   {
      //     text: 'Dual Side Burners',
      //     link: '#',
      //     type: 'secondary'
      //   }
      // ]
    },
  ],
  [
    {
      mainMenu: "Flooring",
      mainMenuBtnLink: "/ca/flooring",
      mainMenuBtnText: "Shop All Flooring",
      links: [
        {
          category: "Flooring",
          text: "Luxury Vinyl Plank",
          link: "/ca/flooring/luxury-vinyl-plank/",
          type: "secondary",
        },
        {
          category: "Flooring",
          text: "Luxury Vinyl Tile",
          link: "/ca/flooring/luxury-vinyl-tiles/",
          type: "secondary",
        },
        {
          category: "Flooring",
          text: "Flooring Buying Guide",
          link: "/ca/flooring/flooring-buying-guide/",
          type: "secondary",
        },
        {
          category: "Flooring",
          text: "Material & Tech Specs",
          link: "/ca/flooring/flooring-material-testing/",
          type: "secondary",
        },
      ],
    },
  ],
];

function Header({ data }) {
  const [siteType, setSiteType] = useState(null);
  const [header, setHeader] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [pageUrl, setPageUrl] = useState();

  // getSiteType(setSiteType);

  

  return (
    <>
      <Head>
        <title>{data?.metaID ? data?.metaTitle : "Tanzil WorkBase"}</title>

        {/* Main Meta Fields */}
        <link
          rel="canonical"
          href={
            pageUrl == data?.metaID
              ? `https://workbase.vercel.app${data?.metaID}`
              : "https://workbase.vercel.app/"
          }
        />
        <meta
          name="robots"
          content={
            data?.metaIndexing == "Indexable" ? "index" : "noindex, nofollow"
          }
        />

        <meta
          name="description"
          content={
            data?.metaDescription != null
              ? data?.metaDescription
              : "Organize and enjoy your space with premium NewAge home improvement products. Modular designs make it easy to create customized storage solutions for garage, kitchen, outdoor kitchen, home bar and more."
          }
        />

        {/* (og:) OG meta Fields (Open Graph Protocol = FaceBook Content Reading) */}
        <meta property="og:locale" content="en_US" />
        <meta
          name="og:type"
          content={
            pageUrl == data?.metaID ? data?.metaType : "Tanzil META Type"
          }
        />
        <meta
          property="og:title"
          content={
            pageUrl == data?.metaID ? data?.metaTitle : "Tanzil WorkBase"
          }
        />
        <meta
          property="og:description"
          content={
            data?.metaDescription != null
              ? data?.metaDescription
              : "Meta Description"
          }
        />

        <meta
          property="og:url"
          content={
            pageUrl == data?.metaID
              ? `https://workbase.vercel.app${data?.metaID}`
              : "https://workbase.vercel.app/"
          }
        />
        <meta property="og:site_name" content="Tanzil WorkBase Site Name" />

        {/* Twitter Meta Fields */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content={
            pageUrl == data?.metaID
              ? data?.metaTwitterDescription
              : "Tanzil WorkBase"
          }
        />
        <meta
          name="twitter:title"
          content={
            pageUrl == data?.metaID ? data?.metaTwitterTitle : "Tanzil WorkBase"
          }
        />
      </Head>

      <ClickAwayListener onClickAway={() => {setHeader(null); setShowInput(false)}}>

      <HeaderContainer className="header-container">
        <LeftHeader>
          <NavItem
            active={header === "departments"}
            onClick={() => setHeader("departments")}
          >
            Departments
          </NavItem>
          <NavItem
            active={header === "services"}
            onClick={() => setHeader("services")}
          >
            Services
          </NavItem>
          <NavItem
            active={header === "inspiration"}
            onClick={() => setHeader("inspiration")}
          >
            Inspiration
          </NavItem>
        </LeftHeader>
        
        {header === "departments" && (
          <ExpandHeader className="header-contents">
            <HeaderContent className="checkinggg">
              {departmentTab.map((item, index) => (
                <div key={index}>
                  {item.map((i, index) => (
                    <div key={index}>
                      <Link href={i.mainMenuBtnLink} passHref>
                        <MainMenu onClick={() => setHeader(null)}>
                          {i.mainMenu}
                        </MainMenu>
                      </Link>
                      <NAPButton
                        className="sna_link"
                        type="link"
                        text={i.mainMenuBtnText}
                      />
                      {i?.links?.map((l, index) => (
                        <div key={index}>
                          {l.type === "primary" ? (
                            <Link href={l.link} passHref>
                              <PrimaryLink onClick={() => setHeader(null)}>
                                {l.text}
                              </PrimaryLink>
                            </Link>
                          ) : (
                            <Link href={l.link} passHref>
                              <SecondaryLink onClick={() => setHeader(null)}>
                                {l.text}
                              </SecondaryLink>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
              <div>
                <Link href="/why-buy-from-newage">
                  <Image
                    onClick={() => setHeader(null)}
                    src="/assets/department-1.jpg"
                    className="header-img"
                    alt="dept"
                    height={300}
                    width={300}
                  />
                </Link>
              </div>
            </HeaderContent>
          </ExpandHeader>
        )}
        {header === "services" && (
          <ExpandHeader>
            <HeaderContent className="header-content">
              <div>
                <MainMenu>Garage</MainMenu>
                <SecondaryLink href="/design-services">
                  3D Design Studio
                </SecondaryLink>
                <SecondaryLink>Installation</SecondaryLink>
                <MainMenu>Online Support</MainMenu>
                <SecondaryLink>Videos &amp; Guides</SecondaryLink>
                <SecondaryLink>FAQ</SecondaryLink>
                <MainMenu>Order Support</MainMenu>
                <SecondaryLink>Track Shipping</SecondaryLink>
                <SecondaryLink>Product Replacement</SecondaryLink>
                <SecondaryLink>Warranty Registration</SecondaryLink>
                <SecondaryLink>Return Policy</SecondaryLink>
              </div>
              <div className="services-image-warpper">
                <div>
                  <a href="#">
                    <img
                      src="/assets/header/design.jpg"
                      className="header-img"
                      alt="header-logo"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src="/assets/header/register.jpg"
                      className="header-img"
                      alt="header-logo"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src="/assets/header/support.jpg"
                      className="header-img"
                      alt="header-logo"
                    />
                  </a>
                </div>
              </div>
            </HeaderContent>
          </ExpandHeader>
        )}
        {header === "inspiration" && (
          <ExpandHeader>
            <HeaderContent className="inspiration-tab">
              <div className="image-offers left-image-offers first-component">
                <div className="text-component">
                  <p className="ff-pr">Shop by Spaces.</p>
                  <p className="ff-psb">
                    See our products in
                    <br />
                    unique spaces, and get
                    <br />
                    inspired for your next
                    <br />
                    renovation project.
                  </p>
                </div>
              </div>
              {/*  */}
              <div>
                <img
                  src="/assets/header/inspiration-garage.jpg"
                  className="header-img"
                  alt="header-logoaaa"
                />
                <NAPButton
                  type="link"
                  text="Shop All Garage"
                  url="/all-spaces/residential-improvement/garagesolution"
                />
              </div>
              <div>
                <img
                  src="/assets/header/inspiration-garage.jpg"
                  className="header-img"
                  alt="header-logo"
                />
                <NAPButton
                  type="link"
                  text="Shop All Kitchen"
                  url="/all-spaces/residential-improvement/kitchen-solution"
                />
              </div>
              <div>
                <img
                  src="/assets/header/inspiration-kitchen.jpg"
                  className="header-img"
                  alt="header-logo"
                />
                <NAPButton
                  type="link"
                  text="Shop All Flooring"
                  url="/flooring/residential-flooring/"
                />
              </div>
              <div>
                <img
                  src="/assets/header/inspiration-all.jpg"
                  className="header-img"
                  alt="header-logo"
                />
                <NAPButton
                  type="link"
                  text="Shop All Deals"
                  url="/all-spaces/residential-improvement/"
                />
              </div>
            </HeaderContent>
          </ExpandHeader>
        )}
        {header === "shop" && (
          <ExpandHeader>
            <HeaderContent className="shop-header-content">
              <div className="shop-department">
                <MainMenu>Shop By Department</MainMenu>
                <NAPButton
                  className="sna_link"
                  marginBottom={10}
                  type="link"
                  text="Shop All Offers"
                />

                <SecondaryLink>Garage</SecondaryLink>
                <SecondaryLink>Outdoor</SecondaryLink>
                <SecondaryLink>Kitchen</SecondaryLink>
                <SecondaryLink>Home Bar</SecondaryLink>
                <SecondaryLink>Laundry</SecondaryLink>
                <SecondaryLink>Flooring</SecondaryLink>
                <div className="shop-row-two">
                  <MainMenu>More Ways to Save</MainMenu>
                  <NAPButton
                    marginBottom={10}
                    type="link"
                    text="Buy More Save More"
                  />
                  <br />
                  <NAPButton
                    marginBottom={10}
                    type="link"
                    text="Affirm Financing"
                  />
                  <br />
                  <NAPButton
                    marginBottom={10}
                    type="link"
                    text="Delivery Services"
                  />
                </div>
              </div>
              <div className="offers">
                <div>
                  <img
                    src="/assets/header/main.jpg"
                    className="header-img"
                    alt="header-logo"
                  />
                </div>
                <div className="flex-col">
                  <img
                    src="/assets/header/top-left.jpg"
                    className="header-img"
                    alt="header-logo"
                  />
                  <img
                    src="/assets/header/bottom-left.jpg"
                    className="header-img"
                    alt="header-logo"
                  />
                </div>
                <div className="flex-col">
                  <img
                    src="/assets/header/top-right.jpg"
                    className="header-img"
                    alt="header-logo"
                  />
                  <img
                    src="/assets/header/bottom-right.jpg"
                    className="header-img"
                    alt="header-logo"
                  />
                </div>
              </div>
            </HeaderContent>
          </ExpandHeader>
        )}
      </HeaderContainer>

      </ClickAwayListener>
      <MobileHeader className="mobile-header">
        <MobileContainer className="mobile-header-container">
          <div>
            <MenuIcon
              style={{ color: "#fff" }}
              onClick={() => setDrawer(true)}
            />
          </div>
          <MobileLogo>
            {/* <img src="/assets/logo-white.svg" alt="logo" /> */}
          </MobileLogo>
          <div />
        </MobileContainer>
        <StyledDrawer
          anchor="left"
          closable={false}
          onClose={() => setDrawer(false)}
          open={drawer}
        >
          <DrawerContainer className="drawer-container">
            <DrawerHeader className="drawer-header">
              <div>
                <CloseIcon
                  style={{ color: "#fff", fontSize: "20px" }}
                  onClick={() => setDrawer(false)}
                />
              </div>
              <MobileLogo>
                {/* <img src="/assets/logo-white.svg" alt="logo" /> */}
              </MobileLogo>
              <div />
            </DrawerHeader>
            <DrawerContent className="drawer-content">
              <Accordion expandIconPosition="right">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Departments
                </AccordionSummary>
                <AccordionDetails header="Departments" key="1">
                  <Accordion expandIconPosition="right">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Garage
                    </AccordionSummary>
                    <AccordionDetails>
                      <MobileDrawerLink>Garage</MobileDrawerLink>
                      <MobileDrawerLink>Shop All Garage</MobileDrawerLink>
                      <MobileDrawerLink>Storage Cabinets</MobileDrawerLink>
                      <MobileDrawerLink>Pro Series</MobileDrawerLink>
                      <MobileDrawerLink>Bold Series</MobileDrawerLink>
                      <MobileDrawerLink>Racks and Shelving</MobileDrawerLink>
                      <MobileDrawerLink>Wall Mounted Shelving</MobileDrawerLink>
                      <MobileDrawerLink>Wall Mounted Racks</MobileDrawerLink>
                      <MobileDrawerLink>
                        Slatwall &amp; Accessories
                      </MobileDrawerLink>
                      <MobileDrawerLink>PVC Slatwall</MobileDrawerLink>
                      <MobileDrawerLink>Linkable Shop Lights</MobileDrawerLink>
                      <MobileDrawerLink>Cabinets Lights</MobileDrawerLink>
                      <MobileDrawerLink>Garage Flooring</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Outdoor
                    </AccordionSummary>
                    <AccordionDetails>
                      <MobileDrawerLink>Outdoor</MobileDrawerLink>
                      <MobileDrawerLink>Shop All Outdoor</MobileDrawerLink>
                      <MobileDrawerLink>Kitchen Cabinets</MobileDrawerLink>
                      <MobileDrawerLink>Countertops</MobileDrawerLink>
                      <MobileDrawerLink>
                        Stainless Steel Collection
                      </MobileDrawerLink>
                      <MobileDrawerLink>Aluminum Collection</MobileDrawerLink>
                      <MobileDrawerLink>Cooking Appliances</MobileDrawerLink>
                      <MobileDrawerLink>Grills</MobileDrawerLink>
                      <MobileDrawerLink>Dual Side Burners</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Kitchen
                    </AccordionSummary>
                    <AccordionDetails header="Kitchen" key="4">
                      <MobileDrawerLink>Kitchen</MobileDrawerLink>
                      <MobileDrawerLink>Shop All Kitchen</MobileDrawerLink>
                      <MobileDrawerLink>Cabinets</MobileDrawerLink>
                      <MobileDrawerLink>Sinks</MobileDrawerLink>
                      <MobileDrawerLink>Faucets</MobileDrawerLink>
                      <MobileDrawerLink>Granite Countertops</MobileDrawerLink>
                      <MobileDrawerLink>Backsplash</MobileDrawerLink>
                      <MobileDrawerLink>Cabinets Hardware</MobileDrawerLink>
                      <MobileDrawerLink>Millwork</MobileDrawerLink>
                      <MobileDrawerLink>Cabinets Organization</MobileDrawerLink>
                      <MobileDrawerLink>Lighting</MobileDrawerLink>
                      <MobileDrawerLink>Flooring</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Home Bar
                    </AccordionSummary>
                    <AccordionDetails header="Home Bar" key="5">
                      <MobileDrawerLink>Home Bar</MobileDrawerLink>
                      <MobileDrawerLink>Shop All Home Bar</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Laundry
                    </AccordionSummary>
                    <AccordionDetails header="Laundry" key="6">
                      <MobileDrawerLink>Laundry</MobileDrawerLink>
                      <MobileDrawerLink>Shop All Laundry</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Flooring
                    </AccordionSummary>
                    <AccordionDetails header="Flooring" key="7">
                      <MobileDrawerLink>Flooring</MobileDrawerLink>
                      <MobileDrawerLink>Shop All Flooring</MobileDrawerLink>
                      <MobileDrawerLink>Luxury Vinyl Plank</MobileDrawerLink>
                      <MobileDrawerLink>Luxury Vinyl Tile</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Services
                </AccordionSummary>
                <AccordionDetails>
                  <MobileDrawerLink>Our Services</MobileDrawerLink>
                  <MobileDrawerLink>Online Support</MobileDrawerLink>
                  <MobileDrawerLink>Order Support</MobileDrawerLink>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Inspiration
                </AccordionSummary>
                <AccordionDetails>
                  <MobileDrawerLink>Garage</MobileDrawerLink>
                  <MobileDrawerLink>Kitchen</MobileDrawerLink>
                  <MobileDrawerLink>Flooring</MobileDrawerLink>
                  <MobileDrawerLink>See All Spaces</MobileDrawerLink>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Shop
                </AccordionSummary>
                <AccordionDetails>
                  <Accordion>
                    <AccordionSummary>Shop By Department</AccordionSummary>
                    <AccordionDetails>
                      <MobileDrawerLink>Shop All Offers</MobileDrawerLink>
                      <MobileDrawerLink>Garage</MobileDrawerLink>
                      <MobileDrawerLink>Outdoor</MobileDrawerLink>
                      <MobileDrawerLink>Kitchen</MobileDrawerLink>
                      <MobileDrawerLink>Home Bar</MobileDrawerLink>
                      <MobileDrawerLink>Laundry</MobileDrawerLink>
                      <MobileDrawerLink>Flooring</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary>More Ways to Save</AccordionSummary>
                    <AccordionDetails>
                      <MobileDrawerLink>Buy More Save More</MobileDrawerLink>
                      <MobileDrawerLink>Affirm Financing</MobileDrawerLink>
                      <MobileDrawerLink>Delivery Services</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary>NewAge Deals</AccordionSummary>
                    <AccordionDetails>
                      <MobileDrawerLink>
                        Organization Month Sale
                      </MobileDrawerLink>
                      <MobileDrawerLink>Deal of the Week</MobileDrawerLink>
                      <MobileDrawerLink>Delivery Services</MobileDrawerLink>
                      <MobileDrawerLink>Buy More Save More</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
            </DrawerContent>
          </DrawerContainer>
        </StyledDrawer>
      </MobileHeader>
    </>
  );
}

export default Header;
