const size = {
	mobileS: 320,
	mobileM: 375,
	mobileB: 420,
	mobileL: 425,
	tablet: 767,
	laptopS: 990,
	laptop: 1024,
	laptopM: 1170,
	laptopB: 1300,
	laptopL: 1420,
	desktop: 1700,
	desktopM: 1920,
	desktopL: 2560,
};

const device = Object.keys(size).reduce((acc, cur) => {
	acc[cur] = `@media (max-width: ${size[cur]}px)`;
	return acc;
}, {});

export default device;
