import React from 'react';
import styled from 'styled-components';
import device from '../../../utils/mediaUtils';

const CtaStyle = styled.a`
	display: block;
	color: #0c0c0c;
	font-family: 'ProximaNova Regular';
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
function MegaCtaSimple({ text, url }) {
	return (
		<div className="MegaCtaSimpleWrapper">
			<CtaStyle href={url}> {text} </CtaStyle>
		</div>
	);
}

export default MegaCtaSimple;
