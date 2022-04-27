import { React, useState, useEffect } from "react";
import styled from "styled-components";

// const Tab = styled.button`
//   text-align: center;
//   padding: 16px;
//   font-size: 14px;
//   text-transform: uppercase;
//   margin: 10px;
//   border-radius: 5px;
//   font-family: "ProximaNova Semi Bold";
//   letter-spacing: 0.35px;
//   min-width: 140px;
//   cursor: pointer;
//   padding: 13px 10px;
//   background: ${(props) => (props.active ? "#0072bc" : "#e1e1e1")};
//   color: ${(props) => (props.active ? "#fff" : "#000")};
//   border: none;

//   ${device.tablet} {
//     margin: 0;
//   }
// `;

const ParentDiv = styled.div`
  /* .tabs-container .tab {
    padding: 10px 30px;
    margin: 0 20px;
    font-size: 12px;
    color: gray;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-family: "ProximaNova Semi Bold";
    cursor: pointer;
  }
  .tabs-container .activeTab {
    background: #ccc;
    color: #000;
  } */
`;

export default function StockData() {
  // const [tab, setTab] = useState("9.5");
  // const [activeTab, setActiveTab] = useState("vision");
  /* */
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState();

  const add = () => {
    setTotal(parseInt(number1) + parseInt(number2));
    console.log("Addition", total);
  };
  const subtract = () => {
    setTotal(number1 - number2);
  };
  const multiply = () => {
    setTotal(number1 * number2);
  };
  const divide = () => {
    setTotal(number1 / number2);
  };

  return (
    <ParentDiv>
      <div className="layout-column align-items-center mt-50">
        {/* <h1>{number1}</h1> */}
        <input
          type="number"
          placeholder="Enter Number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
        <button
          onClick={() => {
            setNumber1("");
            setNumber2("");
            setTotal("");
          }}
        >
          Reset
        </button>
        <h1>Result : {total}</h1>

        {/*************************************** With className active state of buttons or anything ***************************************/}

        {/* <div
        className={tab === "9.5" ? "activeTab tab" : "tab"}
        onClick={() => setTab("9.5")}
      >
        9.5 MM PLANKS
      </div>
      <div
        className={tab === "5" ? "activeTab tab" : "tab"}
        onClick={() => setTab("5")}
      >
        5 MM PLANKS
      </div> */}

        {/*************************************** With styled components active state of buttons or anything ***************************************/}
        {/* <Tab
        active={activeTab === "vision" ? 1 : 0}
        onClick={() => setActiveTab("vision")}
      >
        Our Vision
      </Tab>
      <Tab
        active={activeTab === "values" ? 1 : 0}
        onClick={() => setActiveTab("values")}
      >
        Our Values
      </Tab>
      <Tab
        active={activeTab === "mission" ? 1 : 0}
        onClick={() => setActiveTab("mission")}
      >
        Our Mission
      </Tab> */}
      </div>
    </ParentDiv>
  );
}
