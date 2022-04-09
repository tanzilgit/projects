import { NAPContainer } from "@components/CommonComponents";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { datas: data },
  };
};

const IndividualDynamicPage = ({ datas }) => {
  // const arr1 = ["My","Name","is","Tanzil"];
  // console.log("Array 1",arr1)

  // const arr2 = [...arr1]
  // console.log(arr2)
  return (
    <div>
      <NAPContainer>
        <h1 className="main-heading ff-psb">{datas.name}</h1>
      </NAPContainer>
    </div>
  );
};

export default IndividualDynamicPage;
