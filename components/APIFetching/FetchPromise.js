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

function FetchPromise() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchPromiseAxios();
  }, []);

  const fetchPromiseAxios = () => {
    axios
      .get("https://shopnewage.com/collections/garage/products.json")
      .then((res) => {
        setItems(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("AXIOS PROMISE", items);

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

export default FetchPromise;
