import MegaMenu from "@components/MegaMenu";
import MegaMenuMobile from "@components/MegaMenuMobile";
import device from "../../utils/mediaUtils";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { MyContextTheme } from "pages/_app";

const MegaMenuParent = styled.div`
  width: 100%;
  height: auto;
  background-color: #ccc;
  ${device.laptopB} {
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
  ${device.laptopB} {
    display: block;
    padding-bottom: 110px;
  }
`;

export default function index({ data }) {
  const [n, setN] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pageUrl, setPageUrl] = useState();

  const router = useRouter();

  

  // let flag = true;
  // if (flag) {
  // 	setTimeout(() => {
  // 		setUpdateVar((t) => t + 1);
  // 	}, 2000);

  // 	flag = false;
  // }
  
  return (
    <div>
		
      <MegaMenuParent>
        <MegaMenu
          n={n}
          setN={setN}
          loading={loading}
          setLoading={setLoading}
        />
      </MegaMenuParent>

      <MegaMenuParentMobile>
        <MegaMenuMobile
          n={n}
          setN={setN}
          loading={loading}
          setLoading={setLoading}
        />
      </MegaMenuParentMobile>
    </div>
  );
}
