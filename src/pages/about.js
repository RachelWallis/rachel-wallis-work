import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'


const ProjectsPage = ({ data }) => (
    <Layout>
      <Seo
        title="Home"
        keywords={[`gatsby`, `application`, `react`, `portfolio`]}
      />
      <h1>About Me</h1>
      <div className="project-list">

      </div>
    </Layout>
  );
  
  export default ProjectsPage;
  
  // ...your graphql query

