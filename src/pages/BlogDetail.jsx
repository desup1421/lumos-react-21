import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = ({ getPostDetail, selectedPost }) => {
	const { id } = useParams();
	getPostDetail(id);
  return (
    <section>
      <header>
        <h2 className="detail-title">{selectedPost.title}</h2>
      </header>
      <article>
        <section>
          <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
        </section>
      </article>
    </section>
  );
};

export default BlogDetail;
