import React from 'react'
import chocolate from '../assets/images/chocolate.png'
import chocolateflow from '../assets/images/chocolateflow.png'

const OurStory = () => {
  return (
    <div className="font-display">
      <div className="grid grid-cols-1 justify-center text-center items-center  text-wrap w-full px-72">
        <h1 className="p-8 text-[32px] font-semibold">Our Story</h1>
        <p className=" text-lg">
          Born from a vision to harmonize indulgence with health, Nutrachoco
          embarked on its journey in the bustling cities of Chennai , Bangalore,
          and Hyderabad. We saw a world where chocolates did more than just
          satiate cravings—they became vehicles of vitality, beacons of beauty,
          and guardians of health. With a passionate team, we ventured into the
          lush, untouched corners of nature to source the finest organic
          ingredients, ensuring each chocolate not only delights but nourishes.
        </p>
      </div>
      <div className="flex flex-col relative h-[546px] items-center justify-center">
        <div className="flex w-full justify-around items-center">
          <img src={chocolate} alt="" />
          <img src={chocolate} alt="" />
          <img src={chocolate} alt="" />
          <img src={chocolateflow} className="absolute  left-65" alt="" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10 px-20 py-16 text-wrap">
        <div class="flex flex-col justify-center">
          <h1 class="p-4 text-3xl font-semibold">Our Promise</h1>
          <p class="p-4 text-[19px]">
            At Nutrachoco, purity is our priority. Our chocolates are a
            testament to our commitment to natural, organic ingredients, free
            from anything artificial. We blend ancient wisdom with modern
            science to create not just chocolates, but experiences that enhance
            your health, from aphrodisiac and libido-boosting delights to
            remedies that soothe PCOD/PMS, improve sleep, and glorify your skin
            and hair.
          </p>
        </div>
        <div class="flex flex-col justify-center">
          <h1 class="p-4 text-3xl font-semibold">Our Mission</h1>
          <p class="p-4  text-[19px]">
            To empower and inspire. Nutrachoco is more than a brand; it’s a
            movement towards embracing a healthier, more joyful life. Each
            product is designed with your well-being in mind, targeting the
            needs of our diverse clientele— from the bustling professional
            seeking a serene escape in sleep-enhancing chocolates to the dynamic
            duo exploring deeper connections through our aphrodisiac range.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStory



