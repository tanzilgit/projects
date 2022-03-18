import React, { useState } from 'react';
import styled from 'styled-components';
import device from "../../utils/mediaUtils"
import Head from 'next/head';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const BlackBarMainDiv = styled.div`
	width: 100%;
	height: 100%;
	background: #000;
`;

const Div = styled.div`
	/* width: 100%; */
	width: 1640px;
	margin: 0 auto;
	height: 80px;
	background: #000;
	border-bottom: '1px solid #ccc';
	display: flex;
	/* justify-content: center; */
	justify-content: space-between;
	align-items: center;
	position: relative;
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

	.left-side {
		width: 175px;
	}
	.logo-img-box {
		/* width: 230px; */
		width: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		${device.desktop} {
			width: 180px;
		}
		${device.laptopM} {
			width: 150px;
			left: 45%;
		}
		img {
			width: 100%;
		}
	}
	.right-side {
		display: flex;
		color: #fff;
		.ds-flex {
			align-items: center;
		}
		.menu-black-title {
			font-size: 18px;
			letter-spacing: 1px;
			${device.laptopB} {
				height: 16px;
			}
			${device.laptopM} {
				font-size: 16px;
			}
		}
		img.menu-icons {
			width: auto;
			height: 30px;
			margin-right: 15px;
			${device.laptopB} {
				height: 21px;
				margin-right: 9px;
			}
		}
		a + a {
			margin-left: 30px;
		}
	}
`;

export const SearchIconDiv = styled.div`
	> img {
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
	position: relative;
	.search-container {
		position: relative;
		width: auto;
	}
	.search-icon {
		position: absolute;
		height: 100%;
		display: flex;
		align-items: center;
		right: unset;
		left: 5px;
	}
	.search-root {
		border: 1px solid #bbb;
		border-radius: 4px;
	}
	.search-input {
		padding: 10px 30px 10px 45px;
		width: 100px;
		transition: all 200ms;
		color: #fff;
		&:focus,
		&:active {
			width: 250px;
		}
	}
	.result-container {
		position: absolute;
		z-index: 100;
		width: 350px;
		margin-left: -25px;
		margin-top: 10px;
		background: #fff;
		border: 1px solid #ccc;
		.category {
			padding: 10px;
			font-size: 14px;
			color: grey;
			font-weight: 500;
		}
		.result-item-container {
			.result-item {
				display: flex;
				padding: 15px 10px;
				align-items: center;
				cursor: pointer;
				&:hover {
					background: #eee;
				}
				.title {
					font-size: 15px;
					padding-left: 10px;
					font-weight: 'ProximaNova Semi Bold';
					letter-spacing: 1;
				}
				.hr {
					margin: 0;
				}
			}
			.page-item {
				color: #000;
				text-transform: capitalize;
				cursor: pointer;
				padding: 5px;
				&:hover {
					background: #eee;
				}
			}
		}
	}
`;

function BlackBar() {
	return (
		<>
		
			<BlackBarMainDiv className="BlackBarMainDiv">
				<Div>
					{/* Left Side Black Menu Details */}
					{/* <div> */}

					{/* <div className='left-side-wrapper'> */}
					<div className="left-side">
						<SearchIconDiv className="hello" style={{ position: 'relative' }}>
							{/* <Link href="/search"> */}
							<div className="search-container">
								<div className="search-icon">
									<SearchIcon
										fontSize="large"
										style={{ color: '#FFF', position: 'absolute', left: '0' }}
									/>
								</div>
								<form
									role="search"
									method="get"
									className="usu search-form blog-id-is-1"
									action="https://shopnewage.com/collections/search-results"
								>
									<InputBase
										classes={{
											root: 'search-root',
											input: 'search-input',
										}}
										inputProps={{ 'aria-label': 'search' }}
										type="search"
										id=""
										className="search-field search__inputs input"
										placeholder="e.g Outdoor Kitchen"
										autoCapitalize="off"
										autoComplete="off"
										autoCorrect="off"
										name="q"
									/>
								</form>
							</div>
						</SearchIconDiv>
					</div>
					{/* </div> */}

					{/* </div> */}
					{/* Logo */}
					<div className="logo-img-box">
						<a href="/ca/">
							<img src="/assets/mega-menu/nap-logo-black-back.PNG" alt="" />
						</a>
					</div>

					{/* Right Side Black Menu Details */}
					<div className="right-side">
						<a href="/ca/track-shipment/">
							<div className="ds-flex">
								<img
									src="/assets/mega-menu/order-status.jpg"
									alt=""
									className="menu-icons"
								/>
								<span className="ff-psb fc-white menu-black-title">
									Order Status
								</span>
							</div>
						</a>
						<a href="https://ca.shopnewage.com/cart/">
							<div className="ds-flex">
								<img
									src="/assets/mega-menu/cart.jpg"
									alt=""
									className="menu-icons"
								/>
								<span className="ff-psb fc-white menu-black-title">
									My Cart
								</span>
							</div>
						</a>
						<a href="https://ca.shopnewage.com/account/login/">
							<div className="ds-flex">
								<img
									src="/assets/mega-menu/account.jpg"
									alt=""
									className="menu-icons"
								/>
								<span className="ff-psb fc-white menu-black-title">
									My Account
								</span>
							</div>
						</a>
					</div>
				</Div>
			</BlackBarMainDiv>
		</>
	);
}

export default BlackBar;
