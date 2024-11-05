import React, { useState } from "react";

import { inqueryProfile } from "../../Services/funcRequest";
import styles from "../Modules/inquiry.module.css";
function Inquiry({ otpNew, mobile , counter , setCounter , prgrsArray}) {
  const [accept, setAccept] = useState(false);
  const [nationalCode, setNationalCode] = useState("");

  const inputAccept = (e) => {
    const element = e.target.value.replace(/[^0-9]/g, "");
    setNationalCode(element);
    setAccept(true);
  };
  const inqueryHandler = async (e) => {
    e.preventDefault();
    const res =  await inqueryProfile({
      // national_code : `${nationalCode}`,
      address: " اینیکآدرس تست است ",
      fax: "",
      postal_code: "4238423842",
      code: `${otpNew}`,
      mobile: `${mobile}`,
      password: "azar_lo",
      email: "",
    });
    setCounter((counter) => counter + 1);
    return res;
  };
  return (
    <form onSubmit={inqueryHandler}>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; کد ملی <span>*</span>
        </legend>

        <input
          value={nationalCode}
          onChange={inputAccept}
          type="text"
          maxLength={10}
        />
      </fieldset>
      {/* <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; کد ملی <span>*</span>
        </legend>
      </fieldset> */}
      {/* <DatePicker /> */}

      <input
        className={accept ? styles.accept : styles.notAccept}
        style={{ marginTop: "0" }}
        type="submit"
        value="تایید"
      />
    </form>
  );
}

export default Inquiry;
