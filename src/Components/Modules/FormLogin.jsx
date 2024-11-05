import React, { useState } from "react";
import eye from "../../images/eye.png";
import hideEye from "../../images/hideEye.png"
import styles from "./formLogin.module.css";
import Captcha from "./Captcha";
import { Link } from "react-router-dom";
import  customToast  from "../../Services/toast";
function formLogin({code , setCode}) {
  const [showEye, setShowEye] = useState(false);
  const[user , setUser] = useState("");
  const [pass , setPass] = useState("");
  const samanehHandler = () => {
if(!pass || !user){
  customToast("error" , "نام کاربری یا رمز عبور را وارد کنید")
}
  };
  return (
    <div className={styles.container}>
      <h3>ورود</h3>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; نام کاربری / تلفن همراه / کد ملی <span>*</span>
        </legend>
        <input value={user} onChange={(e)=>setUser(e.target.value)} type="text" />
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; رمز عبور<span>*</span>
        </legend>
        <div className={styles.image}>
          <span
            className={styles.ab}
            onClick={() => setShowEye((showEye) => !showEye)}
          >
            <img src={showEye ? hideEye : eye} style={{ width: "15px" }} />
          </span>
          <input
          value={pass} onChange={(e)=>setPass(e.target.value)}
            className={styles.input}
            type={showEye ? "text" : "password"}
            style={{ margin: "0", border: "none", padding: "0 5px" }}
          />
        </div>
      </fieldset>

      <Captcha code={code} setCode={setCode}/>
      <div className={styles.btnLogin}>
        <input onClick={samanehHandler} type="button" value="ورود به درگاه" />
        <Link to={"/loginCode"}>
          <input type="button" value="ورود با رمز یکبار مصرف" />
        </Link>
        <Link to={"/followRequest"}>
          <input type="button" value="پیگیری درخواست" />
        </Link>
      </div>
    </div>
  );
}

export default formLogin;
