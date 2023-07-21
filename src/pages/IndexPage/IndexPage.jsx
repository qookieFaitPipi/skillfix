import React, { useEffect } from 'react';
import axios from 'axios';

// components
import Header from '../../universal/Header/Header';
import FullPageVideo from './FullPageVideo/FullPageVideo';
import About from './About/About';
import CourseList from './CourseList/CourseList';
import Questions from './Questions/Questions';
import Footer from '../../universal/Footer/Footer';

// modals
import EntryModal from '../Modals/EntryModal/EntryModal';
import RegisterModal from '../Modals/RegisterModal/RegisterModal';

// redux
import { useDispatch } from 'react-redux';
import { setCourses } from '../../redux/slices/courseSlice';

const IndexPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://0.0.0.0:12345/get_courses').then((response) => {
      dispatch(setCourses({
        isLoaded: true,
        courseList: response.data
      }))
    });
  }, [])

  return (
    <section>
      <Header />
      <FullPageVideo />
      <About />
      <CourseList />
      <Questions />
      <Footer />

      <EntryModal />
      <RegisterModal />
    </section>
  )
}

export default React.memo(IndexPage);