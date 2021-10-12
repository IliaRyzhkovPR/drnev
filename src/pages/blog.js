// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

// Step 2: Define your component
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle='Blog'>
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
              <p>Posted: {node.frontmatter.date}</p>
          </article>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date(formatString: "DD/MM/yyyy")
            title
          }
          id
          body
        }
      }
    }
`

// Step 3: Export your component
export default BlogPage