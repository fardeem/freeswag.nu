import React from "react";
import SwagItem from "./SwagItem";

const dummy = [
  {
    img: "https://source.unsplash.com/pGM4sjt_BdQ",
    itemName: "Cupcakes",
    createdAt: "7 Oct 2019",
    location: "Norris University Center",
    details: "Louis Room, by the door",
    upvotes: 9,
    downvotes: 2
  },
  {
    img: "https://source.unsplash.com/OPd3H2hbjQI",
    itemName: "Waterbottle",
    createdAt: "7 Nov 2019",
    location: "Norris University Center",
    upvotes: 3,
    downvotes: 2,
    details: ""
  }
];

const SwagList = () => {
  return (
    <div className="container">
      <style jsx>{`
        ul {
          list-style-type: none;
        }

        @media (min-width: 800px) {
          ul {
            display: flex;
          }
        }
      `}</style>

      <ul>
        {dummy.map(item => (
          <SwagItem data={item} />
        ))}
      </ul>
    </div>
  );
};

export default SwagList;
