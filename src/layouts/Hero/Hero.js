import Button from "components/Buttons/Button/Button";
import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className="container-wrapper">
        <div className={styles.hero}>
          <div className={styles.hero_left}>
            <h1 className="fs-40px weight-500 black">Its Time to Shine - </h1>

            <h2 className="fs-40px weight-5 mb-20px">
              <span className="weight-8 white">ZaharaMall</span> Goes Live On
              <span className="white weight-6"> 22.1.22</span>
            </h2>

            <p className="gray fs-20px lh-1_6 weight-5 mb-40px">
              We are a full-service online African store offering sustainable
              quality products from the finest brands in Africa, carefully
              curated for you. ZaharaMall partners with STRIPE to ensure secure
              payments & with DHL for{" "}
              <span className="weight-8">worldwide delivery</span>.
            </p>
            <Button title="GET GIFT VOUCHER" />
          </div>
          <div className={styles.hero_right}>
            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/cDplhSX2WBI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p className="text-center fs-20px gray weight-5 lh-1_4">
              Come and experience Africa in a whole new way and snag your 10%
              Gift Voucher in our stunning LookBook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
