/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const FetchAsyncWrapper = styled.div`
  .ds-flex {
    display: flex;
  }
  .content-wrapper {
    text-align: center;
  }
  .img-wrapper img {
    width: 100%;
  }
`;

function FetchAsync() {
  const [items, setItems] = useState([]);

  //   useEffect(() => {}, []);
  useEffect(() => {
    fetchAsyncAxios();
  }, []);

  const fetchAsyncAxios = async () => {
    try {
      const result = await axios.get("https://shopnewage.com/collections/garage/products.json");
      //    const result2 = await axios.get('2 api');
      //    const result3 = await axios.get('3 api');

      // etc
      setItems(result.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(items);

  return (
    <FetchAsyncWrapper>
      <div className="ds-flex">
        {items.map((item, index) => (
          <div className="individual-item-wrapper" key={index}>
            <div className="img-wrapper">
              <img src={item?.variants[index]?.featured_image.src} alt="" />
            </div>
            <div className="content-wrapper second-content">
              <p key={index}>{item?.variants[index]?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </FetchAsyncWrapper>
  );
}

export default FetchAsync;
