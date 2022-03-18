import React from 'react';
import styled from 'styled-components';

const CtaStyle = styled.a`
	font-family: 'ProximaNova Semi Bold';
	font-size: 18px;
	display: flex;
	align-items: center;

	height: 50px;
	color: #fff;
	.spacer {
		flex: 1;
	}
	.icon {
		margin-right: 15px;
		/*  */
		width: 40px;
    	height: 35px;
	}
`;

function MobileMenuCTAIcon({ text, url, iconImg, ...otherProps }) {
	return (
		<div className="MenuCtaHeaderWrapper" {...otherProps}>
			<CtaStyle href={url} >
				<img src={iconImg} alt="" className="icon" />
				{text} <div className="spacer"></div>
				{/* <img src="/assets/mega-menu/right-black.png" alt="" /> */}
				<img src="/assets/mega-menu/next-white.jpg" alt="" />
			</CtaStyle>
		</div >
	);
}

export default MobileMenuCTAIcon;
