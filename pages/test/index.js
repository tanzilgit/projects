import { FetchAsync } from "@components/FetchAsync";
import FetchPromise from "@components/FetchPromise";
import React, { useState } from "react";
import styled from "styled-components";


const ParentContainer = styled.div`
  .normal {
    font-size: 20px;
    padding: 20px;
    background-color: red;
  }
  .activeClass {
    background-color: green;
  }
`;

const Tab = styled.button`
  font-size: 20px;
  padding: 20px;
  background: ${(props) => (props.styleActiveProp ? "green" : "red")};
`;

const Test = () => {
  const [active, setActive] = useState("first");
  const [classState, setClassState] = useState("one");

  

  return (
    <ParentContainer>
      <h1>Fetch Async Await Method</h1>
      <FetchAsync/>

      <h1>Fetch Promise .then method</h1>

      <FetchPromise/>
      <h1>Using Styled Component props </h1>
      <Tab
        styleActiveProp={active === "first" ? 1 : 0}
        onClick={() => setActive("first")}
      >
        First
      </Tab>
      <Tab
        styleActiveProp={active === "second" ? 1 : 0}
        onClick={() => setActive("second")}
      >
        Second
      </Tab>
      <h1>Using Class : Adding CSS under Parent Styled Component </h1>
      <button className={classState === "one" ? "activeClass normal" : "normal"} onClick={()=>setClassState("one") }>
        One
      </button>
      <button className={classState === "two" ? "activeClass normal" : "normal"} onClick={()=>setClassState("two") }>
        Two
      </button>
      
    </ParentContainer>
  );
};

export default Test;
