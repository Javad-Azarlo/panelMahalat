import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "../Components/Templates/Registration";
import Login from "../Components/Templates/Login";
import ForgotPass from "../Components/Templates/ForgotPass";
import NotFound from "../Components/Templates/NotFound";
import LoginCode from "../Components/Templates/LoginCode";
import FollowRequest from "../Components/Templates/FollowRequest";
// import AcceptCode from "../Components/Templates/AcceptCode";


function RoutesPage({ state, code, setCode }) {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login code={code} setCode={setCode} />} />
          <Route
            path="Registration"
            element={<Registration code={code} setCode={setCode} />}
          />
          <Route
            path="ForgotPass"
            element={<ForgotPass code={code} setCode={setCode} />}
          />
          <Route
            path="loginCode"
            element={<LoginCode code={code} setCode={setCode} />}
          />
          <Route
            path="followRequest"
            element={<FollowRequest code={code} setCode={setCode} />}
          />
          {/* <Route path="acceptCode" element={<AcceptCode />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default RoutesPage;
