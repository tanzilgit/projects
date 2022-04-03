/* eslint-disable @next/next/no-img-element */
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

const MainHeaderWrapper = styled.div`
  .logo-wrapper {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    background: #000;
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

const NavWrapper = styled.div`
  display: flex;
  background: #000000d6;
  justify-content: center;
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
  justify-content: center;
  align-items: center;
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

  @media (max-width: 1300px) {
    .inspiration-tab {
      grid-gap: 5px;
      width: 940px;
    }
    .inspiration-tab > div {
      height: 105px;
      width: 180px;
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
  width: 100%;
  /* padding: 0 20px; */
  justify-content: space-around;
  /* @media (max-width: 1450px) {
    width: 35%;
  } */
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
  color: #fff;
  border: 1px solid #292929;

  ${(props) => props.active && "background: #ff0000ba;"}
  &:hover {
    /* background: #ebebeb; */
    background: transparent;
    border: 1px solid red;
  }
  + {
    margin-left: 10px;
  }
`;
const ExpandHeader = styled.div`
  position: absolute;
  padding: 20px;
  top: 0;
  /* margin-top: 93px; */
  margin-top: 74px;
  background-color: #fff;
  /* width: 100%; */
  width: auto;
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); */
  box-shadow: -3px 5px 25px rgb(0 0 0 / 50%);
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
    /* Menu 2 Tab */
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
      mainMenu: "Main Category 1",
      mainMenuBtnText: "Shop Category",
      mainMenuBtnLink: "#",
      links: [
        {
          category: "Main Category 1",
          text: "Sub Category 1",
          link: "#",
          type: "primary",
        },
        {
          category: "Main Category 1",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 1",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 1",
          text: "Sub Category 2",
          link: "#",
          type: "primary",
        },
        {
          category: "Main Category 1",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 1",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 1",
          text: "Sub Category 3",
          link: "#",
          type: "primary",
        },
        {
          category: "Main Category 1",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 1",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 1",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },

        {
          category: "Main Category 1",
          text: "Sub Category 4",
          link: "#",
          type: "primary",
        },
      ],
    },
  ],
  [
    {
      mainMenu: "Main Category 2",
      mainMenuBtnText: "Shop Category",
      mainMenuBtnLink: "#",
      links: [
        {
          category: "Main Category 2",
          text: "Sub Category 1",
          link: "#",
          type: "primary",
        },
        {
          category: "Main Category 2",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 2",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 2",
          text: "Sub Category 2",
          link: "#",
          type: "primary",
        },
        {
          category: "Main Category 2",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 2",
          text: "Basic Name",
          link: "#",
          type: "secondary",
        },
      ],
    },
  ],
  [
    {
      mainMenu: "Main Category 3",
      mainMenuBtnLink: "#",
      mainMenuBtnText: "Shop Main Category 3",
      links: [
        {
          category: "Main Category 3",
          text: "Sub Category 1",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 3",
          text: "Sub Category 2",
          link: "#",
          type: "secondary",
        },
      ],
    },
    {
      mainMenu: "Main Category 4",
      mainMenuBtnLink: "#",
      mainMenuBtnText: "Shop Main Category 4",
    },
    {
      mainMenu: "Main Category 5",
      mainMenuBtnLink: "#",
      mainMenuBtnText: "Shop Main Category 5",
      links: [
        {
          category: "Main Category 5",
          text: "Sub Category",
          link: "#",
          type: "secondary",
        },
        {
          category: "Main Category 5",
          text: "Sub Category",
          link: "#",
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
    <MainHeaderWrapper>
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
      <ClickAwayListener
        onClickAway={() => {
          setHeader(null);
          setShowInput(false);
        }}
      >
        <NavWrapper className="NavWrapper">
          <HeaderContainer className="header-container">
            <LeftHeader>
              <NavItem
                active={header === "departments"}
                onClick={() => setHeader("departments")}
              >
                Menu 1
              </NavItem>
              <NavItem
                active={header === "services"}
                onClick={() => setHeader("services")}
              >
                Menu 2
              </NavItem>
              <NavItem
                active={header === "inspiration"}
                onClick={() => setHeader("inspiration")}
              >
                Image Menu
              </NavItem>

              <NavItem>
                <Link href="/fetch/">
                  <a>Basic API Fetch</a>
                </Link>
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
                                  <SecondaryLink
                                    onClick={() => setHeader(null)}
                                  >
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
                        src="/assets/category-image.jpg"
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
                    <MainMenu>Other Category 1</MainMenu>
                    <SecondaryLink href="#">Sub Category</SecondaryLink>
                    <SecondaryLink>Sub Category</SecondaryLink>
                    <MainMenu>Other Category 2</MainMenu>
                    <SecondaryLink>Sub Category</SecondaryLink>
                    <SecondaryLink>Sub Category</SecondaryLink>
                    <MainMenu>Other Category 3</MainMenu>
                    <SecondaryLink>Sub Category</SecondaryLink>
                    <SecondaryLink>Sub Category</SecondaryLink>
                    <SecondaryLink>Sub Category</SecondaryLink>
                    <SecondaryLink>Sub Category</SecondaryLink>
                  </div>
                  <div className="services-image-warpper">
                    <div>
                      <a href="#">
                        <img
                          src="/assets/category-image-others.jpg"
                          className="header-img"
                          alt="Tanzil Header"
                        />
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <img
                          src="/assets/category-image-others.jpg"
                          className="header-img"
                          alt="Tanzil Header"
                        />
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <img
                          src="/assets/category-image-others.jpg"
                          className="header-img"
                          alt="Tanzil Header"
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
                  {/*  */}
                  <div>
                    <img
                      src="/assets/menu-image.jpg"
                      className="header-img"
                      alt="Tanzil Header"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/menu-image.jpg"
                      className="header-img"
                      alt="Tanzil Header"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/menu-image.jpg"
                      className="header-img"
                      alt="Tanzil Header"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/menu-image.jpg"
                      className="header-img"
                      alt="Tanzil Header"
                    />
                  </div>
                </HeaderContent>
              </ExpandHeader>
            )}
          </HeaderContainer>
        </NavWrapper>
      </ClickAwayListener>
      <MobileHeader className="mobile-header">
        <MobileContainer className="mobile-header-container">
          <div>
            <MenuIcon
              style={{ color: "#fff" }}
              onClick={() => setDrawer(true)}
            />
          </div>
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
                  Menu 1
                </AccordionSummary>
                <AccordionDetails header="Menu 1" key="1">
                  <Accordion expandIconPosition="right">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Main Category 1
                    </AccordionSummary>
                    <AccordionDetails>
                      <MobileDrawerLink>Basic Name</MobileDrawerLink>
                      <MobileDrawerLink>Basic Name</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Main Category 2
                    </AccordionSummary>
                    <AccordionDetails>
                      <MobileDrawerLink>Basic Name</MobileDrawerLink>
                      <MobileDrawerLink>Basic Name</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Main Category 3
                    </AccordionSummary>
                    <AccordionDetails header="Kitchen" key="4">
                      <MobileDrawerLink>Basic Name</MobileDrawerLink>
                      <MobileDrawerLink>Basic Name</MobileDrawerLink>
                      <MobileDrawerLink>Basic Name</MobileDrawerLink>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Main Category 4
                    </AccordionSummary>
                    <AccordionDetails header="Home Bar" key="5">
                      <MobileDrawerLink>Basic Name</MobileDrawerLink>
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
                  Menu 2
                </AccordionSummary>
                <AccordionDetails>
                  <MobileDrawerLink>Other Category 1</MobileDrawerLink>
                  <MobileDrawerLink>Other Category 2</MobileDrawerLink>
                  <MobileDrawerLink>Other Category 3</MobileDrawerLink>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Menu 3
                </AccordionSummary>
                <AccordionDetails>
                  <MobileDrawerLink>Menu Image Link 1</MobileDrawerLink>
                  <MobileDrawerLink>Menu Image Link 2</MobileDrawerLink>
                  <MobileDrawerLink>Menu Image Link 3</MobileDrawerLink>
                </AccordionDetails>
              </Accordion>
            </DrawerContent>
          </DrawerContainer>
        </StyledDrawer>
      </MobileHeader>
    </MainHeaderWrapper>
  );
}

export default Header;
