import React from "react";
import styles from "./BasicLogin.module.css";
import axios from "axios";
import { loginAxios } from "../API/API";
import { Form, redirect } from "react-router-dom";

function BasicLogin() {
  return (
    <div className={styles['login-container']}>
      <div className={styles['form-container']}>
        <div className={styles['form-wrapper']}>
          <h2>Login</h2>
          <Form method="post">
            <div className={styles['input-field']}>
              <label htmlFor="loginId">Login Id</label>
              <input type="text" name="loginId" id="loginId" required />
            </div>

            <div className={styles['input-field']}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required />
            </div>

            <button type="submit" className={styles.button}>
              Login
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export async function loginAction({ request }) {
  const formData = await request.formData();

  const loginDTO = {
    username: formData.get("loginId"),
    password: formData.get("password"),
  };

  try {
    const response = await loginAxios.post("", loginDTO); // Adjust API endpoint as necessary

    if (response.status === 200) {
      // Successful login, redirect to the dashboard or another page
      return redirect("/");
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

export default BasicLogin;
