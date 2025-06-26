import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost 
          key={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default BlogList;