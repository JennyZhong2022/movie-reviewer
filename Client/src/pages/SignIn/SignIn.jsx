import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "./schema.js";
import styles from "./SignIn.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const {
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    register,
    setError,
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  if (isSubmitSuccessful) {
    reset();
  }

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success === false) {
        if (result.message === "User not found") {
          setError("email", {
            type: "manual",
            message: result.message,
          });
        }
        if (result.message === "Invalid password") {
          setError("password", {
            type: "manual",
            message: result.message,
          });
        }
      }
      if (res.ok) {
        // Update authentication state
        localStorage.setItem("access_token", result.token);
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <div className={styles.signUpPage}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="emailInput">Your email</label>
          <input
            id="emailInput"
            type="email"
            {...register("email")}
            placeholder="name@company.com"
          />
          <small className={styles.error_text}>
            {errors?.email?.message ?? "\u00A0"}
          </small>
        </div>

        <div className={styles.field}>
          <label htmlFor="passwordInput">Your password</label>
          <input
            id="passwordInput"
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <small className={styles.error_text}>
            {errors?.password?.message ?? "\u00A0"}
          </small>
        </div>

        <div className={styles.field}>
          <button type="submit">Sign In</button>
        </div>
      </form>

      <div className={styles.signUpField}>
        <span>Don't have an account?</span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
