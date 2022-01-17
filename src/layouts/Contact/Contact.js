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
          <span className="darkest-orange ">GET SPECIAL</span> DISCOUNT
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
              title="GET DISCOUNT NOW"
              style={{
                width: "100%",
                fontSize: "16px",
                padding: "1.3rem 20px",
              }}
            />
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
