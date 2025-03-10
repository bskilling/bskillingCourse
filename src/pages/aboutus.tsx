import AboutBskilling from '@/component/AboutBskilling';
import AboutCoreValue from '@/component/AboutCoreValue';
import AboutFounder from '@/component/AboutFounder';
import Aboutlanding from '@/component/Aboutlanding';
import AboutOnlineLearning from '@/component/AboutOnlineLearning';
import AboutTrainTeam from '@/component/AboutTrainTeam';
import NewsLetter from '@/component/NewsLetter';
import Testimonial from '@/component/Testimonial';
import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <Aboutlanding />
      <AboutCoreValue />
      <AboutOnlineLearning />
      <AboutFounder />
      <AboutBskilling />
      <Testimonial />
      <AboutTrainTeam />
      <NewsLetter />
    </div>
  );
};

export default AboutUs;
