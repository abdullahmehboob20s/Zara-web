import React from "react";
import styles from "./Button.module.css";

function Button({ title, style, type = "" }) {
  return (
    <button
      type={type}
      style={style}
      className={`${styles.btn} pointer fs-20px weight-5 white text-center block w-fit-content`}
    >
      {title}
    </button>
  );
}

export default Button;
