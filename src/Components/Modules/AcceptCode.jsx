import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { e2p } from "../../Services/ConvertNumber";
import acc from "../../images/accept.png";
import customToast from "../../Services/toast";

import { mobileCode, verifyCode } from "../../Services/funcRequest";
import { Link } from "react-router-dom";
import styles from "./acceptCode.module.css";
function AcceptCode({
  activeHagh,
  setCounter,
  counter,
  prgrsArray,
  mobile,
  otpNew,
  setOtpNew,
}) {
  const [accept, setAccept] = useState(false);
  const [otp, setOtp] = useState();
  const [count, setCount] = useState(60);
  // const [verify ] = useState("12345");
  const [valIput, setValIput] = useState(false);
  // const objmobile = {
  //   'mobile': {mobile},
  //   'code': {otpNew},
  // };
  useEffect(() => {
    if (count <= 0) return;
    setTimeout(function () {
      setCount((count) => count - 1);
    }, 1000);
  }, [count]);
  useEffect(() => {
    setOtpNew(otp);

    if (otpNew) {
      // setCounter((counter) => counter + 1);
      setAccept(true);

      // console.log(res)
    }
    // if (verify == otp) {
    //   setValInput(true);

    // }
  }, [otp]);
  useEffect(() => {}, []);
  const acceptHandler = async (e) => {
    e.preventDefault();
    
    const lengthprog = prgrsArray.length;



    if (otpNew.length < 4) return;
    else {
      setValIput(true);
      const res = await verifyCode({
        mobile: `${mobile}`,
        code: `${otpNew}`,
      });
      if (res.status == "26") {
        customToast("error", "کد وارد شده معتبر نیست");
        setValIput(false);
      } else {
        setValIput(true);
        if (counter <= lengthprog) {
          const find = prgrsArray.find((item) => item.id === counter);
          find.img = acc;
          setCounter((counter) => counter + 1);
        }
      }
    }

    // if (!accept) return;
    // else if (otpNew !== verify) {
    //   customToast("error", "  کد تاییدیه را وارد نمایید");
    // } else {
    //   const lengthprog = prgrsArray.length;
    //   if (counter <= lengthprog) {
    //     const find = prgrsArray.find((item) => item.id === counter);
    //     find.img = acc;
    //     setCounter((counter) => counter + 1);
    //   }
    // }
    // else {
    // console.log("okcode")
    // verifyCode({
    //   mobile: `${mobile}`,
    //   code: `${otpNew}`,
    // });
    // }
  };
  const reCode = () => {
    if (count === 0) {
      setCount(60);
    }
    mobileCode({
      mobile: `${mobile}`,
      user_type: `${activeHagh ? "real" : "legal"}`,
      type: "registe",
    });
  };
  return (
    <form onSubmit={acceptHandler}>
      <div className={styles.container}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          inputStyle={{
            width: "40px",
            marginBottom: "10px",
            height: "40px",
            backgroundColor: "transparent",
            outlin: "none",
            borderRadius: "12px",
            border: "1px solid #dddddd",
          }}
          renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <br />
      <p>کد تایید به شماره {e2p(mobile)} پیامک شد</p>
      <br />
      {count === 0 ? (
        <>
          <Link onClick={reCode}> دریافت مجدد کد ...</Link>
          <br />
        </>
      ) : (
        <p>{e2p(count)} ثانیه مانده تا دریافت مجدد کد</p>
      )}
      <br />

      <input
        className={accept ? styles.accept : styles.notAccept}
        style={{ marginTop: "0" }}
        type="submit"
        value={valIput ? "درحال ارسال ..." : "تایید"}
      />
    </form>
  );
}

export default AcceptCode;
