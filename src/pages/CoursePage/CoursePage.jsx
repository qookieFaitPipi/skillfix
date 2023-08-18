import React from 'react';

// components
import Header from './../../Universal/Header/Header';
import CoursePreviewImage from './CoursePreviewImage/CoursePreviewImage';
import CourseVideo from './CourseVideo/CourseVideo';
import CourseThemes from './CourseThemes/CourseThemes';
import CourseAbout from './CourseAbout/CourseAbout';
import CourseSub from './CourseSub/CourseSub';
import Footer from './../../Universal/Footer/Footer';

const CoursePage = () => {
  return (
    <section>
      <Header />
      <CoursePreviewImage />
      <CourseVideo />
      <CourseThemes />
      <CourseAbout />
      <CourseSub />
      <Footer />
    </section>
  )
}

export default React.memo(CoursePage);