import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import '../components/about.css'

import Seo from '../components/seo'
import Layout from '../components/layout'
import AboutPage from '../components/about'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'


const AboutMe = ({ data }) => (
    <Layout>
      <Seo
        title="About Me"
        keywords={[`gatsby`, `application`, `react`, `portfolio`]}
      />
            <div class="section-header"><h2>About Me</h2></div>
      <div className="about-page">
          <p>coming soon</p>
      </div>
    </Layout>
  );
  
  export default AboutMe;
  
  // ...your graphql query

