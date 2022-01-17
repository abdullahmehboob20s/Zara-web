import React from "react";
import styles from "./Contact.module.css";
import LookBook_Cover from "assets/images/LookBook_Cover.png";
import ZM_Gift_Voucher from "assets/images/ZM_Gift_Voucher.png";
import Button from "components/Buttons/Button/Button";

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

      <main className={styles.formWrapper}>
        <div className={styles.form}>
          <div className={`${styles.voucher} flex`}>
            <img src={ZM_Gift_Voucher} className="w-full" alt="" />
          </div>
          <form action="">
            <div>
              <label
                htmlFor="name"
                className="fs-16px weight-4 white mb-5px block"
              >
                Name :
              </label>
              <input className="fs-16px gray weight-4" type="text" id="name" />
            </div>
            <div>
              <label
                htmlFor="email"
                className="fs-16px weight-4 white mb-5px block"
              >
                Email :
              </label>
              <input className="fs-16px gray weight-4" type="text" id="email" />
            </div>
            <Button
              title="GET GIFT VOUCHER"
              style={{
                width: "100%",
                fontSize: "16px",
                padding: "1.3rem 20px",
              }}
            />

            <div>
              <a
                className={`${styles.hateSpamLink} white text-center pointer block fs-12px mb-10px`}
                href="https://zaharamall.com/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              <p
                className={`${styles.hateSpamLink} white text-center pointer fs-12px`}
              >
                We hate spam & You can unsubscribe anytime
              </p>
            </div>
          </form>
        </div>
        <div className={styles.lookbook}>
          <img src={LookBook_Cover} className="w-full" alt="" />
        </div>
      </main>
    </div>
  );
}

export default Contact;
