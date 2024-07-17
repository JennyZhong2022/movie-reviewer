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

  return (
    <div className={styles.signUpPage}>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="usernameInput">Your username</label>
          <input id="usernameInput" type="text" {...register("username")} />
          <small className={styles.error_text}>
            {errors?.username?.message ?? "\u00A0"}
          </small>
        </div>

        <div className={styles.field}>
          <label htmlFor="emailInput">Your email</label>
          <input id="emailInput" type="email" {...register("email")} />
          <small className={styles.error_text}>
            {errors?.email?.message ?? "\u00A0"}
          </small>
        </div>

        <div className={styles.field}>
          <label htmlFor="passwordInput">Your password</label>
          <input id="passwordInput" type="password" {...register("password")} />
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
