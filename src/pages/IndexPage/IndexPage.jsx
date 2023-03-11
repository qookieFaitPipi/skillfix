import React from "react";

import IndexHeader from "./IndexHeader/IndexHeader";
import FullPageVideo from "./FullPageVideo/FullPageVideo";
import About from "./About/About";
import CourseList from "./CourseList/CourseList";
import Questions from "./Questions/Questions";
import Footer from "../../multComponents/Footer/Footer";
const IndexPage = () => {
  return(
    <section>
      <IndexHeader />
      <FullPageVideo />
      <About />
      <CourseList />
      <Questions />
      <Footer />
    </section>
  );
}

export default IndexPage;