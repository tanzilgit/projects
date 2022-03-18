import React from 'react';
import styled from 'styled-components';
import device from "../../../utils/mediaUtils"

const CtaStyle = styled.a`
	display: block;
	color: #0072bc;
	font-family: 'ProximaNova Semi Bold';
	font-size: 18px;
	${device.desktop} {
		font-size: 16px;
	}
	${device.laptopL} {
		font-size: 14px;
	}

	&::after {
		content: '\f054';
		font-family: FontAwesome;
		padding-left: 2px;
		left: 0px;
		font-size: 7px;
		top: -2px;
		position: relative;
		-webkit-transition: all 0.2s;
		transition: all 0.2s;
	}
	&:hover:after {
		position: relative;
		left: 3px;
	}
`;

function MenuCtaHeader({ text, url }) {
	return (
		<div className="MenuCtaHeaderWrapper">
			<CtaStyle href={url}> {text} </CtaStyle>
		</div>
	);
}

export default MenuCtaHeader;
