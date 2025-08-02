import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className="section">
      <h1>Blog Details</h1>
      {blogs.length === 0 && <p>No blogs yet.</p>}

      {blogs.length > 0 && blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p><strong>{blog.author}</strong></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
