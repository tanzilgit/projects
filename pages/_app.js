import Header from "../components/Header";
import MegaMenu from "../components/MegaMenu";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles/mega.css";
import "../styles/crm.css";
import SimpleAccordion from "../components/Accordion";
import BackToTop from "../components/BackToTop";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <MegaMenu /> */}

      {/* <Header /> */}
      <Component {...pageProps} />
      <BackToTop />
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
