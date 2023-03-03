import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06, blog07 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="trade__blog section__padding" id="blog">
    <div className="trade__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br />Here is a snippet of it</h1>
    </div>
    <div className="trade__blog-container">
      <div className="trade__blog-container_groupA">
        <Article imgUrl={blog01}  text="Bundled with your e-commerce website or application,comes a payment intergration of your choice with fast ans secure Api" />
      </div>
      <div className="trade__blog-container_groupB">
        <Article imgUrl={blog02} text=" Fast, scalable, and efficient web applications for both the front-end and back-end."/>
        <Article imgUrl={blog03} text="A navbar that caters for both mobile tablet and desktop screen beautifully" />
        <Article imgUrl={blog04} text="Smooth scroll equals beautiful website." />
        <Article imgUrl={blog05} text="" />
        <Article imgUrl={blog06} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog07} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;