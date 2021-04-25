import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import "./login.css";
import Stars from "../../images/undraw_To_the_stars_qhyy.svg";
import Astro from "../../images/undraw_Astronaut_xko2.svg";

export default function Login(props) {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required")
          .matches(
            /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
            "One letter and One Number"
          ),
      })}
      onSubmit={() => {
        props.history.push("/app/overview");
      }}
      render={(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="container">
            <div className="left">
              <div className="leftBlock">
                <h1>Welcome to Star Wars the Clone Wars</h1>
                <img src={Stars} alt="stars"></img>
              </div>
            </div>
            <div className="right">
              <div className="rightBlock">
                <h2>Sign in to continue to your account.</h2>
                <Form onSubmit={handleSubmit}>
                  <div className="formContainer">
                    <div className="formLabel">
                      <h2>Email Address</h2>
                      <div>
                        <Field
                          id="email"
                          placeholder="Email Address"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="formInput"
                        />
                        {errors.email && touched.email && (
                          <div className="input-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="formLabel">
                      <h2>Password</h2>
                      <Field
                        id="password"
                        placeholder="Enter strong password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="formInput"
                      />
                      {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                    </div>
                    <div className="formLabel">
                      <button
                        className="formButton"
                        disabled={isSubmitting}
                        onSubmit={handleSubmit}
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
              <div>
                <img src={Astro} alt="Astro"></img>
              </div>
              <div className="footer">
                <h3>All rights reserved © 2020 STAR WARS</h3>
                <h3>Privacy | Terms English</h3>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
