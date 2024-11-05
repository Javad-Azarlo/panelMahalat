import React from "react";
import Captcha from "../Modules/Captcha";
import { Link } from "react-router-dom";
import acc from "../../images/accept.png";
import customToast from "../../Services/toast";
import { mobileCode } from "../../Services/funcRequest";
import styles from "../Templates/registration.module.css";

function FrmLoginReg({
  accept,
  setAccept,
  code,
  setCode,
  mobile,
  setMobile,
  activeHagh,
  setActiveHagh,
  activeHogh,
  setActiveHogh,
  prgrsArray,
  counter,
  setCounter,
}) {
  const regHandler = async (e) => {


    e.preventDefault();
    if (!accept) return;
    else if (!code || !mobile) {
      customToast("error", " تلفن همراه و کد امنیتی را وارد نمایید");
    } else {
      const lengthprog = prgrsArray.length;
      if (counter <= lengthprog) {
        const find = prgrsArray.find((item) => item.id === counter);
        find.img = acc;
        setCounter((counter) => counter + 1);
        // useQuery({
        //   // mutationFn: tokenData(tknReq),
        //   queryKey: ["frmLogin"],
        //   queryFn: () =>
        //     mobileCode({
        //       mobile: `${mobile}`,
        //       user_type: `${activeHagh ? "real" : "legal"}`,
        //       type: "registe",
        //     }),
        // });
         return await mobileCode({
          "mobile": `${mobile}`,
          "user_type": `${activeHagh ? "real" : "legal"}`,
          "type": "registe",
        });
        // naviget("/acceptCode");
      }
    }
  };

  // const naviget = useNavigate();

  const clickbtn1 = () => {
    setActiveHogh((activeHogh) => !activeHogh);
    setActiveHagh((activeHagh) => !activeHagh);
  };
  const clickbtn2 = () => {
    setActiveHogh((activeHogh) => !activeHogh);
    setActiveHagh((activeHagh) => !activeHagh);
  };

  return (
    <form onSubmit={regHandler}>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; تلفن همراه <span>*</span>
        </legend>
        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          type="text"
        />
      </fieldset>
      <Captcha code={code} setCode={setCode} />
      <div className={styles.btnType} style={{ marginTop: "5%" }}>
        <input
          className={activeHagh ? "" : styles.btnClic}
          type="button"
          value="حقیقی"
          onClick={clickbtn1}
        />
        <input
          className={activeHogh ? "" : styles.btnClic}
          type="button"
          value="حقوقی"
          onClick={clickbtn2}
        />
      </div>
      <div className={styles.frmreg}></div>
      <div className={styles.conditions}>
        <input
          value={accept}
          id="checkbox-1"
          className={styles.checkboxcustom}
          name="checkbox-1"
          type="checkbox"
          onChange={(e) => setAccept((e) => !e)}
        />
        <label htmlFor="checkbox-1" className={styles.checkboxcustomlabel}>
          <span>
            شرایط استفاده از<Link to={"/"}> خدمات و حریم خصوصی</Link> را می
            پذیرم
          </span>
        </label>
      </div>
      <br />
      <input
        className={accept ? styles.accept : styles.notAccept}
        style={{ marginTop: "0" }}
        type="submit"
        value="ثبت نام"
      />
    </form>
  );
}

export default FrmLoginReg;
