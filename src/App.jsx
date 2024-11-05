import React, { useState, useEffect } from "react";
// import { Provider, useDispatch, useSelector } from "react-redux";

import Layout from "./Components/Layout/Layout";
import RoutesPage from "./pages/RoutesPage";
import { useQuery } from "react-query";
// import { store } from "./redux/store";
// import { fetchToken } from "./Services/funcRequest";

function App({ state }) {
  const [code, setCode] = useState("");

  // const tkn = useSelector((state) => state.token);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchToken());
  //   // tokenData(tknReq);
  // }, []);
  // console.log(tkn);

  return (
    // <Provider store={store}>
    <Layout>
      <RoutesPage code={code} setCode={setCode} />
      {/* {data.map(item => <p key={item.id}>{item.name}</p>)} */}
    </Layout>
    // </Provider>
  );
}

export default App;
