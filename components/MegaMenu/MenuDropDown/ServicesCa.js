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
	left: 1000px;
	background-color: #fff;
	padding: 20px;
	width: auto;
	display: flex;
	${device.desktop} {
		/* left: 280px; */
		/* width: 980px; */
		left: 820px;
	}
	${device.laptopL} {
		/* width: 700px; */
		/* left: 220px; */
		/* left: 150px; */
		left: 620px;
	}
`;

function Services() {
	return (
		<Div className="services-header-main ds-flex ca">
			<div className="ds-flex left-menu">
				{/* <div className="first-col main-col">
					<div className="menu-separator">
						<a href="#">
							<img
								src="/assets/mega-menu/services1.PNG"
								alt=""
								className="header-img"
							/>
						</a>
					</div>
					<div className="menu-separator">
						<div className="menu-separator">
							<h3 className="sale-title">Measuring Services</h3>

							<span>
								Make sure you have room for your new products before you buy
								them.
							</span>
							<MenuCtaHeader text={<>Get help with measuring</>} url="#" />
						</div>
					</div>
				</div> */}

				<div className="second-col main-col">
					<div className="menu-separator">
						<a href="/ca/design-services/">
							<img
								src="/assets/mega-menu/services2.PNG"
								alt=""
								className="header-img"
							/>
						</a>
					</div>
					<div className="menu-separator">
						<h3 className="sale-title">Free 3D Design Consultation</h3>
						{/* <MenuCtaHeader text="Shop Garage cabinet sets,<br/>Slatwall Kits & select Wall <br/>Mounted Racks" url="#" /> */}
						<span>
							Award-winning design services for projects big or small.
						</span>
						<MenuCtaHeader
							text={<>Book a free consultation online or over the phone</>}
							url="/ca/design-services/"
						/>
					</div>
				</div>

				{/*  */}
				<div className="third-col main-col">
					<div className="menu-separator">
						<a href="/ca/installation-services/">
							<img
								src="/assets/mega-menu/services3.PNG"
								alt=""
								className="header-img"
							/>
						</a>
					</div>
					<div className="menu-separator">
						<h3 className="sale-title">Professional Installation</h3>
						{/* <MenuCtaHeader text="Shop Garage cabinet sets,<br/>Slatwall Kits & select Wall <br/>Mounted Racks" url="#" /> */}
						<span>
							Spend less time assembling, and more time doing what you want to
							do.
						</span>
						<MenuCtaHeader
							text={<>Have our team assemble your items</>}
							url="/ca/installation-services/"
						/>
					</div>
				</div>

				{/* <div className="fourth-col main-col">
					<div className="menu-separator">
						<a href="/ca/delivery-services/">
							<img
								src="/assets/mega-menu/services4.PNG"
								alt=""
								className="header-img"
							/>
						</a>
					</div>
					<div className="menu-separator">
						<h3 className="sale-title">White Glove Delivery</h3>
						
						<span>
							Premium delivery to the room of your choice and removal of all
							packaging.
						</span>
						<MenuCtaHeader
							text={<>Find out more about White Glove Delivery</>}
							url="/delivery-services/"
						/>
					</div>
				</div> */}
			</div>
		</Div>
	);
}

export default Services;
