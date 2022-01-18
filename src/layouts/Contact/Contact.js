import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className="container-wrapper py-100px">
      <header className="text-center mb-50px">
        <h1 className="uppercase fs-42px weight-7 mb-15px">
          <span className="darkest-orange ">GET LOOKBOOK + </span> GIFT VOUCHER
        </h1>
        <h2 className="fs-22px weight-6">
          Just fill out the form and wait for it!
        </h2>
      </header>

      <div className="mb-70px"></div>

      <p className="gray fs-20px lh-1_6 weight-5 mb-40px text-center">
        We are a full-service online African store offering sustainable quality
        products from the finest brands in Africa, carefully curated for you.
        ZaharaMall partners with STRIPE to ensure secure payments & with DHL for{" "}
        <span className="weight-8">worldwide delivery</span>.
      </p>
    </div>
  );
}

export default Contact;
