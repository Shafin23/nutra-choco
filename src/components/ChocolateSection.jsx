import React from "react";
import ChocolateCard from "./ChocolateCard";
import Lovebites from '../assets/images/lovebites.png'
import Snoozecubes from '../assets/images/snoozecubes.png'
import Blisspops from '../assets/images/beautybombs.png'
import Beautybombs from '../assets/images/beautybombs.png'
import Snoozecubes10 from '../assets/images/snoozecubespack10.png'
import Beautybombs10 from "../assets/images/beautybombspack10.png";

const chocolates = [
  {
    name: "Lovebites",
    price: "150",
    image: Lovebites,
  },
  {
    name: "Snoozecubes",
    price: "150",
    image: Snoozecubes,
  },
  {
    name: "Blisspops",
    price: "150",
    image: Blisspops,
  },
  {
    name: "Beautybombs",
    price: "150",
    image: Beautybombs,
  },
  {
    name: "Snoozecubes (pack of 10)",
    price: "150",
    image: Snoozecubes10,
  },
  {
    name: "Beautybombs (pack of 10)",
    price: "150",
    image: Beautybombs10,
  },
];
const ChocolateSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[36px] font-bold p-4">Our Chocolates</h1>
      <div className="grid md:grid-cols-3 ">
        {chocolates.map((chocolate, index) => (
          <ChocolateCard key={index} chocolate={chocolate} />
        ))}
      </div>
    </div>
  );
};

export default ChocolateSection;
