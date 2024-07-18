import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "./schema";
import styles from "./SignUp.module.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    register,
    reset,
  } = useForm({ resolver: zodResolver(schema) });
  console.log(errors);
  isSubmitSuccessful && reset();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success === false) {
        return result.message;
      }
    } catch (error) {}
  };

  return (
    <div className={styles.signUpPage}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="usernameInput">Your username</label>
          <input
            id="usernameInput"
            type="text"
            {...register("username")}
            placeholder="Username"
          />
          <small className={styles.error_text}>
            {errors?.username?.message ?? "\u00A0"}
          </small>
        </div>

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
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            id="passwordConfirm"
            type="password"
            {...register("passwordConfirm")}
            placeholder="Password"
          />
          <small className={styles.error_text}>
            {errors?.passwordConfirm?.message ?? "\u00A0"}
          </small>
        </div>
        <div className={styles.field}>
          <button type="submit">Sign Up</button>
        </div>
      </form>

      <div className={styles.signUpField}>
        <span>Have an account?</span>
        <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
};
export default SignUp;
