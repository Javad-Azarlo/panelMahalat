import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Captcha from "../Modules/Captcha";
// import { toast } from 'react-toastify';
import customToast from "../../Services/toast.js";
import { resDsposable } from "../../Services/funcRequest";



import styles from "../Templates/loginCode.module.css";

function LoginCode({ code, setCode }) {
  const [accept, setAccept] = useState(false);
  const [mobile, setMobile] = useState("");
  useEffect(() => {
    if (mobile && code) {
      setAccept(true);
    }
  }, [mobile, code]);

  const loginCodeHandler = (e) => {
    e.preventDefault();
    if (!code || !mobile) {
      customToast("error", " تلفن همراه و کد امنیتی را وارد نمایید");
    } else {
      // setAccept(true);
      customToast("success", "با موفقیت کد ارسال شد");
      resDsposable({mobile})
    }
  };

  return (
    <div className={styles.container}>
      <h3>ورود با رمز یکبار مصرف</h3>

      <form onSubmit={loginCodeHandler}>
        <div className={styles.loginCode}>
          <fieldset className={styles.fieldset}>
            <legend>
              &nbsp; تلفن همراه &nbsp;
              <span>*</span>
            </legend>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </fieldset>
          <Captcha code={code} setCode={setCode} />
        </div>
        <div className={styles.loginCode}>
          <input
            className={accept ? styles.accept : styles.notAccept}
            style={{ marginTop: "0" }}
            type="submit"
            value="ارسال کد"
          />

          <p className={styles.login} style={{ textAlign: "center" }}>
            درصورتی که حساب کاربری دارید <Link to={"/"}>ورود</Link> کنید
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginCode;
