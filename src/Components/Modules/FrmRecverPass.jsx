import React from "react";
import styles from "./frmRecverPass.module.css";
import Captcha from "./Captcha";
function FrmRecverPass({ typeFrm, interception, setInterception ,code , setCode }) {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend>
          &nbsp; {typeFrm}&nbsp;
          <span>*</span>
        </legend>
        <input
          type="text"
          value={interception}
          onChange={(e) => setInterception(e.target.value)}
        />
      </fieldset>
      <Captcha code={code} setCode={setCode}/>
    </>
  );
}

export default FrmRecverPass;
