import { useState } from 'react';
import styled from 'styled-components';
import MobileMenuCTA from '../menuCta/MobileMenuCTA';
import MobileMenuCTAmain from '../menuCta/MobileMenuCTAmain';

const Div = styled.div`
	.menu-name {
		font-size: 18px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'ProximaNova Semi Bold';
		height: 45px;
		transition: 0.5s;
		.spacer {
			flex: 1;
		}
		.left-img {
			margin-right: 10px;
		}
	}
`;

function Flooring() {
	const [subMenuToggle, setSubMenuToggle] = useState(false);
	return (
		<Div>
			<div
				className="menu-name"
				onClick={() => setSubMenuToggle(!subMenuToggle)}
			>
				{subMenuToggle && (
					<img src="/assets/mega-menu/left.png" className="left-img" alt="" />
				)}
				Flooring <div className="spacer"></div>
				{!subMenuToggle && <img src="/assets/mega-menu/right.png" alt="" />}
			</div>
			{subMenuToggle && (
				<div className="sub-menu-list">
					{/* <MobileMenuCTAmain text="Flooring " url="/" /> */}
					<MobileMenuCTA text="Luxury Vinyl Plank" url="/" />
					<MobileMenuCTA text="Luxury Vinyl Plank" url="/" />
				</div>
			)}
		</Div>
	);
}

export default Flooring;
