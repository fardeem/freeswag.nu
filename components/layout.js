import React from "react";
import Head from "next/head";
import Header from "../components/Header";

const Layout = ({ children }) => (
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

      {children}

      <footer>
        <img src="/static/wildcat.png" />
      </footer>
    </main>
  </>
);

export default Layout;
