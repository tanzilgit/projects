import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const Div = styled.div`
	position: absolute;
	right: 10px;
	top: 4px;

	z-index: 11;

	.flag-box {
		color: #fff;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		cursor: pointer;
		letter-spacing: 2px;
		height: 28px;
		justify-content: center;
		width: 80px;
		border: 1px solid #3e3e3e;
		border-bottom: 0;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		background-color: #1a1a1a;
		z-index: 20;

		font-size: 14px;
		img {
			margin-right: 5px;
			height: 12px;
		}
		span {
			&::after {
				content: '>';
				border-radius: 3px;
				top: -2px;
				font-size: 11px;
				transform: scaleY(1.3) scaleX(3) scale(0.6) rotate(90deg) !important;
				left: 2px;
				display: inline-block;
				position: relative;
				padding: 0 6px;
				color: #9f9f9f;
			}
		}
	}
	.sub {
		position: relative;

		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 6px;
		border-bottom-left-radius: 6px;
		border: 1px solid #3e3e3e;
		border-top: 0;
		z-index: -1;
		transition: 0.5s;
		top: -25px;
		span {
			&::after {
				color: transparent;
			}
		}
	}
	.toggleOn {
		top: 0;
	}
`;

function CountryToggler({ ...otherProps }) {
	const [country, setCountry] = useState(() => true);
	const [toggleOn, setToggleOn] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (router.pathname.includes('/ca/')) {
			setCountry(false);
		} else {
			setCountry(true);
		}
	}, [toggleOn]);
	function countryPageLoader(data) {
		console.log(router);
		if (toggleOn) {
			if (country) {
				if (data == 'ca') {
					console.log('ca');
					setCountry(false);
					window.location.replace('/ca/');
				}
			}

			if (!country) {
				if (data == 'us') {
					console.log('us');
					setCountry(true);
					window.location.replace('/');
				}
			}
		}
	}
	return (
		<Div
			{...otherProps}
			onClick={() => {
				setToggleOn(!toggleOn);
			}}
		>
			{country && (
				<>
					<div
						className="flag-box "
						onClick={() => {
							countryPageLoader('us');
						}}
					>
						<img src="/assets/mega-menu/us-flag.png" alt="" />
						<span>us</span>
					</div>
					<div
						className="flag-box sub"
						onClick={() => {
							countryPageLoader('ca');
						}}
						className={toggleOn ? 'flag-box sub toggleOn' : 'flag-box sub'}
					>
						<img src="/assets/mega-menu/canada-flag.png" alt="" />
						<span>ca</span>
					</div>
				</>
			)}
			{!country && (
				<>
					<div
						className="flag-box "
						onClick={() => {
							countryPageLoader('ca');
						}}
					>
						<img src="/assets/mega-menu/canada-flag.png" alt="" />
						<span>ca</span>
					</div>
					<div
						className="flag-box sub"
						onClick={() => {
							countryPageLoader('us');
						}}
						className={toggleOn ? 'flag-box sub toggleOn' : 'flag-box sub'}
					>
						<img src="/assets/mega-menu/us-flag.png" alt="" />
						<span>us</span>
					</div>
				</>
			)}
		</Div>
	);
}

export default CountryToggler;
