import { NAPContainer } from "@components/CommonComponents";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { propData: data },
  };
};

const DynamicRoute = ({ propData }) => {
  
  return (
    <div>
      <NAPContainer direction="column">
        {propData.map((item) => (
          <div key={item.id}>
            <Link href={`/dynamic-routing/${item.id}`} >
              {/* <Link href={`/dynamic-routing/` + item.id} key={item.id}> */}
              <a>
                <h1 className="main-heading ff-psb">{item.name}</h1>
              </a>
            </Link>
          </div>
        ))}
      </NAPContainer>
    </div>
  );
};
export default DynamicRoute;
