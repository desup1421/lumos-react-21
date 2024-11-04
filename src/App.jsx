import React, { Component } from "react";
// import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogLists from "./pages/BlogLists";
import Tags from "./pages/Tags";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import Footer from "./components/Footer";
import axios from "axios";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      features: [],
      selectedPost: {},
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        const features =
          response.data.length > 5 ? response.data.slice(0, 3) : response.data;
        this.setState({
          posts: response.data,
          features: features,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPostDetail = (id) => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        this.setState({
          selectedPost: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home blogList={this.state.features} />} />
            <Route
              path="/blog-list"
              element={<BlogLists blogList={this.state.posts} />}
            />
            <Route path="/tags" element={<Tags />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/blog-list/:id"
              element={
                <BlogDetail
                  getPostDetail={this.getPostDetail}
                  selectedPost={this.state.selectedPost}
                />
              }
            />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
