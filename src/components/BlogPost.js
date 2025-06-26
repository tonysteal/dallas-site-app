import React from 'react';

const BlogPost = ({ title, content, date, author }) => {
  return (
    <article className="blog-post">
      <h2>{title}</h2>
      <div className="post-meta">
        <span>By {author}</span>
        <span> • </span>
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
      <div className="post-content">
        {content}
      </div>
    </article>
  );
};

export default BlogPost;