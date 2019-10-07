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

    <style jsx>{`
      footer img {
        display: block;
        max-width: 400px;
        margin: 0 auto;
        padding: 2rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
      }
    `}</style>

    <main>
      <Header />

      <SwagList />

      <footer>
        <img src="/static/wildcat.png" />
      </footer>
    </main>
  </>
);

export default Home;
