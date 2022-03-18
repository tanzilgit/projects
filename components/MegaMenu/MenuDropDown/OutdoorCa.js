import React from 'react';
import styled from 'styled-components';
import device from "../../../utils/mediaUtils"

import MegaCtaInActive from '../MegaCtas/MegaCtaInActive';
import MegaCtaSimple from '../MegaCtas/MegaCtaSimple';
import MenuCtaHeader from '../MegaCtas/MenuCtaHeader';
import MenuCtaSubLink from '../MegaCtas/MenuCtaSubLink';

const Div = styled.div`
	position: absolute;
	top: 0;
	left: 150px;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
		0 1px 5px 0 rgb(0 0 0 / 20%);
	background-color: #fff;
	padding: 20px;
	/* width: 1410px; */
	width: auto;
	display: flex;
	${device.desktop} {
		/* width: 1210px; */
		/* left: 10px; */
	}
	${device.laptopL} {
		/* width: 1010px; */
		/* left: 5px; */
	}

	/* Only below CSS for Outdoor CA on its component level, as it had less contents in Popular Search Term, so to align we add below CSS */
	.right-side-wrapper {
		height: 100%;
	}
	.menu-separator .grey {
		margin-top: 0;
	}
`;

function Outdoor() {
	return (
		<Div className="outdoor-header-main ds-flex">
			<div className="ds-flex left-menu ca">
				<div className="first-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader
							text="Outdoor "
							url="/ca/outdoor-kitchen-cabinets/"
						/>
						<MenuCtaSubLink
							text="Kitchen Cabinets"
							url="/ca/outdoor-kitchen-cabinets-stainless-steel/"
						/>
						<MenuCtaSubLink
							text="Classic Stainless Steel Cabinets"
							url="/ca/outdoor-kitchen-cabinets-stainless-steel/"
						/>
						<MenuCtaSubLink
							text="Classic Aluminum Cabinets"
							url="/ca/outdoor-kitchen-cabinets-aluminum/"
						/>
						{/* <MenuCtaSubLink
							text="Signature Cabinets"
							url="/ca/outdoor/outdoor-kitchen/signature-kitchen/"
						/>
						<MenuCtaSubLink
							text="Countertops"
							url="/ca/outdoor-kitchen-cabinets/outdoor-kitchen-countertops/"
						/>
						<MenuCtaSubLink text="LED Lighting" url="#" /> */}
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Cooking Appliances"
							url="/ca/outdoor-kitchen-grills/"
						/>
						<MenuCtaSubLink
							text="Gas Grills"
							url="/ca/outdoor-kitchen-grills#learn-more1"
						/>
						{/* <MenuCtaSubLink
							text="Kamado Grills"
							url="/ca/outdoor/bbq-grills#charcoal-grills"
						/> */}
						<MenuCtaSubLink
							text="Side Burners"
							url="/ca/outdoor-kitchen-grills#dual-side-burners"
						/>
						{/* <MenuCtaSubLink text="Outdoor Fridges" url="#" />
						<MenuCtaSubLink text="Grill Carts" url="#" />
						<MenuCtaSubLink text="Grilling Recipes" url="/ca/recipes/" /> */}
					</div>
				</div>
				{/*  */}
				{/* <div className="second-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader
							text="Outdoor Furniture"
							url="/ca/outdoor/outdoor-furniture/"
						/>
						<MenuCtaSubLink text="Chat Sets & Sectionals" url="#" />
						<MenuCtaSubLink
							text="Dining Sets"
							url="https://shopnewage.com/collections/outdoor-dining/"
						/>
						<MenuCtaSubLink
							text="Loungers"
							url="/ca/outdoor/outdoor-furniture/chaise-lounges/"
						/>
						<MenuCtaSubLink
							text="Planters"
							url="https://shopnewage.com/collections/planter-boxes/"
						/>
						<MenuCtaSubLink text="Accent Pillows" url="#" />
						<MenuCtaSubLink text="Umbrellas" url="#" />
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Shop by Collection"
							url="https://shopnewage.com/collections/outdoor-furniture/"
						/>
						<MenuCtaSubLink
							text="Monterey Collection"
							url="/ca/outdoor/outdoor-furniture-collections/monterey/"
						/>
						<MenuCtaSubLink
							text="Rhodes Collection"
							url="/ca/outdoor/outdoor-furniture-collections/rhodes/"
						/>
						<MenuCtaSubLink
							text="Lakeside Collection"
							url="/ca/outdoor/outdoor-furniture-collections/lakeside/"
						/>
						<MenuCtaSubLink
							text="How to Care"
							url="/ca/outdoor/outdoor-furniture/material-guide/"
						/>
					</div>
					<div className="menu-separator">
						<MenuCtaHeader
							text="Outdoor Storage"
							url="/ca/outdoor/outdoor-storage/deck-boxes/"
						/>
						<MenuCtaSubLink
							text="Teak Deck Boxes"
							url="/ca/outdoor/outdoor-storage/deck-boxes/"
						/>
					</div>
				</div> */}
				{/*  */}
				{/* <div className="third-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader
							text="Outdoor Storage"
							url="https://shopnewage.com/collections/deck-boxes/"
						/>
						<MenuCtaSubLink text="Teak Deck Boxes" url="#" />
					</div>

					<div className="menu-separator">
						<MenuCtaHeader text="Heating" url="#" />
						<MenuCtaSubLink text="Fire Tables" url="#" />
					</div>

					<div className="menu-separator">
						<MenuCtaHeader text="Stone" url="#" />
						<MenuCtaSubLink text="Stacked Stone" url="#" />
					</div>
				</div> */}
				{/*  */}
				<div className="fourth-col main-col img-col">
					<div className="menu-separator">
						<a href="#">
							<img
								src="/assets/mega-menu/outdoor-mega.png"
								alt=""
								className="header-img"
							/>
						</a>
					</div>
					<div className="">
						<MenuCtaSubLink
							text="Why Buy From NewAge "
							url="/ca/why-buy-from-newage/"
						/>
						{/* <MenuCtaSubLink text="Outdoor Planning Guides" url="" /> */}
						{/* <MenuCtaSubLink text="Outdoor Materials and Testing" url="#" /> */}
						<MenuCtaSubLink
							text="Free Design & Planning Services"
							url="/ca/design-services/"
						/>
						<MenuCtaSubLink
							text="Delivery Services"
							url="/ca/delivery-services/"
						/>
					</div>
				</div>
			</div>

			<div className="ds-flex right-menu ca">
				<div className="wid-100">
					<MegaCtaInActive text="Popular Search Terms" />
				</div>
				<div className='right-side-wrapper'>

					<div className="main-col">
						<MegaCtaSimple text="Outdoor Kitchen" url="https://ca.shopnewage.com/collections/outdoor-kitchen/" />
						{/* <MegaCtaSimple text="Planter Boxes" url="#" /> */}
						{/* <MegaCtaSimple text="Outdoor Ottomans" url="#" /> */}
						<MegaCtaSimple text="Outdoor Bars" url="https://ca.shopnewage.com/collections/outdoor-bar-cabinets" />
						{/* <MegaCtaSimple text="Garden Furniture" url="#" /> */}
						{/* <MegaCtaSimple text="Rattan Garden Furniture" url="#" /> */}
						{/* <MegaCtaSimple text="Garden Bench" url="#" /> */}
						{/* <MegaCtaSimple text="Bistro Set" url="#" /> */}
						{/* <MegaCtaSimple text="Cantilever Umbrella" url="#" /> */}
						{/* <MegaCtaSimple text="Indoor Plant Pots" url="#" /> */}
						{/* <MegaCtaSimple text="Outdoor Chairs" url="#" /> */}
						{/* <MegaCtaSimple text="Outdoor Coffee Table" url="#" /> */}
						<MegaCtaSimple text="Traeger Accessories" url="https://ca.shopnewage.com/collections/all-grilling-accessories" />
					</div>
					<div className="main-col">
						{/* <MegaCtaSimple text="Wicker Chair" url="#" /> */}
						{/* <MegaCtaSimple text="Outdoor Pillow" url="#" /> */}
						{/* <MegaCtaSimple text="Outdoor Chaise Lounge" url="#" /> */}
						{/* <MegaCtaSimple text="Dining Table" url="#" /> */}
						{/* <MegaCtaSimple text="Dining Chair" url="#" /> */}
						{/* <MegaCtaSimple text="Patio Bench" url="#" /> */}

						{/* <div className="spacer"></div> */}

						<div className="menu-separator">
							<div className="grey">
								<MegaCtaInActive text="Inspiration" />
							</div>
							<MegaCtaSimple text="Grilling Recipes" url="/recipes/" />
							{/* <MegaCtaSimple text="Outdoor Grill Philosophy" url="#" /> */}
						</div>
					</div>
				</div>

			</div>
		</Div>
	);
}

export default Outdoor;
