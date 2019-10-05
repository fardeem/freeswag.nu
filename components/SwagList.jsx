import React from "react";
import SwagItem from "./SwagItem";

const dummy = [
  {
    img: "https://source.unsplash.com/pGM4sjt_BdQ",
    itemName: "Cupcakes",
    createdAt: "7 Oct 2019",
    location: "Norris University Center",
    upvotes: 9,
    downvotes: 2
  },
  {
    img: "https://source.unsplash.com/OPd3H2hbjQI",
    itemName: "Waterbottle",
    createdAt: "7 Nov 2019",
    location: "Norris University Center",
    upvotes: 3,
    downvotes: 2
  }
];

const SwagList = () => {
  return (
    <div className="container">
      <style jsx>{`
        ul {
          list-style-type: none;
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
