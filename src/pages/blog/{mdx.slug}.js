// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

// Step 2: Define your component
const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
    query ($id: String) {
      mdx(id: {eq: $id}) {
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
        }
        body
      }
    }
`

// Step 3: Export your component
export default BlogPost