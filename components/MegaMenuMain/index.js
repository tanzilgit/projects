import MegaMenu from "../MegaMenu";
import device from "../../utils/mediaUtils";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

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

export default function Index() {
  const [n, setN] = useState(0);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  console.log("DEMOOOOOOOOOOOOOOO", n);
  
  return (
    <div>
      <MegaMenuParent>
        <MegaMenu n={n} setN={setN} loading={loading} setLoading={setLoading} />
      </MegaMenuParent>

      {/* <MegaMenuParentMobile>
        <MegaMenuMobile
          pinCodeModal={pinCodeModal}
          setPinCodeModal={setPinCodeModal}
          pinCode={pinCode}
          setPinCode={setPinCode}
          n={n}
          pinCodeError={pinCodeError}
          setPinCodeError={setPinCodeError}
          setN={setN}
          loading={loading}
          setLoading={setLoading}
          storePinCode={storePinCode}
          handleZipcodeChange={handleZipcodeChange}
        />
      </MegaMenuParentMobile> */}
    </div>
  );
}
