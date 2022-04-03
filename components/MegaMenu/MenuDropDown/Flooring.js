/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import device from '../../../utils/mediaUtils';
import MegaCtaInActive from '../MegaCtas/MegaCtaInActive';
import MegaCtaSimple from '../MegaCtas/MegaCtaSimple';
import MenuCtaHeader from '../MegaCtas/MenuCtaHeader';
import MenuCtaSubLink from '../MegaCtas/MenuCtaSubLink';
import Script from "next/script"

const Div = styled.div`
	position: absolute;
	top: 0;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
		0 1px 5px 0 rgb(0 0 0 / 20%);
	left: 465px;
	background-color: #fff;
	padding: 20px;
	width: auto;
	display: flex;
	${device.desktop} {
		/* width: 750px; */
		left: 420px;
	}
	${device.laptopL} {
		/* width: 700px; */
		left: 160px;
	}
`;

function Flooring() {
	return (
		<Div className="flooring-header-main ds-flex">

			<div className="ds-flex left-menu">
				<div className="first-col main-col">
					<div className="menu-separator">
						<MenuCtaHeader text="Flooring" url="/flooring/" />
						<MenuCtaSubLink
							text="Luxury Vinyl Plank"
							url="/flooring/luxury-vinyl-plank/"
						/>
						<MenuCtaSubLink
							text="Luxury Vinyl Tile"
							url="/flooring/luxury-vinyl-tiles/"
						/>
					</div>

					<div className="menu-separator">
						<MenuCtaHeader
							text="Room Visualizer"
							url="javascript: roomvo.startStandaloneVisualizer();"
						/>
					</div>
				</div>
				{/*  */}

				<div className="second-col main-col img-col">
					<div className="menu-separator ">
						<a href="#">
							<img
								src="/assets/mega-menu/flooring.PNG"
								alt=""
								className="header-img "
							/>
						</a>
					</div>
					<div className="menu-separator">
						<MenuCtaSubLink
							text="Why Buy From NewAge"
							url="/why-buy-from-newage/"
						/>
						{/* <MenuCtaSubLink text="Download Flooring Catalog" url="#" /> */}
						<MenuCtaSubLink
							text="Sample Kit"
							url="https://shopnewage.com/collections/flooring/products/flooring-sample-kit-12091"
						/>
						<MenuCtaSubLink
							text="Flooring Buying Guide"
							url="/flooring/flooring-buying-guide/"
						/>
						<MenuCtaSubLink
							text="Flooring Materials and Testing"
							url="/flooring/flooring-material-testing/"
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
						<MegaCtaSimple text="Flooring" url="/flooring/" />
						<MegaCtaSimple text="Garage Flooring" url="/flooring/" />
						<MegaCtaSimple text="Kitchen Flooring" url="/flooring/" />
						<MegaCtaSimple text="Indoor Flooring" url="/flooring/" />
						<MegaCtaSimple text="Home Flooring" url="/flooring/" />
						<MegaCtaSimple text="Vinyl Flooring" url="/flooring/" />
						<MegaCtaSimple text="Flooring Sample Kit" url="https://shopnewage.com/collections/flooring/products/flooring-sample-kit-12091" />
						<MegaCtaSimple text="Flooring Accessories" url="/flooring/" />
						<MegaCtaSimple text="Luxury Vinyl Planks" url="https://shopnewage.com/collections/lvp-flooring" />

						{/* <div className="spacer"></div> */}

						<div className="menu-separator">
							<div className="grey">
								<MegaCtaInActive text="Inspiration" />
							</div>
							<MegaCtaSimple text="Commercial Flooring" url="/flooring/commercial-flooring/" />
							<MegaCtaSimple text="Residential Flooring" url="/flooring/residential-flooring/" />
						</div>
					</div>
				</div>

			</div>
		</Div>
	);
}

export default Flooring;
