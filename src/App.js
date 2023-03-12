import React, {useState} from "react";

// react-router-dom
import {Routes, Route} from 'react-router-dom';

import IndexPage from "./pages/IndexPage/IndexPage";

//Context
import {Context} from './Context/index.js';
import {useCookies} from "react-cookie";

function App() {
  const [cookies, setCookies] = useCookies(["userToken"]);

  const [entryModalActive, setEntryModalActive] = useState(false);
  const [registerModalActive, setRegisterModalActive] = useState(false);
  return (
    <Context.Provider value={{
      cookies,
      setCookies,
    }}>
      <Routes>
        <Route index path="/" element={<IndexPage entryModalActive={entryModalActive} setEntryModalActive={setEntryModalActive} registerModalActive={registerModalActive} setRegisterModalActive={setRegisterModalActive}/>} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
