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
	left: -20px;
	background-color: #fff;
	padding: 20px;
	/* width: 1410px; */
	width: auto;
	display: flex;
	${device.desktop} {
		left: 0;
		/* width: 1210px; */
		width: auto;
	}
	${device.laptopL} {
		/* width: 900px; */
		left: 5px;
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
							url="/garage-storage-cabinets/"
						/>
						<MenuCtaSubLink
							text="Pro Series"
							url="/garage-storage-cabinets-pro-3-0-series/"
						/>
						<MenuCtaSubLink
							text="Bold Series"
							url="/garage-storage-cabinets-bold-3-0-series/"
						/>
						{/* <MenuCtaSubLink text="Secure Gun Cabinet" url="#" /> */}
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Racks & Shelving"
							url="/shelves-and-off-the-floor-storage/"
						/>
						<MenuCtaSubLink
							text="Overhead Racks"
							url="/garage-storage-overhead-racks/"
						/>
						<MenuCtaSubLink
							text="Wall Mounted Steel Shelves"
							url="/pro-series-wall-mounted-steel-shelves/"
						/>
						<MenuCtaSubLink
							text="Wall Mounted Racks"
							url="/wall-mounted-racks/"
						/>
					</div>

					<div className="menu-separator">
						<MenuCtaHeader text="Slatwall" url="/slatwall/" />
						<MenuCtaSubLink text="PVC Slatwall" url="/slatwall/pvc-slatwall/" />
						<MenuCtaSubLink
							text="Steel Slatwall"
							url="/slatwall/steel-slatwall/"
						/>
						<MenuCtaSubLink
							text="Slatwall Backsplash"
							url="/slatwall/steel-slatwall-backsplash/"
						/>
						<MenuCtaSubLink
							text="Slatwall Accessories"
							url="/slatwall/slatwall-accessories/"
						/>
					</div>
				</div>
				{/*  */}
				<div className="second-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader
							text="Workbench Solutions"
							url="/garage-storage-organization-solutions/workbenches/"
						/>
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Garage Accessories"
							url="/garage-storage-organization-solutions/garage-accessories/"
						/>
						<MenuCtaSubLink
							text="Lighting"
							url="https://shopnewage.com/collections/cabinet-lighting"
						/>
						<MenuCtaSubLink
							text="Infrared Heater"
							url="/garage-storage-organization-solutions/garage-accessories/infrared-heater/"
						/>
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Garage Flooring"
							url="/flooring/residential-flooring/garage-flooring/"
						/>
					</div>

					{/* <div className="menu-separator">
						<MenuCtaHeader text="Build Your Own Garage" url="#" />
					</div> */}
				</div>
				{/*  */}
				<div className="third-col main-col img-col">
					<div className="menu-separator ">
						<a href="#">
							<img
								src="/assets/mega-menu/garage-mega.png"
								alt=""
								className="header-img "
							/>
						</a>
					</div>
					<div className="">
						<MenuCtaSubLink
							text="Why Buy From NewAge"
							url="/why-buy-from-newage/"
						/>
						<MenuCtaSubLink text="Support Hub" url="/support-hub/" />
						<MenuCtaSubLink text="Garage Planning Guide" url="https://drive.google.com/file/d/1pUU6Vond7HnqaWS6Ty33zUy2oIwlSl6p/view" />
						{/* <MenuCtaSubLink text="Garage Planning Guides" url="#" /> */}
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
						<MegaCtaSimple text="Garage Storage" url="https://shopnewage.com/collections/garage-storage/" />
						<MegaCtaSimple text="Shelves" url="https://shopnewage.com/collections/garage-shelves/" />
						<MegaCtaSimple text="Racks" url="https://shopnewage.com/collections/garage-racks/" />
						<MegaCtaSimple text="Wall Organization" url="https://shopnewage.com/collections/slatwall-wall-organization/" />
						<MegaCtaSimple text="Slatwall" url="https://shopnewage.com/collections/slatwall-wall-organization/" />
						<MegaCtaSimple text="Mobile Solutions" url="https://shopnewage.com/collections/utility-carts-and-mobile-solutions/" />
						<MegaCtaSimple text="Utility Carts" url="https://shopnewage.com/collections/utility-carts-and-mobile-solutions/products/pro-series-3-0-mobile-utility-cart-52630?variant=31582879907906/" />
						<MegaCtaSimple text="Workbenches" url="https://shopnewage.com/collections/workbenches/" />
						<MegaCtaSimple text="Workstations" url="https://shopnewage.com/collections/workstations?_ga=2.2357877.457782331.1631762624-1331374176.1610459619&sdid=bae5ab3f-5285-4c1f-82a0-8470b74c8f07/" />

						<MegaCtaSimple text="Tool Storage Solutions" url="https://shopnewage.com/collections/tool-storage-solutions/" />
						<MegaCtaSimple text="Large Storage Solutions" url="https://shopnewage.com/collections/garage-large-storage-solutions/" />
						<MegaCtaSimple text="Garage Storage Systems" url="https://shopnewage.com/collections/garage-storage-systems/" />
						<MegaCtaSimple text="Locker Cabinets" url="https://shopnewage.com/collections/locker-cabinets/" />
					</div>
					<div className="main-col">
						<MegaCtaSimple text="Wall Cabinets" url="https://shopnewage.com/collections/garage-wall-cabinets" />
						<MegaCtaSimple text="Individual Garage Cabinets" url="https://shopnewage.com/collections/individual-garage-cabinets" />
						<MegaCtaSimple text="Worktops" url="https://shopnewage.com/collections/garage-worktops/" />
						<MegaCtaSimple text="Lighting" url="https://shopnewage.com/collections/garage-lighting/" />
						<MegaCtaSimple text="Power Strip" url="https://shopnewage.com/products/10-outlet-power-strip-with-surge-protection-48001/" />
						<MegaCtaSimple text="Stool" url="https://shopnewage.com/collections/garage-accessories/products/garage-stool-51360/" />
						<MegaCtaSimple text="Infrared Heater" url="https://shopnewage.com/collections/infrared-heater/" />
						<MegaCtaSimple text="Mobile Cabinets" url="https://shopnewage.com/collections/mobile-cabinets/" />
						<MegaCtaSimple text="LED Cabinet Lights" url="https://shopnewage.com/collections/cabinet-lighting/" />
						<MegaCtaSimple text="Casters" url="https://shopnewage.com/collections/garage-accessories/products/pro-series-3-0-casters-31414/" />
						<MegaCtaSimple text="Mounting Brackets" url="https://shopnewage.com/collections/garage-accessories/" />
						<MegaCtaSimple text="Accessories" url="https://shopnewage.com/collections/garage-accessories/" />
						<MegaCtaSimple text="Garage Organization" url="https://shopnewage.com/collections/garage-storage/" />
					</div>
				</div>

			</div>
		</Div>
	);
}

export default Garage;
