// import AboutbSkilling from '@/component/AboutbSkilling';
import AboutCoreValue from '@/component/AboutCoreValue';
import AboutFounder from '@/component/AboutFounder';
// import Aboutlanding from 'component/Aboutlanding';
import AboutOnlineLearning from '@/component/AboutOnlineLearning';
import AboutTrainTeam from '@/component/AboutTrainTeam';
import NewsLetter from '@/component/NewsLetter';
import Testimonial from '@/component/Testimonial';
import Aboutlanding from '@/component/Aboutlanding';
import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <Aboutlanding />
      <AboutCoreValue />
      <AboutOnlineLearning />
      <AboutFounder />
      {/* <AboutbSkilling /> */}
      {/* <Testimonial /> */}
      <AboutTrainTeam />
      <NewsLetter />
    </div>
  );
};

export default AboutUs;
