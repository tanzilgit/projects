import Header from "../components/Header";
import MegaMenu from "../components/MegaMenu";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles/mega.css";
import SimpleAccordion from "../components/Accordion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <MegaMenu /> */} 

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Header>
//       <Component {...pageProps} />
//     </Header>
//   )
// }
