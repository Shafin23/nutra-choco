import * as React from "react";
import love from "../assets/images/love.png";
import bliss from "../assets/images/bliss.png";
import beauty from "../assets/images/beauty.png";
import snooze from "../assets/images/snooze.png";


const products = [
  {
    name: "BEAUTYBOMS",
    image: beauty,
  },
  {
    name: "Blisspops",
    image: bliss,
  },
  {
    name: "SnoozeCubes",
    image: snooze,
  },
  {
    name: "LOVEBITES",
    image: love,
  },
];

function ProductCard({ name, image }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center items-center text-base font-bold text-center uppercase whitespace-nowrap text-yellow-950 md:mt-8">
        <img
          loading="lazy"
          src={image}
          alt={`${name} product image`}
          className=" aspect-square w-[197px] h-[197px] object-cover"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          max
        />
        <div className="mt-5">{name}</div>
      </div>
    </div>
  );
}

const Ourrangepage = () => {
  return (
    <div className="font-display flex flex-col justify-center bg-white">
      <section className="flex justify-center items-center px-16 py-16 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-24 mb-48 max-w-full w-[897px] max-md:my-10">
          <h2 className="text-2xl font-bold text-center capitalize text-yellow-950">
            Indulge Your Senses
          </h2>
          <h1 className="mt-2 text-6xl font-bold text-center capitalize leading-[55px] text-yellow-950 w-[585px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Explore Our Array of Chocolate Delights
          </h1>
          <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {products.map((product) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourrangepage;