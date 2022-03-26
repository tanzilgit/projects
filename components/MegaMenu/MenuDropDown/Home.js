/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import device from '../../../utils/mediaUtils';

import MegaCtaInActive from '../MegaCtas/MegaCtaInActive';
import MegaCtaSimple from '../MegaCtas/MegaCtaSimple';
import MenuCtaHeader from '../MegaCtas/MenuCtaHeader';
import MenuCtaSubLink from '../MegaCtas/MenuCtaSubLink';

const Div = styled.div`
	position: absolute;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
		0 1px 5px 0 rgb(0 0 0 / 20%);
	top: 0;
	left: 500px;
	background-color: #fff;
	padding: 20px;
	width: auto;
	display: flex;
	${device.desktop} {
		/* width: 980px; */
		/* left: 380px; */
		left: 280px;
	}
	${device.laptopL} {
		/* width: 800px; */
		left: 130px;
	}
`;

function Home() {
	return (
		<Div className="home-header-main ds-flex">
			<div className="ds-flex left-menu">
				<div className="first-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader text="Bar Cabinets" url="/home-bar-cabinets/" />
						<MenuCtaSubLink
							text="21” Home Bar Solutions"
							url="/home-bar-cabinets/21in-home-bar-cabinets/"
						/>
						<MenuCtaSubLink
							text="24” Home Bar Solutions"
							url="/home-bar-cabinets/24in-home-bar-cabinets/"
						/>
					</div>

					<div className="menu-separator">
						<MenuCtaHeader text="Laundry" url="/laundry-room-cabinets/" />
						<MenuCtaSubLink
							text="Laundry Cabinets"
							url="https://shopnewage.com/collections/laundry"
						/>
						<MenuCtaSubLink
							text="Laundry Sets"
							url="https://shopnewage.com/collections/laundry-sets/"
						/>
					</div>

					<div className="menu-separator">
						{/* <MenuCtaHeader text="Natural Stone" url="#" /> */}
						{/* <MenuCtaSubLink text="Natural Stacked Stone Assortment" url="#" /> */}
					</div>
				</div>
				{/*  */}

				<div className="second-col main-col img-col">
					<div className="menu-separator">
						<a href="#">
							<img
								src="/assets/mega-menu/home.PNG"
								alt=""
								className="header-img"
							/>
						</a>
					</div>
					<div className="menu-separator">
						<MenuCtaSubLink
							text="Why Buy From NewAge"
							url="/why-buy-from-newage/"
						/>
						{/* <MenuCtaSubLink text="Home & Kitchen Catalog" url="#" />
						<MenuCtaSubLink text="Inspiration" url="#" /> */}
						<MenuCtaSubLink
							text="Inspiration"
							url="/all-spaces/residential-improvement/"
						/>
						<MenuCtaSubLink
							text="Free Design & Planning Services"
							url="/design-services/"
						/>
						<MenuCtaSubLink
							text="White Glove Delivery"
							url="/delivery-services/"
						/>
					</div>
				</div>
			</div>

			<div className="ds-flex right-menu">
				<div className="wid-100">
					<MegaCtaInActive text="Popular Search Terms" />
				</div>
				<div className='right-side-wrapper'>

					<div className="main-col">
						<MegaCtaSimple text="Home Bar Cabinets" url="https://shopnewage.com/collections/home-bar" />
						<MegaCtaSimple text="Wine Bar Cabinet" url="https://shopnewage.com/collections/21in-home-bar-cabinets" />
						<MegaCtaSimple text="Home Cabinet Set" url="https://shopnewage.com/collections/24in-home-bar-cabinets" />
						<MegaCtaSimple text="Laundry Room Cabinets" url="https://shopnewage.com/collections/laundry" />
						<MegaCtaSimple text="Laundry Sets" url="https://shopnewage.com/collections/laundry-sets" />
						<MegaCtaSimple text="Bar Cabinets" url="https://shopnewage.com/collections/21in-home-bar-cabinets" />
						<MegaCtaSimple text="Bottle Storage" url="https://shopnewage.com/collections/21in-home-bar-cabinets" />
						<MegaCtaSimple text="Stemware Storage" url="https://shopnewage.com/collections/21in-home-bar-cabinets" />
						<MegaCtaSimple text="Entertainment Units" url="https://shopnewage.com/collections/24in-home-bar-cabinets" />
						<MegaCtaSimple text="Hanging Stemware Shelf" url="https://shopnewage.com/collections/21in-home-bar-cabinets/products/home-bar-hanging-stemware-shelf-42-61009" />
						<MegaCtaSimple text="Display Shelf" url="https://shopnewage.com/collections/21in-home-bar-cabinets/products/home-bar-display-shelf-61008" />
						<MegaCtaSimple text="Home Storage Cabinets" url="https://shopnewage.com/collections/24in-home-bar-individual-cabinets" />
						<MegaCtaSimple text="Home Bar Accessories" url="https://shopnewage.com/collections/home-bar" />
					</div>
					<div className="main-col">
						<MegaCtaSimple text="Laundry Accessories" url="https://shopnewage.com/collections/laundry" />
						<MegaCtaSimple text="Turnkey Sets" url="https://shopnewage.com/collections/home-bar" />
						<MegaCtaSimple text="Customizable Sets" url="https://shopnewage.com/collections/home-bar" />
						<MegaCtaSimple text="Custom Cabinets" url="https://shopnewage.com/collections/cabinet-frames" />
						{/* <div className="spacer"></div> */}

						{/* <div className="menu-separator">
							<div className="grey">
								<MegaCtaInActive text="Inspiration" />
							</div>
							<MegaCtaSimple text="Laundry Room" url="#" />
							<MegaCtaSimple text="Living Room" url="#" />
							<MegaCtaSimple text="Basement" url="#" />
							<MegaCtaSimple text="Dining Room" url="#" />
						</div> */}
					</div>
				</div>

			</div>
		</Div>
	);
}

export default Home;
