import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogList }) => {

  return (
    <div className="mb-5 pb-5">
      {blogList.map((blog) => (
        <div key={blog.id}>
          <Link className="article-title" to={`/blog-list/${blog.id}`}>
            {blog.title}
          </Link>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
