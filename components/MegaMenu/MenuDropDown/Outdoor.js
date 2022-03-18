import React from 'react';
import styled from 'styled-components';
import device from '../../../utils/mediaUtils';


import MegaCtaInActive from '../MegaCtas/MegaCtaInActive';
import MegaCtaSimple from '../MegaCtas/MegaCtaSimple';
import MenuCtaHeader from '../MegaCtas/MenuCtaHeader';
import MenuCtaSubLink from '../MegaCtas/MenuCtaSubLink';

const Div = styled.div`
	position: absolute;
	top: 0;
	left: 25px;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
		0 1px 5px 0 rgb(0 0 0 / 20%);
	background-color: #fff;
	padding: 20px;
	/* width: 1410px; */
	width: auto;
	display: flex;
	${device.desktop} {
		/* width: 1210px; */
		left: 10px;
	}
	${device.laptopL} {
		/* width: 1010px; */
		left: 5px;
	}
`;

function Outdoor() {
	return (
		<Div className="outdoor-header-main ds-flex">
			<div className="ds-flex left-menu">
				<div className="first-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader
							text="Outdoor Cabinets"
							url="/outdoor/outdoor-kitchen/"
						/>
						<MenuCtaSubLink
							text="Classic Stainless Steel Cabinets"
							url="/outdoor-kitchen-cabinets-stainless-steel/"
						/>
						<MenuCtaSubLink
							text="Classic Aluminum Cabinets"
							url="/outdoor-kitchen-cabinets-aluminum/"
						/>
						<MenuCtaSubLink
							text="Signature Cabinets"
							url="/outdoor/outdoor-kitchen/signature-kitchen/"
						/>
						<MenuCtaSubLink
							text="Countertops"
							url="/outdoor-kitchen-cabinets/outdoor-kitchen-countertops/"
						/>
						<MenuCtaSubLink
							text="LED Lightings"
							url="https://shopnewage.com/products/signature-series-outdoor-kitchen-led-light-kit-60890/"
						/>
						{/* <MenuCtaSubLink text="LED Lighting" url="#" /> */}
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Grills & Appliances"
							url="/outdoor/bbq-grills/"
						/>
						<MenuCtaSubLink
							text="Gas Grills"
							url="/outdoor/bbq-grills#gas-grills"
						/>
						<MenuCtaSubLink
							text="Kamado Grills"
							url="/outdoor/bbq-grills#charcoal-grills"
						/>
						<MenuCtaSubLink
							text="Side Burners"
							url="/outdoor/bbq-grills#side-burners"
						/>
						{/* <MenuCtaSubLink text="Outdoor Fridges" url="#" /> */}
						{/* <MenuCtaSubLink text="Grill Carts" url="#" /> */}
						<MenuCtaSubLink text="Grilling Recipes" url="/recipes/" />
					</div>
				</div>
				{/*  */}
				<div className="second-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader
							text="Outdoor Furniture"
							url="/outdoor/outdoor-furniture/"
						/>
						{/* <MenuCtaSubLink text="Chat Sets & Sectionals" url="#" /> */}
						<MenuCtaSubLink text="Sofas & Sectionals" url="https://shopnewage.com/collections/sofas-and-sectionals/" />
						<MenuCtaSubLink text="Dining Sets" url="https://newageproducts.com/outdoor/outdoor-furniture/outdoor-dining-set/" />
						<MenuCtaSubLink
							text="Loungers"
							url="/outdoor/outdoor-furniture/chaise-lounges/"
						/>
						<MenuCtaSubLink
							text="Planters"
							url="https://shopnewage.com/collections/planter-boxes/"
						/>
						<MenuCtaSubLink text="Accent Pillows" url="https://shopnewage.com/products/sunbrella-accent-pillow-set-of-2-91664?variant=40807233945780" />
						<MenuCtaSubLink text="Umbrellas" url="https://shopnewage.com/collections/outdoor-umbrellas/" />
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Shop by Collection"
							// url="https://shopnewage.com/collections/outdoor-furniture/"
							url="https://newageproducts.com/outdoor/outdoor-furniture/"

						/>
						<MenuCtaSubLink
							text="Monterey Collection"
							url="/outdoor/outdoor-furniture-collections/monterey/"
						/>
						<MenuCtaSubLink
							text="Rhodes Collection"
							url="/outdoor/outdoor-furniture-collections/rhodes/"
						/>
						<MenuCtaSubLink
							text="Lakeside Collection"
							url="/outdoor/outdoor-furniture-collections/lakeside/"
						/>
						<MenuCtaSubLink
							text="How to Care"
							url="/outdoor/outdoor-furniture/material-guide/"
						/>
					</div>
					<div className="menu-separator">
						<MenuCtaHeader
							text="Outdoor Storage"
							url="/outdoor/outdoor-storage/deck-boxes/"
						/>
						<MenuCtaSubLink
							text="Teak Deck Boxes"
							url="/outdoor/outdoor-storage/deck-boxes/"
						/>
					</div>
				</div>
				{/*  */}

				{/* <div className="third-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader
							text="Outdoor Storage"
							url="/outdoor/outdoor-storage/deck-boxes/"
						/>
						<MenuCtaSubLink
							text="Teak Deck Boxes"
							url="/outdoor/outdoor-storage/deck-boxes/"
						/>
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
					<div className="menu-separator">
						<MenuCtaSubLink
							text="Why Buy From NewAge "
							url="/why-buy-from-newage/"
						/>
						{/* <MenuCtaSubLink text="Outdoor Planning Guides" url="#" /> */}
						<MenuCtaSubLink
							text="Outdoor Materials and Testing"
							url="/outdoor/outdoor-furniture/material-guide/"
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
						<MegaCtaSimple text="Outdoor Kitchen" url="https://shopnewage.com/collections/shop-all-outdoor/" />
						<MegaCtaSimple text="Planter Boxes" url="https://shopnewage.com/collections/planter-boxes/" />
						<MegaCtaSimple text="Outdoor Ottomans" url="https://shopnewage.com/collections/ottomans/" />
						<MegaCtaSimple text="Outdoor Bars" url="https://shopnewage.com/collections/outdoor-bar-cabinets/" />
						<MegaCtaSimple text="Garden Furniture" url="https://shopnewage.com/collections/outdoor-furniture/" />
						<MegaCtaSimple text="Rattan Garden Furniture" url="https://shopnewage.com/collections/outdoor-furniture/" />
						<MegaCtaSimple text="Garden Bench" url="https://shopnewage.com/collections/dining-bench/" />
						<MegaCtaSimple text="Bistro Set" url="https://shopnewage.com/collections/chat-sets/" />
						<MegaCtaSimple text="Cantilever Umbrella" url="https://shopnewage.com/collections/outdoor-umbrellas/" />
						<MegaCtaSimple text="Indoor Plant Pots" url="https://shopnewage.com/collections/planter-boxes/" />
						<MegaCtaSimple text="Outdoor Chairs" url="https://shopnewage.com/collections/chat-chairs/" />
						<MegaCtaSimple text="Outdoor Coffee Table" url="https://shopnewage.com/collections/coffee-and-side-tables/" />
						<MegaCtaSimple text="Traeger Accessories" url="https://shopnewage.com/collections/all-grilling-accessories/" />
					</div>
					<div className="main-col">
						{/* <MegaCtaSimple text="Wicker Chair" url="#" /> */}
						<MegaCtaSimple text="Outdoor Pillow" url="https://shopnewage.com/products/sunbrella-accent-pillow-set-of-2-91664/" />
						<MegaCtaSimple text="Outdoor Chaise Lounge" url="https://shopnewage.com/collections/chaise-lounges/" />
						<MegaCtaSimple text="Dining Table" url="https://shopnewage.com/collections/dining-chairs/" />
						{/* <MegaCtaSimple text="Dining Chair" url="#" /> */}
						<MegaCtaSimple text="Patio Bench" url="https://shopnewage.com/collections/dining-bench/" />

						{/* <div className="spacer"></div> */}

						<div className="menu-separator">
							<div className="grey">
								<MegaCtaInActive text="Inspiration" />
							</div>
							<MegaCtaSimple text="Grilling Recipes" url="/recipes/" />
							<MegaCtaSimple text="Outdoor Grill Philosophy" url="/outdoor/bbq-grills/outdoor-grill-philosophy/" />
							
						</div>
					</div>
				</div>

			</div>
		</Div>
	);
}

export default Outdoor;
