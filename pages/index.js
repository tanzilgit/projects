import Head from "next/head";
import Image from "next/image";
import BannerSwatch from "../components/BannerSwatch";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import MegaMenu from "../components/MegaMenu";
// import styles from "../styles/Home.module.css";
import styled from "styled-components";
import GridRowItems from "../components/GridRowItems";
import Slider from "react-slick";

const IndexWrapper = styled.div`
  header {
    margin-bottom: 30px;
  }
  /*  */
`;

export default function Home() {
  
  const YMAL = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 767,
      },
    ],
  };

  // Image Swatch Change, Datas
  const Data1 = {
    heading: <>FrameWorks </>,
    // description: (
    //   <>
    //     <ul>
    //       <li>ReactJS</li>
    //       <li>NextJS</li>
    //       <li>WordPress</li>
    //     </ul>
    //   </>
    // ),
    types: [
      {
        swatch_color: "/assets/bannerSwatch/reactjs-icon.png",
        image_url: "/assets/bannerSwatch/reactjs.jpg",
        // mobile_image_url: "/assets/mobile/shaker-bar-cabinets-grey.jpg",
      },
      {
        swatch_color: "/assets/bannerSwatch/nextjs-icon-2.png",
        image_url: "/assets/bannerSwatch/nextjs.jpg",
        // mobile_image_url: "/assets/mobile/shaker-bar-cabinets-grey.jpg",
      },
      {
        swatch_color: "/assets/bannerSwatch/wp-icon.png",
        image_url: "/assets/bannerSwatch/wp-banner.png",
        // mobile_image_url: "/assets/mobile/shaker-bar-cabinets-white.jpg",
      },
    ],
  };
  return (
    <IndexWrapper className="">
      <Head>
        <title>WorkBase!!!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MegaMenu />
      <Header />

      <HeroBanner />

      {/*  */}
      <GridRowItems className="quality-cabinets inspiration">
        <Slider {...YMAL} className="three-way-layout">
          <div className="first">
            <Image
              src="/assets/bannerSwatch/reactjs.jpg"
              width={525}
              height={375}
              alt=""
            />
            <p className="category-sub-heading">
              Durable construction stands up to everyday use with an easy-clean,
              stain-resistant finish.
            </p>
          </div>
          <div className="second">
            <Image
              src="/assets/bannerSwatch/reactjs.jpg"
              width={525}
              height={375}
              alt=""
            />
            <p className="category-sub-heading">
              Thick 18mm frames provide a sturdy foundation for years of
              dependable performance.
            </p>
          </div>
          <div className="third">
            <Image
              src="/assets/bannerSwatch/reactjs.jpg"
              width={525}
              height={375}
              alt=""
            />
            <p className="category-sub-heading">
              Our pre-configured sets include everything you need to complete
              your design. Plus they arrive fully assembled and ready to
              install.
            </p>
          </div>
        </Slider>
      </GridRowItems>
      {/*  */}

      {/*  */}
      <section className="bannerSwatch section-top-padding">
        <BannerSwatch {...Data1} flex_direction="column" />
      </section>
      {/*  */}
    </IndexWrapper>
  );
}
