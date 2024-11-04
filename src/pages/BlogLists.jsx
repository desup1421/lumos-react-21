import React from 'react'
import BlogList from '../components/BlogList'

const BlogLists = ({blogList}) => {
  return (
    <section>
        <header>
            <h2>Post</h2>
            <p>All the articles I have been post</p>
        </header>
				<BlogList blogList={blogList}/>
    </section>
  )
}

export default BlogLists