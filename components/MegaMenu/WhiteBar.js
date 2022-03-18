import React from 'react';
import styled from 'styled-components';
import device from '../../utils/mediaUtils';

const Div = styled.div`
	width: 100%;
	height: 70px;
	background-color: #fff;
	border-bottom: 1px solid #000;
	.mega-menu-container {
		width: 1640px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: space-between;
		${device.desktop} {
			width: 1400px;
		}
		${device.laptopL} {
			width: 1280px;
		}
		${device.laptopB} {
			width: 1150px;
		}
		${device.laptopM} {
			width: 1000px;
		}

		.menu-box {
			padding: 0 40px;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 20px;
			font-family: ProximaNova Semi Bold;
			letter-spacing: 1px;
			text-align: center;
			border-radius: 5px;
			cursor: pointer;

			&:hover {
				background-color: #f5f6f6;
			}
			${device.desktop} {
				padding: 0 15px;
				font-size: 18px;
			}
			${device.laptopB} {
				padding: 0 20px;
				font-size: 16px;
			}
		}
		.menu-box.active {
			background-color: #f5f6f6;
		}
		.red {
			color: #ff0000;
			&:hover {
				background-color: #ff0000;
				color: #fff;
			}
		}
		.red.active {
			background-color: #ff0000;
			color: #fff;
		}
	}
`;

function WhiteBar({ megaMenuDropDownHandler, dropDown }) {
	return (
		<Div>
			<div className="mega-menu-container">
				<div
					className={dropDown[0] ? 'menu-box active' : 'menu-box'}
					onClick={() => megaMenuDropDownHandler(0)}
				>
					Garage
				</div>
				<div
					className={dropDown[1] ? 'menu-box active' : 'menu-box'}
					onClick={() => megaMenuDropDownHandler(1)}
				>
					Outdoor
				</div>
				<div
					className={dropDown[2] ? 'menu-box active' : 'menu-box'}
					onClick={() => megaMenuDropDownHandler(2)}
				>
					Kitchen
				</div>
				<div
					className={dropDown[3] ? 'menu-box active' : 'menu-box'}
					onClick={() => megaMenuDropDownHandler(3)}
				>
					Home
				</div>
				<div
					className={dropDown[4] ? 'menu-box active' : 'menu-box'}
					onClick={() => megaMenuDropDownHandler(4)}
				>
					Flooring
				</div>
				<div
					className={dropDown[5] ? 'menu-box red active' : 'menu-box red'}
					onClick={() => megaMenuDropDownHandler(5)}
				>
					SALE
				</div>
				<div
					className={dropDown[6] ? 'menu-box active' : 'menu-box'}
					onClick={() => megaMenuDropDownHandler(6)}
				>
					Services
				</div>
				
			</div>
		</Div>
	);
}

export default WhiteBar;
