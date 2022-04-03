import FetchAsync from "../../components/APIFetching/FetchAsync";
import FetchPromise from "../../components/APIFetching/FetchPromise";
// import React from "react";
import React, { useRef, useEffect } from "react";

function Index() {
  // const reference = useRef(null);
  // console.log("reference check",reference)
  return (
    <div>
      <section className="content-fetching section-top-padding section-bottom-padding">
        <header>
          <h3 className="main-heading ff-psb first-content">
            Contents Fetching using Async Await() and Normal Function
          </h3>
        </header>
        <div className="FetchAsync">
          <header>
            <h3 className="main-heading ff-psb first-content">FetchAsync</h3>
          </header>
          <FetchAsync />
        </div>
        <div className="FetchPromise">
          <header>
            <h3 className="main-heading ff-psb first-content">FetchPromise</h3>
          </header>
          <FetchPromise />
        </div>
      </section>
    </div>
  );
}

export default Index;
