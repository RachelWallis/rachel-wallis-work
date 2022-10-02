import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'


const AboutPage = ({ data }) => (
    <Layout>
      <Seo
        title="About Me"
        keywords={[`gatsby`, `application`, `react`, `portfolio`]}
      />
      <h1>About Me</h1>
      <div className="about-page">

      </div>
    </Layout>
  );
  
  export default AboutPage;
  
  // ...your graphql query

