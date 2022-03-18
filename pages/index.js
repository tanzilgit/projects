import Head from "next/head";
import Image from "next/image";
import HeroBanner from "../components/HeroBanner";
import MegaMenu from "../components/MegaMenu";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>WorkBase!!!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MegaMenu />
      <HeroBanner />
    </div>
  );
}
