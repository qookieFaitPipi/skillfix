import React, {useState} from "react";

import IndexHeader from "./IndexHeader/IndexHeader";
import FullPageVideo from "./FullPageVideo/FullPageVideo";
import About from "./About/About";
import CourseList from "./CourseList/CourseList";
import Questions from "./Questions/Questions";
import Footer from "../../multComponents/Footer/Footer";

import EntryModal from "./Modals/EntryModal/EntryModal";
import RegisterModal from "./Modals/RegisterModal/RegisterModal";
const IndexPage = (props) => {

  return(
    <>
    <section>
      <IndexHeader registerModalActive={props.registerModalActive} setRegisterModalActive={props.setRegisterModalActive} entryModalActive={props.entryModalActive} setEntryModalActive={props.setEntryModalActive}/>
      <FullPageVideo />
      <About />
      <CourseList />
      <Questions />
      <Footer />
    </section>
    <EntryModal registerModalActive={props.registerModalActive} setRegisterModalActive={props.setRegisterModalActive} entryModalActive={props.entryModalActive} setEntryModalActive={props.setEntryModalActive} />
    <RegisterModal entryModalActive={props.entryModalActive} setEntryModalActive={props.setEntryModalActive} registerModalActive={props.registerModalActive} setRegisterModalActive={props.setRegisterModalActive} />
    </> 
  );
}

export default IndexPage;