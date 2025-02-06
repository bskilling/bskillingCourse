import AboutBskilling from 'components/AboutBskilling'
import AboutCoreValue from 'components/AboutCoreValue'
import AboutFounder from 'components/AboutFounder'
import Aboutlanding from 'components/Aboutlanding'
import AboutOnlineLearning from 'components/AboutOnlineLearning'
import AboutTrainTeam from 'components/AboutTrainTeam'
import NewsLetter from 'components/NewsLetter'
import Testimonial from 'components/Testimonial'
import React from 'react'

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
          <NewsLetter/>
    </div>
  )
}

export default AboutUs