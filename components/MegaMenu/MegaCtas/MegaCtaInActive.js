import React from 'react';
import styled from 'styled-components';
import device from "../../../utils/mediaUtils"

const CtaStyle = styled.span`
	display: block;
	color: #a6b1bd;
	font-family: 'ProximaNova Semi Bold';
	font-size: 18px;
	letter-spacing: 1px;
	${device.desktop} {
		font-size: 16px;
	}
	${device.laptopL} {
		font-size: 14px;
	}
`;
function MegaCtaInActive({ text }) {
	return (
		<div className="MegaCtaInActiveWrapper">
			<CtaStyle> {text} </CtaStyle>
		</div>
	);
}

export default MegaCtaInActive;
