import Button from "components/Buttons/Button/Button";
import React, { useRef } from "react";
import styles from "./ContactForm.module.css";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import LookBook_Cover from "assets/images/LookBook_Cover.png";
import ZM_Gift_Voucher from "assets/images/ZM_Gift_Voucher.png";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();

  return (
    <main className={styles.formWrapper}>
      <div className={styles.form}>
        <div className={`${styles.voucher} flex`}>
          <img src={ZM_Gift_Voucher} className="w-full" alt="" />
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "10% Gift Voucher Request",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(25, "Must be 20 characters or less")
              .min(3, "Must be 3 characters or more")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            subject: Yup.string().default("10% Gift Voucher Request"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            emailjs
              .sendForm(
                "service_hb05x8k",
                "template_3rvlqnj",
                form.current,
                "user_bXoleQLM9qiUSlcpFQPOw"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  form.current.reset();
                },
                (error) => {
                  console.log(error.text);
                }
              );
          }}
        >
          {({ errors, touched }) => (
            <Form ref={form} className={styles.form__form}>
              <Field name="subject" type="hidden" />
              <div>
                <label
                  className="fs-16px weight-4 white mb-5px block"
                  htmlFor="name"
                >
                  Name :
                </label>
                <Field
                  className="fs-16px gray block mb-5px weight-6"
                  name="name"
                  type="text"
                  id="name"
                />
                {errors.name && touched.name ? (
                  <div className={styles.errorMessage}>{errors.name}</div>
                ) : null}
              </div>
              <div>
                <label
                  className="fs-16px weight-4 white mb-5px block"
                  htmlFor="email"
                >
                  Email Address :
                </label>
                <Field
                  className="fs-16px gray block mb-5px weight-6"
                  name="email"
                  type="email"
                  id="email"
                />
                {errors.email && touched.email ? (
                  <div className={styles.errorMessage}>{errors.email}</div>
                ) : null}
              </div>
              <Button
                type="submit"
                title="GET INSTANT  ACCESS"
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
            </Form>
          )}
        </Formik>
      </div>
      <div className={styles.lookbook}>
        <img src={LookBook_Cover} className="w-full" alt="" />
      </div>
    </main>
  );
}

export default ContactForm;
