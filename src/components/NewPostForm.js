import React, { useState } from 'react';

const NewPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !content || !author) return;
    
    const newPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      author
    };
    
    onAddPost(newPost);
    
    // Reset form
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="new-post-form">
      <h3>Add New Post</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
          />
        </div>
        
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;