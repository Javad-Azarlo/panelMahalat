import React, { useEffect, useState } from "react";
import FrmRecverPass from "../Modules/FrmRecverPass";
import { Link } from "react-router-dom";
import customToast from "../../Services/toast";

import styles from "../Templates/forgotPass.module.css";
import { forgotPassCode } from "../../Services/funcRequest";

function ForgotPass({ code, setCode }) {
  const [activeHagh, setActiveHagh] = useState(true);
  const [activeHogh, setActiveHogh] = useState(false);

  const [accept, setAccept] = useState(false);

  const [typeFrm, setTypeFrm] = useState("تلفن همراه");
  const [interception, setInterception] = useState("");
  useEffect(() => {
    if (interception && code) {
      setAccept(true);
    }
  }, [interception, code]);
  const forgotData = {
    type : "mobile",
    type_value : `${interception}`
  };

  const forgotPassHandler = (e) => {
    e.preventDefault();
    forgotPassCode(forgotData);
    if (!code || !interception) {
      customToast("error", " تلفن همراه و کد امنیتی را وارد نمایید");
    } else {
      // setAccept(true);
      customToast("success", "با موفقیت کد ارسال شد");
    }
  };
 
  const clickbtn1 = (e) => {
    setActiveHogh((activeHogh) => !activeHogh);
    setActiveHagh((activeHagh) => !activeHagh);
    setTypeFrm(e.target.value);
  };
  const clickbtn2 = (e) => {
    setActiveHogh((activeHogh) => !activeHogh);
    setActiveHagh((activeHagh) => !activeHagh);
    setTypeFrm(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h3>فراموشی رمز عبور</h3>
      <form onSubmit={forgotPassHandler}>
        <div className={styles.btnType} style={{ marginTop: "5%" }}>
          <input
            className={activeHagh ? "" : styles.btnClic}
            type="button"
            value="تلفن همراه"
            onClick={(e) => clickbtn1(e)}
          />
          <input
            className={activeHogh ? "" : styles.btnClic}
            type="button"
            value="پست الکترونیک"
            onClick={(e) => clickbtn2(e)}
          />
        </div>
        <div className={styles.frmrecovery}>
          <FrmRecverPass
            typeFrm={typeFrm}
            interception={interception}
            setInterception={setInterception}
            code={code}
            setCode={setCode}
          />
        </div>
        <div className={styles.frmrecovery}>
          <input
            className={accept ? styles.accept : styles.notAccept}
            style={{ marginTop: "0" }}
            type="submit"
            value="فراموشی کلمه عبور"
          />

          <p className={styles.login} style={{ textAlign: "center" }}>
            درصورتی که حساب کاربری دارید <Link to={"/"}>ورود</Link> کنید
          </p>
        </div>
      </form>
    </div>
  );
}

export default ForgotPass;
