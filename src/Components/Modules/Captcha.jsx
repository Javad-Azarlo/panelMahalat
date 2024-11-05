import React, { useEffect, useState } from "react";
import { random } from "../../Services/ButtonStyles";
import styles from "./captcha.module.css";

function Captcha({ code , setCode }) {
  const [captcha, setCaptcha] = useState("1 2 3 4 5 6");
  useEffect(() => {
    if (code !== captcha) {
      console.log("not");
    } else {
      console.log("ok");
    }
  }, [code]);
  const captchHandler = (e) => {
    setCaptcha(random);
  };

  return (
    <fieldset>
      <legend>
        &nbsp; کد امنیتی <span>*</span>
      </legend>
      <form className={styles.captchaFrm}>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="text"
        />
        <input
          onClick={captchHandler}
          className={styles.captchaBtn}
          type="button"
          value={captcha}
          // onChange={(e) => setCode(e.target.value)}
        />
      </form>
    </fieldset>
  );
}

export default Captcha;
