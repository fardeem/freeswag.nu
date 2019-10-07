import React from "react";

const SwagItem = ({ data }) => {
  return (
    <>
      <style jsx>{`
        li {
          margin-bottom: 4rem;
        }

        @media (min-width: 800px) {
          li:nth-of-type(2n + 1) {
            padding-right: 2rem;
          }
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
        }

        h1,
        p {
          margin: 0;
        }

        .posted_at {
          text-align: right;
        }

        .grey {
          color: #c6c6c6;
        }

        h1 {
          font-size: 2.2rem;
          color: white;
        }

        img {
          max-width: 100%;
          border-radius: 10px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12),
            0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12),
            0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);
        }

        .toolbox {
          display: flex;
          justify-content: space-around;
          margin-top: 2em;
        }

        .btn {
          display: inline-block;
          border-radius: 10px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.8);
          padding: 0.5rem 1rem;
        }

        .btn span {
          color: white;
        }

        .btn-good {
          background: linear-gradient(to bottom, #68c98b, #4e9869);
          margin-right: 1rem;
        }

        .btn-bad {
          background: linear-gradient(to bottom, #dd5a37, #c44f31);
        }
      `}</style>

      <li className="grey">
        <header>
          <section>
            <h1>{data.itemName}</h1>
            <p>{data.location}</p>
          </section>

          <section className="posted_at">
            <p>Posted</p>
            <p>{data.createdAt}</p>
          </section>
        </header>

        <img src={data.img} alt="" />

        <div className="toolbox">
          <div>
            <a href="/" className="btn btn-good">
              Legit – <span>{data.upvotes}</span>
            </a>
            <a href="/" className="btn btn-bad">
              Bullshit – <span>{data.downvotes}</span>
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default SwagItem;
