import React from 'react'
import TransformCard from './TransformCard';
import '../App.css'
import PriyaArora from "../assets/images/people1.png"
import AaravMehta from "../assets/images/people2.png"
import ManavBanerjee from "../assets/images/people3.png"
import MeenaChandra from "../assets/images/people4.png"
import RohanAhuja from "../assets/images/people5.png"
import KavitaKaushik from "../assets/images/people6.png"
import ShreyaNaidu from "../assets/images/people7.png"
import advantag1 from "../assets/images/advantages1.png"
import advantag2 from "../assets/images/advantages2.png"
import advantag3 from "../assets/images/advantages3.png"
import advantag4 from "../assets/images/advantages4.png"
import advantag5 from "../assets/images/advantages5.png"
import advantag6 from "../assets/images/advantages6.png"


const transformation = [
  {
    image: PriyaArora,
    name: "Priya Arora",
    place: "Banglore",
    review:
      " I’ve noticed a significant improvement in my monthly cycles. The discomfort is much less, and I feel more balanced overall. It’s amazing how a little chocolate can make such a big difference!",
  },
  {
    image: AaravMehta,

    name: "Aarav Mehta",
    place: "New Dehli",
    review:
      "I tried the Aphrodisiac Chocolate on a whim, and it’s definitely spiced up my evenings. Both my partner and I love the taste and the subtle boost it gives us. It’s our new favorite dessert.",
  },
  {
    image: ManavBanerjee,

    name: "Manav Banerjee",
    place: "Kolkata",
    review:
      "I’ve always struggled with anxiety and found it hard to relax in the evening. The calming effect of the Sleep and Stress Relief Chocolate helps me settle down and enjoy a good night’s sleep. Plus, it tastes fantastic!",
  },
  {
    image: MeenaChandra,

    name: "Meena Chandra",
    place: "Hyderabad",
    review:
      "The Skin and Hair Enhancement Chocolate has been a game-changer for my skincare routine. My skin glows and my hair feels so much healthier. Plus, who doesn’t love eating chocolate that makes you look good?",
  },
  {
    image: RohanAhuja,

    name: "Rohan Ahuja",
    place: "Mumbai",
    review:
      "I’m a lawyer with stressful days and longer nights. The Sleep and Stress Relief Chocolate has become my go-to for unwinding after a hectic day. I sleep better and feel more relaxed in the mornings.",
  },
  {
    image: KavitaKaushik,

    name: "Kavita Kaushik",
    place: "Pune",
    review:
      "As a college student, I’m always looking for ways to stay healthy on a budget. Nutrachoco chocolates are not only affordable but truly beneficial. The natural ingredients and the health benefits they offer are perfect for someone like me.",
  },
  {
    image: ShreyaNaidu,

    name: "Shreya Naidu",
    place: "Chennai",
    review:
      "I was skeptical about trying Nutrachoco due to my sensitive skin, but the natural ingredients appealed to me. I’m glad I gave it a chance because my skin has never felt this good, and my hair has a new shine to it!",
  },
];
const advantages = [
  {
    title: "Bean to Bar",
    image: advantag1,
  },
  {
    title: "Plant Based",
    image: advantag2,
  },
  {
    title: "Natural Ingredients",
    image: advantag3,
  },
  {
    title: "Healthier You",
    image: advantag4,
  },
  {
    title: "Sustainable",
    image: advantag5,
  },
  {
    title: "Nutrient Packed",
    image: advantag6
  },
];


const Transformation = () => {
  return (
    <div className="font-display">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[48px] font-semibold my-5">Stories of Transformation</h1>
        <p className="text=[16px]">
          Real People, Real Results - See How Nutrachoco is Changing
        </p>
      </div>
      <div className="flex overflow-x-scroll w-auto overflow-y-hidden whitespace-nowrap  my-10 no-scrollbar  scrollbar-hide">
        {transformation.map((story, index) => {
          return <TransformCard story={story} key={index} />;
        })}
      </div>
      <div className='flex flex-col  items-center'>
        <h1 className='text-[48px] font-bold capitalize my-6'>What set us apart</h1>
        <div className="flex justify-around mx-52 my-14 items-center">
          {advantages.map((advantage, index) => {
            return (
              <div className='mx-14' key={index}>
                <img src={advantage.image} alt="" />
                <h1 className='font-bold mt-4 text-center'>{advantage.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Transformation