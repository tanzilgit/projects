import React from 'react';
import styled from 'styled-components';
import device from "../../../utils/mediaUtils"

const CtaStyle = styled.a`
	display: block;
	color: #000;
	font-family: 'ProximaNova Semi Bold';
	font-size: 16px;
	${device.desktop} {
		font-size: 14px;
	}
	${device.laptopL} {
		font-size: 14px;
	}
	&:hover {
		color: #0072bc;
	}
`;

function MenuCtaSubLink({ text, url }) {
	return (
		<div className="MenuCtaSubLinkWrapper">
			<CtaStyle href={url}> {text} </CtaStyle>
		</div>
	);
}

export default MenuCtaSubLink;
