import React from "react";
import Head from "next/head";
import NewSwagForm from "../components/NewSwagForm";

const Home = () => (
  <div>
    <Head>
      <title>FreeSwag@NU</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>

    <div className="hero">
      <NewSwagForm />
    </div>
  </div>
);

export default Home;
