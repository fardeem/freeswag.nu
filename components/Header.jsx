import React from "react";
import Head from "next/head";

const Header = () => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap"
        rel="stylesheet"
      />
    </Head>

    <style jsx global>{`
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        color: white;
        letter-spacing: 0.1rem;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
      }

      ul {
        padding: 0;
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: normal;
        margin-top: 0;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      th,
      td {
        text-align: left;
        vertical-align: top;
      }

      img,
      iframe {
        border: 0;
      }

      body {
        background: #262c3e;
      }

      .container {
        width: 100%;
        padding: 1rem 2rem;
        max-width: 1000px;
        margin: 0 auto;
      }
    `}</style>

    <style jsx>{`
      .header {
        position: relative;
      }

      .header__decor {
        position: absolute;
        z-index: -1;
      }

      .header__logo {
        color: white;
        font-size: 1em;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        font-weight: 600;
        margin: 0;
      }

      .header__btn {
        display: inline-block;
        padding: 0.2rem 0.6em;
        background: white;
        border-radius: 5px;
        color: black;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.05rem;
      }

      .hero {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .nav {
        text-align: right;
      }

      .nav a {
        color: white;
        text-decoration: none;
        display: block;
        opacity: 0.8;
        transition: opacity 0.5s;
      }

      .nav a:hover {
        opacity: 1;
      }
    `}</style>

    <header className="header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="header__decor"
      >
        <path
          fill="#5C3B83"
          fill-opacity="1"
          d="M0,224L120,208C240,192,480,160,720,176C960,192,1200,256,1320,288L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <div className="container">
        <div className="hero">
          <a href="/">
            <h1 className="header__logo">Free Swag @ NU</h1>
          </a>
          <a href="/post" className="header__btn">
            Post Swag
          </a>
        </div>

        <nav className="nav">
          <a href="/items">All Items</a>
          <a href="/map">Map of Swags</a>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
