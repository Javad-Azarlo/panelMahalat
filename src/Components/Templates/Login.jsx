import React from "react";
import FormLogin from "../Modules/FormLogin";
import LoginForgot from "../Modules/LoginForgot";
// import styles from "./login.module.css";
function Login({code , setCode}) {
  return (
    <>
      <FormLogin code={code} setCode={setCode} />
      <LoginForgot />
    </>
  );
}

export default Login;
