import styled from "styled-components";

import { useState, useEffect } from "react";
import Garage from "./menuList/Garage";
import Outdoor from "./menuList/Outdoor";
import Kitchen from "./menuList/Kitchen";
import Home from "./menuList/Home";

import Flooring from "./menuList/Flooring";
import Sale from "./menuList/Sale";
import Services from "./menuList/Services";
import WhatsNew from "./menuList/WhatsNew";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Head from "next/head";

import MobileMenuCTAIcon from "./menuCta/MobileMenuCTAIcon";
import { SearchIconDiv } from "@components/MegaMenu/BlackBar";
import CountryToggler from "@components/MegaMenu/CountryToggler";
import HeroBanner from "@components/HeroBanner";
import { DefaultButton } from "@components/CommonComponents";
import InputField from "@components/NAPFormComponents/InputField";
import { CircularProgress } from "@material-ui/core";
import Script from "next/script";

// Outer most container
const MenuContainer = styled.div`
  width: 100%;
  z-index: 99;
  transition-timing-function: ease-in;
  position: fixed;
  transition: 0.5s;
  .ds-flex-mobile-menu {
    display: flex;
    justify-content: space-between;
  }
  /* .search-icon img {
		position: absolute;
		top: unset;
		right: 25px;
		z-index: 5;
		bottom: 16px;
	} */
  .search-icon {
    position: absolute;
    right: 20px;
    z-index: 4;
    top: 15px;
  }
  .menu-color {
    position: relative;
    background-color: #3e4148;
    padding: 0 10px;
    align-items: center;
    height: 60px;

    > div:first-child {
      color: #fff;
      position: relative;
      /* width: 100px; */
      width: 150px;
      top: unset;
      left: 40px;
      display: flex;
      align-items: center;
      height: auto;
    }
    .search-field {
      /* width: 100%; */
      top: 10px;
      left: 0;
      /* z-index: 3; */
      z-index: 5;
      /* background-color: #3e4148; */
      background-color: transparent;
      padding: 10px;
      position: absolute !important;
      left: unset;
      right: 10px;
      .search-root,
      .search-input {
        /* width: 100%; */
      }
      .search-input {
        color: #000;
      }
      /* background-image: url(/assets/main-search.png) !important;
			background-repeat: no-repeat;
			background-position: center right; */
      width: 50px;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #fff;
      border-radius: 4px;
      font-size: 16px;
      padding: 0;
      -webkit-transition: width 0.4s ease-out-in;
      transition: width 0.4s ease-in-out;
      padding: 0 30px 0 10px;
      :focus {
        /* width: 100%; */
        width: 92%;
        background: #fff;
        z-index: 30;
        padding: 0 15px;
        background-repeat: no-repeat;
      }
    }
    .search-icon:focus ~ input,
    .search-icon:hover ~ input {
      width: 92% !important;
      background: #fff !important;
    }
  }
  .zipbox-outer {
    position: absolute;
    width: 230px;
    left: 40px;
    top: 0px;
    z-index: 11;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    display: flex;
    height: 36px;
    align-items: center;
    cursor: pointer;
    &:before {
      content: "\f041";
      font-family: FontAwesome;
      position: absolute;
      left: -24px;
      font-size: 15px;
    }
    .zipbox {
      width: 100%;
      text-align: left;
    }
  }

  .fixedBar {
    position: fixed;
  }
  .slideBar {
    position: absolute;
  }

  .side-bar {
    max-width: 320px;
    width: 100%;
    /* position: absolute; */
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #fff;
    transition: 0.6s;
    display: flex;
    flex-direction: column;
    z-index: 15;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    /* justify-content: space-between; */
    /* padding: 30px 0; */
    padding-bottom: 40px;
    .side-bar-header {
      height: 60px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 0;
      .cancel {
        position: absolute;
        /* height: 35px; */
        left: 15px;

        img {
          height: 100%;
        }
      }
    }
  }
  .hide {
    left: -100%;
  }
  .menu-list-box {
    width: 100%;
    /* margin-top: 15px; */
    /* padding: 0 20px; */
  }
  .black-block {
    width: 100%;
    background-color: #000;
    /* height: 600px; */
    height: 100%;
    padding: 20px 20px;
    .MenuCtaHeaderWrapper {
      color: #fff;
    }
  }
  #zipcode-menu {
    background: #000;
  }

  .menu-name {
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    padding-left: 35px;
    padding-right: 20px;
    /* justify-content: center; */
    align-items: center;
    /* font-family: 'ProximaNova Semi Bold'; */
    font-family: "ProximaNova Bold";
    letter-spacing: 0.5px;
    height: 50px;
    transition: 0.5s;
    position: relative;
    .spacer {
      flex: 1;
    }
    .left-img {
      margin-right: 10px;
    }
  }
  /* .menu-list-box .child-wrapper:first-child .menu-name {
		border-top: 1px solid #cccccc40;
		border-bottom: 1px solid #ccc;
	} */
  .menu-name.shop-cta {
    color: #0072bc;
  }
  .menu-name.greyLink {
    background-color: #f5f6f6;
  }
  .menu-name.sale-menu {
    color: red;
  }
  /* .child-wrapper .menu-name:after {
		content: "\f054";
		font-family: FontAwesome;
		position: absolute;
		left: unset;
		right: 15px;
		font-size: 11px;
		font-weight: 100;
	} */
  /* .child-back:before {
		content: "\f054";
		font-family: FontAwesome;
		position: absolute;
		top: 35%;
		left: 15px;
		right: unset;
		font-size: 11px;
		font-weight: 100;
		transform: rotate(180deg);
	} */
  .child-back.menu-name {
    background-color: #f5f6f6;
    justify-content: flex-start;
  }
  .black {
    background: #000;
    color: #fff;
    font-size: 22px;
  }
  .back-to-menu {
    padding-left: 15px;
    font-size: 18px;
  }

  .back-drop-zip {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgb(0 0 0 / 35%);
    transition: 0.6s;
    z-index: 3;
  }
`;

