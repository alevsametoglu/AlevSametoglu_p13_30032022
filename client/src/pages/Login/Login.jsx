import "./Login.scss";
import { useForm } from "react-hook-form";
import api from "../../api.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { login } from "../../redux/appSlice.js";
import { appActions } from "../../redux/appSlice";
import { userActions } from "../../redux/userSlice";

export const Login = () => {
  const [loginError, setLoginError] = useState();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      username: "tony@stark.com",
      password: "password123",
    },
  });
  const onSubmit = (data) => {
    api
      .login(data.username, data.password)
      .then((user) => {
        console.log(user);
        dispatch(appActions.login());
        dispatch(userActions.updateProfile(user));
      })
      .catch((error) => setLoginError(error.message));
  };

  return (
    <main className="login-page">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              {...register("username", {
                required: true,
              })}
            />
            {formState.errors.username && (
              <p style={{ color: "red" }}>Username is required</p>
            )}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          {formState.errors.password && (
            <p style={{ color: "red", textAlign: "left" }}>Invalid password</p>
          )}
          {loginError && (
            <p style={{ color: "red", textAlign: "left" }}>{loginError}</p>
          )}

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
