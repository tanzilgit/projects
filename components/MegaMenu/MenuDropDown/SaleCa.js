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
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
		0 1px 5px 0 rgb(0 0 0 / 20%);
	left: 520px;
	background-color: #fff;
	padding: 20px;
	width: auto;
	display: flex;
	${device.desktop} {
		left: 250px;
		/* width: 992px; */
	}
	${device.laptopL} {
		/* width: 700px; */
		left: 190px;
	}
`;

function Sale() {
	return (
		<Div className="sale-header-main ds-flex">
			<div className="ds-flex left-menu">
				{/*  */}
				<div className="first-col main-col">
					<div className="menu-separator">
						<a href="#">
							<img
								src="/assets/mega-menu/sale1.PNG"
								alt=""
								className="header-img"
							/>
						</a>
					</div>
					<div className="menu-separator">
						<h3 className="sale-title">Save up to XX% on Garage</h3>
						{/* <MenuCtaHeader text="Shop Garage cabinet sets,<br/>Slatwall Kits & select Wall <br/>Mounted Racks" url="#" /> */}
						<MenuCtaHeader
							text={
								<>
									Shop Garage cabinet sets, Slatwall Kits & select Wall Mounted
									Racks
								</>
							}
							url="#"
						/>
					</div>
				</div>
				{/*  */}
				<div className="second-col main-col">
					<div className="menu-separator">
						<a href="#">
							<img
								src="/assets/mega-menu/sale2.PNG"
								alt=""
								className="header-img"
							/>
						</a>
					</div>
					<div className="menu-separator">
						<h3 className="sale-title">Deal of the Week XX% Off</h3>
						<MenuCtaHeader
							text={<>Special Discounts on Select Garage Items</>}
							url="#"
						/>
					</div>
				</div>

				{/*  */}
				<div className="third-col main-col">
					<div className="menu-separator">
						<a href="#">
							<img
								src="/assets/mega-menu/sale3.PNG"
								alt=""
								className="header-img"
							/>
						</a>
					</div>
					<div className="menu-separator">
						<h3 className="sale-title red-title">Last Chance Deals</h3>
						<MenuCtaHeader
							text={<>Score up to XX% off while these deals last</>}
							url="#"
						/>
					</div>
				</div>
			</div>

			<div className="ds-flex right-menu">
				<div className="menu-separator">
					<div className="wid-100">
						<MegaCtaInActive
							text="Savings by Department"
							url="https://shopnewage.com/collections/deals-and-sales/"
						/>
					</div>
					<div className='right-side-wrapper'>

						<div className="main-col">
							<MenuCtaHeader
								text="Garage Cabinets"
								url="https://ca.shopnewage.com/collections/garage/"
							/>
							<MenuCtaHeader text="Racks & Shelving" url="/ca/shelves-and-off-the-floor-storage/" />
							{/* <MenuCtaHeader text="Slatwall & Accessories" url="/ca/slatwall/slatwall-accessories/" /> */}
							<MenuCtaHeader
								text="Outdoor Kitchens"
								url="https://ca.shopnewage.com/collections/outdoor-kitchen/"
							/>
							<MenuCtaHeader
								text="Cooking Appliances"
								url="https://ca.shopnewage.com/collections/all-grilling"
							/>
							{/* <MenuCtaHeader
								text="Bar Cabinets"
								url="https://ca.shopnewage.com/collections/home-bar/"
							/> */}
							<MenuCtaHeader
								text="Flooring"
								url="https://ca.shopnewage.com/collections/flooring/"
							/>
							<MenuCtaHeader text="Lighting" url="https://ca.shopnewage.com/collections/cabinet-lighting/" />
						</div>
					</div>
				</div>

				{/*  */}
				<div className="menu-separator">
					<div className="wid-100">
						<MegaCtaInActive text="More Ways to Save" />
					</div>
					<div className='right-side-wrapper'>
						<div className="main-col">
							<MenuCtaHeader
								text="Affirm Financing"
								url="https://www.affirm.com/apps/prequal/?public_api_key=RI7X9369MD1A841R&promo_external_id=promo_set_newage&referring_url=https%253A%252F%252Fnewageproducts.com%252F%253Fsvc%253DnapPop&use_promo=true&page_type=product"
							/>
							<MenuCtaHeader
								text="Healthcare Discount"
								url="/"
							/>
						</div>
					</div>

				</div>
			</div>
		</Div>
	);
}

export default Sale;
