import React from "react";
import styles from "./Register.module.css";
import { apiAxios} from "../API/API";
import { Form, redirect } from "react-router-dom";

function Register() {
  return (
    <div className={styles['form-container']}>
      <h2>Register</h2>
      <Form method="post">
        <div className={styles['input-field']}>
          <label htmlFor="loginId">Login ID:</label>
          <input type="text" name="loginId" id="loginId" required />
        </div>
{/* 
        <div className={styles['input-field']}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" required />
        </div> */}

        <div className={styles['input-field']}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required />
        </div>

        <button type="submit" className={styles.button}>
          Register
        </button>
      </Form>
    </div>
  );
}


export async function registerAction({ request }) {
    const formData = await request.formData();
  
    const memberDTO = {
      loginId: formData.get("loginId"),
      member_password: formData.get("password"),
      isFromSocial: false
    };
  
    try {
      const response = await apiAxios.post("/register", memberDTO); // Adjust API endpoint as necessary
  
      if (response.status === 201) {
        console.log('res')
        // Successful registration, redirect to login page or another page
        return redirect("/login");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  }

export default Register;