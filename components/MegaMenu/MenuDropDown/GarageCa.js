import React from 'react';
import styled from 'styled-components';
import device from "../../../utils/mediaUtils"

import MegaCtaInActive from '../MegaCtas/MegaCtaInActive';
import MegaCtaSimple from '../MegaCtas/MegaCtaSimple';
import MenuCtaHeader from '../MegaCtas/MenuCtaHeader';
import MenuCtaSubLink from '../MegaCtas/MenuCtaSubLink';
const Div = styled.div`
	position: absolute;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
		0 1px 5px 0 rgb(0 0 0 / 20%);
	top: 0;
	left: 100px;
	background-color: #fff;
	padding: 20px;
	width: auto;
	display: flex;
	${device.desktop} {
		/* width: 980px; */
		/* left: 380px; */
		/* left: 280px; */
	}
	${device.laptopL} {
		/* width: 800px; */
		left: 20px;
	}
`;

function Garage() {
	return (
		<Div className="garage-header-main ds-flex">
			<div className="ds-flex left-menu">
				<div className="first-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader
							text="Garage Cabinets"
							url="/ca/garage-storage-cabinets/"
						/>
						<MenuCtaSubLink
							text="Pro Series"
							url="/ca/garage-storage-cabinets-pro-3-0-series/"
						/>
						<MenuCtaSubLink
							text="Bold Series"
							url="/ca/garage-storage-cabinets-bold-3-0-series/"
						/>
						{/* <MenuCtaSubLink text="Secure Gun Cabinet" url="#" /> */}
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Racks & Shelving"
							url="/ca/shelves-and-off-the-floor-storage/"
						/>
						<MenuCtaSubLink
							text="Overhead Racks"
							url="/ca/garage-storage-overhead-racks/"
						/>
						<MenuCtaSubLink
							text="Wall Mounted Steel Shelves"
							url="/ca/pro-series-wall-mounted-steel-shelves/"
						/>
						<MenuCtaSubLink
							text="Wall Mounted Racks"
							url="/ca/wall-mounted-racks/"
						/>
					</div>

					<div className="menu-separator">
						<MenuCtaHeader text="Slatwall & Accessories" url="/ca/wall-organization/" />
						{/* <MenuCtaSubLink
							text="PVC Slatwall"
							url="/ca/slatwall/pvc-slatwall/"
						/>
						<MenuCtaSubLink
							text="Steel Slatwall"
							url="/ca/slatwall/steel-slatwall/"
						/>
						<MenuCtaSubLink
							text="Slatwall Backsplash"
							url="/ca/slatwall/steel-slatwall-backsplash/"
						/>
						<MenuCtaSubLink
							text="Slatwall Accessories"
							url="/ca/slatwall/slatwall-accessories/"
						/> */}
					</div>
				</div>
				{/*  */}
				<div className="second-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader
							text="Workbench Solutions"
							url="/ca/garage-storage-organization-solutions/workbenches/"
						/>
					</div>

					<div className="menu-separator">
						{/* <MenuCtaHeader
							text="Garage Accessories"
							url="/ca/garage-storage-organization-solutions/garage-accessories/"
						/> */}
						<MenuCtaHeader text="Linkable Shop Lights" url="/ca/linkable-shop-lights/" />
						{/* <MenuCtaSubLink
							text="Infrared Heater"
							url="/ca/garage-storage-organization-solutions/garage-accessories/infrared-heater/"
						/> */}
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Garage Flooring"
							url="/ca/flooring/residential-flooring/garage-flooring/"
						/>
					</div>

					{/* <div className="menu-separator">
						<MenuCtaHeader text="Build Your Own Garage" url="#" />
					</div> */}
				</div>
				{/*  */}
				<div className="third-col main-col img-col">
					<div className="menu-separator">
						<a href="#">
							<img
								src="/assets/mega-menu/garage-mega.png"
								alt=""
								className="header-img"
							/>
						</a>
					</div>
					<div className="">
						<MenuCtaSubLink
							text="Why Buy From NewAge"
							url="/ca/why-buy-from-newage/"
						/>
						<MenuCtaSubLink text="Support Hub" url="/ca/support-hub/" />
						<MenuCtaSubLink text="Garage Planning Guide" url="https://drive.google.com/file/d/1pUU6Vond7HnqaWS6Ty33zUy2oIwlSl6p/view" />

						{/* <MenuCtaSubLink text="Garage Planning Guides" url="#" /> */}
						<MenuCtaSubLink
							text="Free Design & Planning Services"
							url="/ca/design-services/"
						/>
						{/* <MenuCtaSubLink
							text="White Glove Delivery"
							url="/ca/delivery-services/"
						/> */}
					</div>
				</div>
			</div>

			<div className="ds-flex right-menu">
				<div className="wid-100">
					<MegaCtaInActive text="Popular Search Terms" />
				</div>
				<div className='right-side-wrapper'>

					<div className="main-col">
						<MegaCtaSimple text="Garage Storage" url="https://ca.shopnewage.com/collections/garage" />
						<MegaCtaSimple text="Shelves" url="https://ca.shopnewage.com/collections/garage-shelves" />
						<MegaCtaSimple text="Racks" url="https://ca.shopnewage.com/collections/garage-racks" />
						<MegaCtaSimple text="Wall Organization" url="https://ca.shopnewage.com/collections/wall-organization" />
						<MegaCtaSimple text="Slatwall" url="https://ca.shopnewage.com/collections/wall-organization" />
						<MegaCtaSimple text="Mobile Solutions" url="https://ca.shopnewage.com/collections/garage-mobile-cabinets" />
						<MegaCtaSimple text="Utility Carts" url="https://ca.shopnewage.com/products/pro-series-mobile-utility-cart-52630" />
						<MegaCtaSimple text="Workbenches" url="https://ca.shopnewage.com/collections/workbenches" />
						{/* <MegaCtaSimple text="Workstations" url="https://ca.shopnewage.com/collections/overhead-racks" /> */}
						<MegaCtaSimple text="VersaRacs" url="https://ca.shopnewage.com/collections/overhead-racks" />
						<MegaCtaSimple text="Tool Storage Solutions" url="https://ca.shopnewage.com/collections/tool-storage-solutions" />
						<MegaCtaSimple text="Large Storage Solutions" url="https://ca.shopnewage.com/collections/large-storage-solutions" />
						<MegaCtaSimple text="Garage Storage Systems" url="https://ca.shopnewage.com/collections/garage" />
						<MegaCtaSimple text="Locker Cabinets" url="https://ca.shopnewage.com/collections/locker-cabinets" />
					</div>
					<div className="main-col">
						<MegaCtaSimple text="Wall Cabinets" url="https://ca.shopnewage.com/collections/garage-wall-cabinets" />
						<MegaCtaSimple text="Individual Garage Cabinets" url="https://ca.shopnewage.com/collections/individual-garage-cabinets" />
						<MegaCtaSimple text="Worktops" url="https://ca.shopnewage.com/collections/garage-worktops" />
						<MegaCtaSimple text="Lighting" url="https://ca.shopnewage.com/collections/lighting" />
						{/* <MegaCtaSimple text="Power Strip" url="#" /> */}
						<MegaCtaSimple text="Stool" url="https://ca.shopnewage.com/products/garage-stool-51360" />
						{/* <MegaCtaSimple text="Infrared Heater" url="#" /> */}
						<MegaCtaSimple text="Mobile Cabinets" url="https://ca.shopnewage.com/collections/garage-mobile-cabinets" />
						<MegaCtaSimple text="LED Cabinet Lights" url="https://ca.shopnewage.com/collections/cabinet-lighting" />
						<MegaCtaSimple text="Casters" url="https://ca.shopnewage.com/products/pro-series-3-0-casters-31414" />
						<MegaCtaSimple text="Mounting Brackets" url="https://ca.shopnewage.com/collections/mounting-brackets" />
						<MegaCtaSimple text="Accessories" url="https://ca.shopnewage.com/collections/garage-accessories" />
						<MegaCtaSimple text="Garage Organization" url="https://ca.shopnewage.com/collections/garage" />
					</div>
				</div>

			</div>
		</Div>
	);
}

export default Garage;
