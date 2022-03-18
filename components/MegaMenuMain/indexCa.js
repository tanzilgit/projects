import MegaMenuCa from '@components/MegaMenu/indexCa';

import MegaMenuMobile from '@components/MegaMenuMobile';
import MegaMenuMobileCa from '@components/MegaMenuMobile/indexCa';
import device from "../../utils/mediaUtils"
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const MegaMenuParent = styled.div`
	width: 100%;
	height: auto;
	background-color: #ccc;
	${device.laptop} {
		display: none;
	}
	.link-block {
		margin: 700px 50px;
	}
`;
const MegaMenuParentMobile = styled.div`
	display: none;
	position: relative;
	.back-drop {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		background-color: rgb(0 0 0 / 21%);
	}
	${device.laptop} {
		display: block;
		padding-bottom: 110px;
	}
`;

export default function index({ data }) {
	const [n, setN] = useState(0);
	const [loading, setLoading] = useState(false);
	const [pageUrl, setPageUrl] = useState();
	const [updateVar, setUpdateVar] = useState(1);

	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			setUpdateVar((t) => t + 1);
		}, 2000);
	}, []);
	
	
	return (
		<div>
			{/* <Head>
				<title>{data?.metaID ? data?.metaTitle : 'NewAge Products'}</title>

				<link
					rel="canonical"
					href={
						pageUrl == data?.metaID
							? `https://newageproducts.com${data?.metaID}`
							: 'https://newageproducts.com/'
					}
				/>
				<meta
					name="robots"
					content={
						data?.metaIndexing == 'Indexable' ? 'index' : 'noindex, nofollow'
					}
				/>

				<meta
					name="description"
					content={
						data?.metaDescription != null
							? data?.metaDescription
							: 'Organize and enjoy your space with premium NewAge home improvement products. Modular designs make it easy to create customized storage solutions for garage, kitchen, outdoor kitchen, home bar and more.'
					}
				/>

				<meta property="og:locale" content="en_US" />
				<meta
					name="og:type"
					content={
						pageUrl == data?.metaID ? data?.metaType : 'NEWAGE META Type'
					}
				/>
				<meta
					property="og:title"
					content={
						pageUrl == data?.metaID ? data?.metaTitle : 'NewAge Products'
					}
				/>
				<meta
					property="og:description"
					content={
						data?.metaDescription != null
							? data?.metaDescription
							: 'Organize and enjoy your space with premium NewAge home improvement products. Modular designs make it easy to create customized storage solutions for garage, kitchen, outdoor kitchen, home bar and more.'
					}
				/>

				<meta
					property="og:url"
					content={
						pageUrl == data?.metaID
							? `https://newageproducts.com${data?.metaID}`
							: 'https://newageproducts.com/'
					}
				/>
				<meta property="og:site_name" content="NewAge Products (US)" />

				
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:description"
					content={
						pageUrl == data?.metaID
							? data?.metaTwitterDescription
							: 'NewAge Products'
					}
				/>
				<meta
					name="twitter:title"
					content={
						pageUrl == data?.metaID ? data?.metaTwitterTitle : 'NewAge Products'
					}
				/>
			</Head> */}
			
			<MegaMenuParent>
				<MegaMenuCa
					n={n}
					setN={setN}
					loading={loading}
					setLoading={setLoading}
				/>
			</MegaMenuParent>

			<MegaMenuParentMobile>
				<MegaMenuMobileCa
					n={n}
					setN={setN}
					loading={loading}
					setLoading={setLoading}
				/>
			</MegaMenuParentMobile>
		</div>
	);
}
