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

  /* can be done with var as its is MUTABLE */
  // var title;
  // var title;
  // var a = 10;
  //     a = 15; 

  /* cannot be done with let in same block scope as let is IMMUTABLE */
  // let title2;
  // let title2;

  /* LET, can reassign same variable as they are in same block scope (PARTIAL IMMUTABLE)*/
  // let a = 10;
  //     a = 15;

  /* can be done with let as both variables are in different blockS */
  // let title3;
  // {
  //   let title3;
  // }

  /* CONST cannot be empty, if initialized, then it should have some value */
  // const title4; // error

  /* cannot be done with const in same block scope CONST is IMMUTABLE */
  // const title5 = "Hello";
  // const title5 = "Whats up!"

  /* can be done with CONST as both variables are in different blockS */

  // const title6 = 'Good Morning';
  // {
  //   const title6 = 'Good AfterNoon';
  // }

  /* var initialized and declared in anywhere will have the latest value*/

  var age1; //initialized only
  console.log("AGE", age1); // undefined
  {
    var age1 = "10";
    console.log("AGE", age1); // 10
  }
  console.log("AGE", age1); // 10

  /* let initialized and value assigned in other scope / block will have the latest value even outside the scope since its not reinitialized with 
  new value in others scope, its using the same as initialized earlier*/

  let age2; //initialized only
  console.log("AGE", age2); // undefined
  {
    age2 = "10";
    console.log("AGE", age2); // 10
  }
  console.log("AGE", age2); // 10

  /* let initialized in once scope and again initialized in other scope with same declare name*/
  let age3; //initialized only
  console.log("AGE", age3); // undefined
  {
    let age3 = "10";
    console.log("AGE", age3); // 10
  }
  console.log("AGE", age3); // undefined

  // Var Console
  console.log("Var CONSOLEEEEEEEEEEEEEEEEE");
  var city1 = "Mumbai";
  console.log("First", city1); // Mumbai
  {
    city1 = "Delhi";
    // var city1 = "Delhi"; same as line 190 = no error as var as mutable (can be changed in the function scoped)
    console.log("In Block", city1); // Delhi
  }

  console.log("Outer", city1); // Delhi

  // Let Console 2
  console.log(
    "Let CONSOLEEEEEEEEEEEEEEEEE with updating outer scope declaration and updating it in scope and block"
  );

  {
    let city2 = "Mumbai";
    console.log("First", city2); // Mumbai
    city2 = "Kolkata";
    console.log("Second", city2); // Kolkata

    {
      city2 =
        "Delhi"; /*let is partial mutable, here city2 is not initialized but updated and they all are in one common scope / block so the outer
                       city2 will also be Delhi */
      console.log("In Block", city2); // Delhi
    }
    console.log("Outer", city2); // Delhi
  }

  // Let Console 3
  console.log(
    "Let CONSOLEEEEEEEEEEEEEEEEE with same declaration in and outside scope and block"
  );
  let city3 = "Mumbai";
  console.log("First", city3); // Mumbai
  city3 = "Kolkata";
  console.log("Second", city3); // Kolkata

  {
    let city3 =
      "Delhi"; /* Here city3 is initialized but in different scope / block, so it not update city3 but use city3 as declaration in its own scope */
    console.log("In Block", city3); // Delhi
  }

  console.log("Outer", city3); // Mumbai

  return (
    <div>
      <NAPContainer>
        <h1 className="main-heading ff-psb">Welcome {datas.name}</h1>
      </NAPContainer>
    </div>
  );
};

export default IndividualDynamicPage;
