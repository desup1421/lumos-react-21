import React from "react";
import BlogList from "../components/BlogList";

const Home = ({ blogList }) => {
  return (
    <section>
      <h1>Mingalaba</h1>
      <p>
        AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro
        blog theme. This theme follows best practices and provides accessibility
        out of the box. Light and dark mode are supported by default. Moreover,
        additional color schemes can also be configured.
      </p>
      <p>Read the blog posts or check README for more info.</p>
      <div className="d-flex gap-2">
        <p>Social Links:</p>
        <i className="bi bi-github"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-linkedin"></i>
      </div>

			<h2>Featured</h2>
			<hr />
      <BlogList blogList={blogList} />
    </section>
  );
};

export default Home;
