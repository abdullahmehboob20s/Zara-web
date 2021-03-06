import React from "react";
import styles from "./WhatWeHave.module.css";

import img1 from "assets/images/1.jpg";
import img2 from "assets/images/2.jpg";
import img3 from "assets/images/3.jpg";
import img4 from "assets/images/4.jpg";
import img5 from "assets/images/5.jpg";
import img6 from "assets/images/6.jpg";

import sound_waves from "assets/images/sound_waves.png";
import Button from "components/Buttons/Button/Button";

const Card = ({ img, title, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.saleCard}>
          <span
            className="orange-1 block
           fs-16px uppercase weight-6 mb5-px"
          >
            FROM
          </span>
          <span
            className="red block
           fs-16px uppercase weight-4 mb5-px"
          >
            {price}
          </span>
        </div>
        <img src={img} alt="" />
      </div>

      <div>
        <p className="uppercase fs-18px black weight-7">{title}</p>
      </div>
    </div>
  );
};

function WhatWeHave() {
  return (
    <div className="bg-gray-light">
      <div className="container-wrapper py-100px">
        <header className="text-center mb-50px">
          <h1 className="fs-36px black weight-5">
            <span className="weight-8">What</span> do we have here?{" "}
          </h1>
        </header>

        <main className={`${styles.cards} `}>
          <Card img={img4} price="$30.00" title="Fashion Clothing" />
          <Card img={img3} price="$7" title="Accessories" />
          <Card img={img2} price="$6.00 " title="Beauty" />
          <Card img={img5} price="$19.00 " title="Jewellery" />
          <Card img={img6} price="$16.57 " title="Interior Design pieces" />
          <Card img={img1} price="$426.41" title="Art" />
        </main>

        {/* <div className={`${styles.disclaimer} mb-30px`}>
          <p className="fs-22px orange-1 weight-7">
            IT'S STILL NOT EVERYTHING!
          </p>
          <img src={sound_waves} alt="" />
          <p className="fs-22px orange-1 weight-7">SEE OUR ENTIRE OFFER</p>
        </div> */}
        {/* <div className="text-center margin-center w-fit-content">
          <Button title="GET GIFT VOUCHER" />
        </div> */}
      </div>
    </div>
  );
}

export default WhatWeHave;
