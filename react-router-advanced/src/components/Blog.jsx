import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BlogPost from './BlogPost';

const Blog = () => {
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path=":postId" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default Blog;
