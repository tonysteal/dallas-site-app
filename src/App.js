import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BlogList from './components/BlogList';
import NewPostForm from './components/NewPostForm';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome to Dallas Blog',
      content: 'This is the first post on our new blog. We will be sharing updates, news, and interesting stories about Dallas.',
      date: '2023-11-01',
      author: 'Admin'
    },
    {
      id: 2,
      title: 'Getting Started with React',
      content: 'React is a popular JavaScript library for building user interfaces. It makes it easy to create interactive UIs.',
      date: '2023-11-05',
      author: 'Developer'
    }
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <Header />
      <main className="content">
        <NewPostForm onAddPost={addPost} />
        <h2>Latest Posts</h2>
        <BlogList posts={posts} />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Dallas Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
