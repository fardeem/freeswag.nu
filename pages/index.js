import React from "react";
import Head from "next/head";
import NewSwagForm from "../components/NewSwagForm";
import Header from "../components/Header";
import SwagList from "../components/SwagList";

const Home = () => (
  <>
    <Head>
      <title>FreeSwag@NU</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>

    <main>
      <Header />

      <SwagList />
    </main>
  </>
);

export default Home;
