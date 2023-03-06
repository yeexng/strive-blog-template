import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  const [blogPosts, setBlogPosts] = useState();

  const getBlogPosts = async () => {
    try {
      let res = await fetch("url");
      if (res.ok) {
        console.log(res);
        let blogPosts = await res.json();
        setBlogPosts(blogPosts);
      } else {
        console.log("Having Problem in fetching BlogPosts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
