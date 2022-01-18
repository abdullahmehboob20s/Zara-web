import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className="container-wrapper py-50px">
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <h1 className="fs-18px weight-6 lh-1_6">
              ZaharaMall Copyright@2022 | Privacy Policy | Terms & Conditions
            </h1>
          </div>
          <div className={styles.footerRight}>
            <a href="#">
              <FaFacebookF size={28} />
            </a>
            <a href="#">
              <FaTwitter size={28} />
            </a>
            <a href="#">
              <FaInstagram size={28} />
            </a>
            <a href="#">
              <FaYoutube size={28} />
            </a>
            <a href="#">
              <FaPinterest size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
