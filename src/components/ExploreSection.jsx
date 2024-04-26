import React from "react";
import explore1 from "../assets/images/explore1.png"
import explore2 from "../assets/images/explore2.png"
import explore3 from "../assets/images/explore3.png"
import explore4 from "../assets/images/explore4.png"

const explore = [
  {
    title: "Unlock Desire: Enhancing Intimacy Naturally",
    subtitle: "Aphrodisiac Chocolate",
    ingredients:
      "60% Cacao, Shilajit, Panax Ginseng, Kaunch Beej, Maca Root, Epimedium, Safed Muesli, Cordeyceps, Moringa, Ashwagandha, Saffron",
    image: explore1,
  },
  {
    title: "Soothe Your Senses, Drift into Dreams",
    subtitle: "Sound sleep & Stress Relief Chocolate",
    ingredients:
      "60% Cacao, Jatamansi, Bhrami extract, Chamomile Extract, Tagar, Passion flower, Rose Oil, Melotonin, Ashwagandha ",
    image: explore2,
  },
  {
    title: "Nourishing Comfort for Women's Wellness",
    subtitle: "For Women (PMS, Menstrual & Menopausal)",
    ingredients:
      "60% Cacao, Shatavari, Ginseng (Siberian), Amla ectract, Black Cohosh, Tulsi Extract, Burdock root, Chamomile Extract, Licorice, Moringa, Saffron, Ashwagandha , Ginger extract.",
    image: explore3,
  },
  {
    title: "Beauty from Within, Glow with Every Taste",
    subtitle: "Skin and Hair nourishment chocolate",
    ingredients:
      "60% Cacao, Amla, Gokshura, Ashwagandha, Lavender oil, Green, Tea extract, Brhami, Gotu Kola, Reishi, Bhringraj, Vitamin E,, Vitamin",
    image: explore4,
  },
];
const ExploreSection = () => {
    return (
        <div className="grid grid-cols-2 my-20 mb-24">
      {explore.map((exploreItem, index) => (
        <div
          key={index}
          className="flex overflow-hidden relative flex-col grow items-end py-14 pr-9 pl-20 font-bold text-right text-white min-h-[350px] max-md:px-5 max-md:max-w-full"
        >
          <img
            loading="lazy"
            src={exploreItem.image}
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative text-3xl capitalize w-[368px]">
            {exploreItem.title}
          </div>
          <div className="relative mt-4 text-base">{exploreItem.subtitle}</div>
          <div className="relative mt-9 text-base capitalize">Ingredients</div>
          <div className="relative justify-center px-3 py-6 mt-3 max-w-full text-xs capitalize rounded-3xl border border-white border-solid bg-stone-800 bg-opacity-50 w-[459px] max-md:max-w-full">
            {exploreItem.ingredients}
          </div>
          <div className="relative px-5 pt-2 pb-2 mt-10 text-sm leading-5 text-center capitalize rounded-3xl border border-white border-solid bg-neutral-100 bg-opacity-80 text-yellow-950 max-md:mt-10">
            Explore Now
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreSection;