// Top Black Bar Menu style components
const Div = styled.div`
  /* position: sticky; */
  position: relative;
  height: 50px;
  display: flex;
  background-color: #000;
  align-items: center;
  justify-content: center;
  .cart-img {
    display: block;
    width: auto;
    justify-content: center;
    text-align: center;
    .menu-icons {
      width: 50%;
    }
  }
  .menu-bar {
    position: absolute;
    height: 30px;
    left: 15px;

    img {
      height: 100%;
    }
  }
  .logo-img-box {
    width: 130px;
    img {
      width: 100%;
    }
  }

  .mobile-CountryToggler {
    top: 9px;
    /* .flag-box {
			background-color: #000000;
			border: 0;
		}
		span {
			display: none;
		} */
  }
  .back-drop-zip {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: rgb(0 0 0 / 21%);
    transition: 0.6s;
    z-index: 1;
  }
`;

// Default Search icon
const ThisSearchIconDiv = styled(SearchIconDiv)`
  background-color: #f5f6f6;
  padding: 10px;
  .search-root,
  .search-input {
    width: 100%;
  }
  .search-input {
    color: #000;
  }
`;

// Menu Datas
const mobMenuItems = [
  {
    name: "Garage",
    child: [
      {
        name: "Garage Cabinets",
        child: [
          {
            name: "Garage Cabinets",
            url: "/ca/garage-storage-cabinets/",
            shop: true,
          },
          {
            name: "Pro Series",
            url: "/ca/garage-storage-cabinets-pro-3-0-series/",
          },
          {
            name: "Bold Series",
            url: "/ca/garage-storage-cabinets-bold-3-0-series/",
          },
        ],
      },
      {
        name: "Racks & Shelving",
        child: [
          {
            name: "Racks & Shelving",
            url: "/ca/shelves-and-off-the-floor-storage/",
            shop: true,
          },
          {
            name: "Overhead Racks",
            url: "/ca/garage-storage-overhead-racks/",
          },
          {
            name: "Wall Mounted Steel Shelves",
            url: "/ca/pro-series-wall-mounted-steel-shelves/",
          },
          {
            name: "Wall Mounted Racks",
            url: "/ca/wall-mounted-racks/",
          },
        ],
      },
      {
        name: "Slatwall & Accessories",
        url: "/ca/wall-organization/",
        shop: true,

        // child: [
        // 	{
        // 		name: 'Shop Slatwall & Accessories',
        // 		url: "#",
        // 		shop: true,
        // 	},
        // 	{
        // 		name: 'PVC Slatwall',
        // 		url: '/slatwall/pvc-slatwall/',
        // 	},
        // 	{
        // 		name: 'Steel Slatwall',
        // 		url: '/slatwall/steel-slatwall/',
        // 	},
        // 	{
        // 		name: 'Slatwall Backsplash',
        // 		url: '/slatwall/steel-slatwall-backsplash/',
        // 	},
        // 	{
        // 		name: 'Slatwall Accessories',
        // 		url: '/slatwall/slatwall-accessories/',
        // 	},
        // ],
      },
      {
        name: "Workbench Solutions",
        url: "/ca/garage-storage-organization-solutions/workbenches/",
        shop: true,
      },
      {
        name: "Lighting",
        url: "/ca/linkable-shop-lights/",
        shop: true,
      },
      {
        name: "Garage Flooring",
        url: "/ca/flooring/residential-spaces/garage-spaces/",
        shop: true,
      },
      // {
      // 	name: 'Garage Accessories',
      // 	child: [
      // 		// {
      // 		// 	name: 'Shop Garage Accessories',
      // 		// 	url: "#",
      // 		// 	shop: +true,
      // 		// },
      // 		{
      // 			name: 'Linkable LED Shop Lights',
      // 			url: '/garage-storage-organization-solutions/garage-accessories/linkable-shop-lights/',
      // 		},
      // 		{
      // 			name: 'Cabinet LED Lights',
      // 			url: 'https://shopnewage.com/collections/cabinet-lighting/',
      // 		},
      // 		{
      // 			name: 'Infrared Heater',
      // 			url: '/garage-storage-organization-solutions/garage-accessories/infrared-heater/',
      // 		},
      // 	],
      // },
      // {
      // 	name: 'Garage Flooring',
      // 	url: '/flooring/residential-spaces/garage-spaces/',
      // },

      // {
      // 	name: 'Popular Search Terms',
      // 	child: [
      // 		{
      // 			name: 'Utility Cabinets',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Project Center',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Sink Cabinets',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Locker Cabinets',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Base Cabinets',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Wall Cabinets',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Multi-Use Cabinets',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Mobile Lockers',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Carts',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Workbenches',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Worktops',
      // 			url: '#',
      // 		},
      // 		{
      // 			name: 'Shop All Garage',
      // 			url: '#',
      // 		},
      // 	],
      // },

      {
        name: "Support Hub",
        greyLink: true,
        url: "/ca/support-hub/",
      },
      {
        name: "Garage Planning Guide",
        greyLink: true,
        url: "https://drive.google.com/file/d/1pUU6Vond7HnqaWS6Ty33zUy2oIwlSl6p/view",
      },

      {
        name: "Design Services",
        greyLink: true,
        url: "/ca/design-services/",
      },
    ],
  },
  {
    name: "Outdoor",
    child: [
      {
        name: "Outdoor Cabinets",
        child: [
          {
            name: "Outdoor Cabinets",
            url: "/ca/outdoor-kitchen-cabinets/",
            shop: true,
          },
          {
            name: "Classic Stainless Steel Cabinets",
            url: "/ca/outdoor-kitchen-cabinets-stainless-steel/",
          },
          {
            name: "Classic Aluminum Cabinets",
            url: "/ca/outdoor-kitchen-cabinets-aluminum/",
          },
        ],
      },
      {
        name: "Grills & Appliances",
        child: [
          {
            name: "Grills & Appliances",
            url: "/ca/outdoor-kitchen-grills/",
            shop: true,
          },
          {
            name: "Gas Grills",
            url: "/ca/outdoor-kitchen-grills#learn-more1",
          },

          {
            name: "Side Burners",
            url: "/ca/outdoor-kitchen-grills#dual-side-burners",
          },
        ],
      },

      {
        name: "Support Hub",
        greyLink: true,
        url: "/ca/support-hub/",
      },

      {
        name: "Design Services",
        greyLink: true,
        url: "/ca/design-services/",
      },
    ],
  },
  {
    name: "Flooring",
    child: [
      {
        name: "Flooring",
        url: "/ca/flooring/",
        // shop: true,
      },
      {
        name: "Luxury Vinyl Plank",
        url: "/ca/flooring/luxury-vinyl-plank/",
      },
      {
        name: "Luxury Vinyl Tile",
        url: "/ca/flooring/luxury-vinyl-tiles/",
      },
      {
        name: "Room Visualizer",
        url: "javascript: roomvo.startStandaloneVisualizer();",
        shop: true,
      },
      // child: [
      //   {
      //     name: "Flooring!",
      //     url: "/ca/flooring/",
      //     shop: true,
      //   },
      //   {
      //     name: "Luxury Vinyl Plank",
      //     url: "/ca/flooring/luxury-vinyl-plank/",
      //   },
      //   {
      //     name: "Luxury Vinyl Tile",
      //     url: "/ca/flooring/luxury-vinyl-tiles/",
      //   },
      //   {
      //     name: "Room Visualizer",
      //     url: "javascript: roomvo.startStandaloneVisualizer();",
      //     shop: true,
      //   },
      // ],
      // },
      // {
      //   name: "Room Visualizer",
      //   url: "javascript: roomvo.startStandaloneVisualizer();",
      // },
    ],
  },
  {
    name: "SALE",
    child: [
      {
        name: "XX% on Garage",
        url: "#",
      },
      {
        name: "Week XX% Off",
        url: "#",
      },
      {
        name: "Last Chance Deals",
        url: "#",
      },
    ],
  },
  {
    name: "Services",
    child: [
      // {
      // 	name: 'Measuring Services',
      // 	url: '#',
      // },
      {
        name: "Free 3D Design Consultation",
        url: "/ca/design-services/",
      },
      {
        name: "Professional Installation",
        url: "/ca/installation-services/",
      },
    ],
  },
];

// Black Bar component
function TopMobileMenu({
  menuToggle,
  setMenuToggle,
  slideClass,
  setActiveMenu,
  setHistory,
}) {
  return (
    <Div>
      <Script src="https://www.roomvo.com/static/scripts/b2b/newageproducts.js"></Script>

      <div className="menu-bar" onClick={() => setMenuToggle(true)}>
        <img src="/assets/mega-menu/menu-bar.PNG" alt="" />
      </div>

      <div className="logo-img-box">
        <a href="/ca/">
          <img src="/assets/mega-menu/nap-logo-mobile.PNG" alt="" />
        </a>
      </div>
      {menuToggle && (
        <div
          className="back-drop hello"
          onClick={() => {
            setMenuToggle(false);
            setActiveMenu(mobMenuItems);
            setHistory([]);
          }}
        ></div>
      )}

      <div className="cart-img">
        <a href="https://shopnewage.com/cart/">
          <img src="/assets/mega-menu/cart.jpg" alt="" className="menu-icons" />
        </a>
      </div>

      <CountryToggler className="mobile-CountryToggler" />
    </Div>
  );
}

function index({
  n,
  setN,

  loading,
  setLoading,
}) {
  const [menuMob, setMenuMob] = useState("home");
  const [menuToggle, setMenuToggle] = useState(false);

  const [activeMenu, setActiveMenu] = useState(mobMenuItems);
  const [history, setHistory] = useStaِte([]);

  // useEffect(() => {
  // 	let yPrev = 0;
  // 	window.addEventListener('scroll', (e) => {
  // 		let y = window.scrollY;
  // 		if (yPrev < y) {
  // 			console.log('Scrolled Down');
  // 		} else {
  // 			console.log('Scrolled up');
  // 		}
  // 		yPrev = y;
  // 	});
  // }, []);

  const handleMenuItemClick = (target) => {
    setHistory([...history, target]);
    setActiveMenu(target.child);
  };
  const handleBackClick = () => {
    let tempHistory = history;
    tempHistory.pop();
    let item = tempHistory[tempHistory.length - 1];
    tempHistory.length
      ? setActiveMenu(item.child)
      : setActiveMenu(mobMenuItems);
  };
  return (
    <>
      <Head>
        
      </Head>
      <div>
        {/* <div onClick={() => setMenuToggle(false)} className="back-drop"></div> */}

        <div>
          <MenuContainer className="outer-menu-container">
            {/* Toggle SideBar Icon, Logo, Flag */}
            <TopMobileMenu
              menuToggle={menuToggle}
              setMenuToggle={setMenuToggle}
              // slideClass ={"fixedBar"}
              slideClass={"slideBar"}
              setActiveMenu={setActiveMenu}
              setHistory={setHistory}
            />
            <div className="ds-flex-mobile-menu menu-color">
              {/* ZipCode */}

              {/* Search Feature */}
              <span className="search-icon">
                <img src="/assets/ss.jpg" alt="" />
              </span>

              {/* Search Field */}
              <form
                role="search"
                method="get"
                className="usu search-form blog-id-is-1"
                action="https://shopnewage.com/collections/search-results"
              >
                <input
                  // className="search-field"
                  style={{ position: "relative" }}
                  type="text"
                  type="search"
                  id=""
                  className="search-field search__inputs input"
                  placeholder="e.g Outdoor Kitchen"
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                  name="q"
                />
              </form>
            </div>

            {/* Side Bar */}
            <div
              className="side-bar"
              className={menuToggle ? "side-bar" : "side-bar hide"}
            >
              <div className="side-bar-header" className="side-bar-header">
                <div
                  className="cancel"
                  onClick={() => {
                    setMenuToggle(false);
                    setActiveMenu(mobMenuItems);
                    setHistory([]);
                  }}
                >
                  <img src="/assets/mega-menu/cancel.PNG" alt="" />
                </div>
                <div className="logo-img-box">
                  <a href="/ca/">
                    <img src="/assets/mega-menu/nap-white-back.PNG" alt="" />
                  </a>
                </div>
              </div>
              {/* <div className="menu-list-box">
							<Garage />
							<Outdoor />
							<Kitchen />
							<Home />
							<Flooring />
							<Sale />
							<Services />
							<WhatsNew />
							</div> */}
              <div className="menu-list-box">
                {history.length > 0 && (
                  <>
                    <div
                      className="menu-name child-back"
                      onClick={() => handleBackClick()}
                    >
                      {history.length == 1 ? (
                        <>
                          <img
                            src="/assets/mega-menu/left-trans.png"
                            alt=""
                          ></img>
                          <h3 className="back-to-menu">Back to main menu</h3>
                        </>
                      ) : (
                        <>
                          {" "}
                          <img
                            src="/assets/mega-menu/left-trans.png"
                            alt=""
                          ></img>
                          <h3 className="back-to-menu">
                            Back to {history[history.length - 2].name}
                            {/* Back to {history[history.length - 0].name} */}
                          </h3>
                        </>
                      )}
                    </div>
                    <div className="menu-name black">
                      {history[history.length - 1].name}
                    </div>
                  </>
                )}
                {activeMenu.map((item) => (
                  <div className="child-wrapper">
                    {/* checking if our data has url object, if yes then add <a> tag else no <a> tag only title */}
                    {item.url != null ? (
                      <a href={item.url}>
                        <div
                          className={
                            item.shop == true
                              ? "menu-name shop-cta"
                              : item.greyLink == true
                              ? "menu-name greyLink"
                              : "menu-name"
                          }
                          // onClick={() => handleMenuItemClick(item)}
                        >
                          {item.name}
                          {/* {item.shop == true ? (
                            <img className="testing"
                              src="/assets/mega-menu/next.png"
                              alt=""
                            />
                          ) : (
                            <img className="testing" src="/assets/mega-menu/next.png" alt="testing" />
                          )} */}
                          {item.shop == true ? (
                            <img
                              src="/assets/mega-menu/right-active.PNG"
                              alt=""
                            />
                          ) : item.greyLink == true ? (
                            <img
                              src="/assets/mega-menu/right-gray.png"
                              alt=""
                            />
                          ) : (
                            <img src="/assets/mega-menu/right.PNG" alt="" />
                          )}
                        </div>
                      </a>
                    ) : // if data has NO url object then coming to this condition where no <a> tag will be there for TITLE
                    // also checking if data has name object as "SALE" to manipulate "SALE" as Red color and
                    // last part is default like for Outdoor, Kitchen, Home, Flooring
                    item.name == "SALE" ? (
                      <div
                        className="menu-name sale-menu"
                        onClick={() => handleMenuItemClick(item)}
                      >
                        {item.name}{" "}
                        <img src="/assets/mega-menu/right.PNG" alt="" />
                      </div>
                    ) : (
                      <div
                        className="menu-name"
                        onClick={() => handleMenuItemClick(item)}
                      >
                        {item.name}{" "}
                        <img src="/assets/mega-menu/right.PNG" alt="" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Black Section only visible Home Menu */}
                {history.length == 0 && (
                  <div className="black-block">
                    <MobileMenuCTAIcon
                      text="My Account"
                      url="https://ca.shopnewage.com/account/login/"
                      iconImg=" /assets/mega-menu/1.PNG"
                    />
                    <MobileMenuCTAIcon
                      text="Order Status"
                      url="/ca/track-shipment/"
                      iconImg=""
                      iconImg=" /assets/mega-menu/3.PNG"
                    />
                    <MobileMenuCTAIcon
                      text="Trade"
                      url="/ca/trade-program-hub/"
                      iconImg=""
                      iconImg=" /assets/mega-menu/5.PNG"
                    />
                  </div>
                )}
              </div>
            </div>
            
          </MenuContainer>
        </div>
      </div>
    </>
  );
}

export default index;
