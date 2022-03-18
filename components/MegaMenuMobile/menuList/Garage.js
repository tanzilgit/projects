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

function Garage({ menuMob, setMenuMob }) {
	const [subMenuToggle, setSubMenuToggle] = useState(false);
	const [subMenu, setSubMenu] = useState(null)


	return (
		<Div>
			{
				
			}
			<div
				className="menu-name"
				onClick={() => setMenuMob("garage")}
			>
				{subMenuToggle && (
					<img src="/assets/mega-menu/left.png" className="left-img" alt="" />
				)}
				Garage! <div className="spacer"></div>
				{!subMenuToggle && <img src="/assets/mega-menu/right.png" alt="" />}
			</div>

			{/*  */}
			{
				menuMob == 'garage' &&
				<div onClick={() => setSubMenu("garage-cabinets")}>Garage Cabinets</div>
			}

			{subMenu === "garage-cabinets" && <>
				<div>1sasasasa</div>
				<div>2sasasasas</div>
				<div>2adadadd</div>
			</>}
		</Div>
	);
}

export default Garage;
