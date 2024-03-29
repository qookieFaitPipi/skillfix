import React from "react";

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import IndexPage from "./Pages/IndexPage/IndexPage";
import CoursePage from "./Pages/CoursePage/CoursePage";

function App() {
  return (
    <Routes>
        <Route index path="/" element={<IndexPage/>}/>
        <Route path="/course/:id" element={<CoursePage/>}/>
    </Routes>
  );
}

export default React.memo(App);
