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
	top: 0;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
		0 1px 5px 0 rgb(0 0 0 / 20%);
	left: 380px;
	background-color: #fff;
	padding: 20px;
	width: auto;
	display: flex;
	${device.desktop} {
		/* width: 980px; */
		left: 300px;
	}
	${device.laptopL} {
		/* width: 800px; */
		left: 100px;
	}
`;

function Kitchen() {
	return (
		<Div className="kitchen-header-main ds-flex">
			<div className="ds-flex left-menu">
				<div className="first-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader text="Kitchen" url="/kitchen/" />
						<MenuCtaSubLink
							text="Kitchen Cabinets"
							url="/kitchen/kitchen-cabinets/"
						/>
						<MenuCtaSubLink text="Kitchen Sink" url="/kitchen/kitchen-sinks/" />
						<MenuCtaSubLink
							text="Kitchen Faucet"
							url="/kitchen/kitchen-faucets/"
						/>
						<MenuCtaSubLink
							text="Kitchen Millwork"
							url="/kitchen/kitchen-millwork/"
						/>
						<MenuCtaSubLink
							text="Kitchen Backsplash"
							url="/kitchen/backsplash-tile/"
						/>
						<MenuCtaSubLink
							text="Kitchen Cabinet Hardware"
							url="/kitchen/cabinet-hardware/"
						/>
						<MenuCtaSubLink
							text="Kitchen Cabinet Organization"
							url="/kitchen/kitchen-organization/"
						/>
						<MenuCtaSubLink
							text="Kitchen Countertop"
							url="/kitchen/granite-countertops/"
						/>
						<MenuCtaSubLink
							text="Kitchen Flooring"
							url="/flooring/residential-flooring/kitchen-flooring/"
						/>
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Shop Kitchen Sets"
							url="https://shopnewage.com/collections/kitchen-sets/"
						/>
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Build Your Kitchen"
							url="/kitchen/build-your-kitchen/"
						/>
					</div>
				</div>
				{/*  */}

				<div className="second-col main-col img-col">
					<div className="menu-separator">
						<a href="#">
							<img
								src="/assets/mega-menu/kitchen-mega.png"
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
						<MenuCtaSubLink text="Inspiration" url="/all-spaces/residential-improvement/kitchen-solutions/" />
						<MenuCtaSubLink
							text="Free Design & Planning Services"
							url="/design-services/"
						/>
						{/* <MenuCtaSubLink text="Home & Kitchen Catalog" url="#" /> */}
						<MenuCtaSubLink text="Kitchen Samples" url="https://shopnewage.com/collections/kitchen-samples" />
					</div>
				</div>
			</div>

			<div className="ds-flex right-menu">
				<div className="wid-100">
					<MegaCtaInActive text="Popular Search Terms" />
				</div>
				<div className='right-side-wrapper'>

					<div className="main-col">
						<MegaCtaSimple text="Kitchen Sets" url="https://shopnewage.com/collections/kitchen-sets/" />
						<MegaCtaSimple text="Kitchen Backsplash" url="https://shopnewage.com/collections/kitchen-backsplash/" />
						<MegaCtaSimple text="Kitchen Countertops" url="https://shopnewage.com/collections/granite-countertops/" />
						<MegaCtaSimple text="Kitchen Sinks" url="https://shopnewage.com/collections/kitchen-sinks/" />
						<MegaCtaSimple text="Kitchen Faucet" url="https://shopnewage.com/collections/kitchen-faucets/" />
						<MegaCtaSimple text="Kitchen Cabinet Handles" url="https://shopnewage.com/collections/cabinet-hardware/" />
						<MegaCtaSimple text="Kitchen Cabinets" url="https://shopnewage.com/collections/kitchen-cabinets-pantry/" />
						<MegaCtaSimple text="Kitchen Organization" url="https://shopnewage.com/collections/kitchen-interior-cabinet-organizers/" />
						<MegaCtaSimple text="Pantry Cabinets" url="https://shopnewage.com/collections/kitchen-cabinets-pantry/" />
						<MegaCtaSimple text="Under Cabinet Lighting" url="https://shopnewage.com/collections/kitchen-lighting/" />
						<MegaCtaSimple text="Kitchen Remodel" url="/kitchen/" />
						<MegaCtaSimple text="Kitchen Lighting" url="https://shopnewage.com/collections/kitchen-lighting/" />
						<MegaCtaSimple text="Kitchen Flooring" url="https://shopnewage.com/collections/flooring/" />
					</div>
					<div className="main-col">
						<MegaCtaSimple text="Kitchen Design" url="/kitchen/kitchen-layout/" />
						<MegaCtaSimple text="Garbage Disposal" url="https://shopnewage.com/products/pull-out-bin-80671/" />
						<MegaCtaSimple text="Cabinets" url="https://shopnewage.com/collections/kitchen-cabinets-pantry/" />
						<MegaCtaSimple text="Stainless Steel Sink" url="https://shopnewage.com/collections/kitchen-sinks/" />
						<MegaCtaSimple text="Custom Cabinets" url="https://shopnewage.com/collections/cabinet-frames/" />
						{/* <div className="spacer"></div> */}

						<div className="menu-separator">
							<div className="grey">
								<MegaCtaInActive text="Inspiration" />
							</div>
							<MegaCtaSimple text="Cottage Kitchen" url="/all-spaces/residential-improvement/kitchen-solutions/cottage/" />
							<MegaCtaSimple text="Farmhouse Kitchen" url="/all-spaces/residential-improvement/kitchen-solutions/farmhouse/" />
							<MegaCtaSimple text="Traditional Kitchen" url="/all-spaces/residential-improvement/kitchen-solutions/traditional/" />
							<MegaCtaSimple text="Condo Kitchen" url="/all-spaces/residential-improvement/kitchen-solutions/condo/" />
						</div>
					</div>
				</div>

			</div>
		</Div>
	);
}

export default Kitchen;
