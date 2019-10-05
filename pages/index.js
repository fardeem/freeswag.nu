import React from "react";
import Head from "next/head";
import NewSwagForm from "../components/NewSwagForm";
import Header from "../components/Header";

const Home = () => (
  <>
    <Head>
      <title>FreeSwag@NU</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>

    <main>
      <Header />

    </main>
  </>
);

export default Home;
