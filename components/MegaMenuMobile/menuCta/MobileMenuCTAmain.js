import React from 'react';
import styled from 'styled-components';

const CtaStyle = styled.a`
	color: #0072bc;
	font-family: 'ProximaNova Semi Bold';
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 45px;
`;

function MobileMenuCTAmain({ text, url }) {
	return (
		<div className="MenuCtaHeaderWrapper">
			<CtaStyle href={url}>
				{text} <img src="/assets/mega-menu/right-active.png" alt="" />
			</CtaStyle>
		</div>
	);
}

export default MobileMenuCTAmain;
