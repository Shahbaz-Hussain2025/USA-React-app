import React from 'react';
import "./Blog.css"

function Blog() {
   const myblogs = [
    {
      "id": 1,
      "title": "Exploring Web Development",
      "img": "/al.jpg",
      "description" : "Learn the latest trends and techniques in web development."

    },
    {
      "id":2,
      "title": "Exploring Web Development",
      "img": "/al.jpg",
      "description" : "Learn the latest trends and techniques in web development."

    }
   ]
  return (
    
    <div className="blog-main">
      <div>
        <img src="" alt="" />
      </div>
      <h1>Our Blog</h1>
      <div className="blog-container">
        {myblogs.map((blog, index) => (
          <div key={index} className="blog-card">
            {/* Dynamic Image */}
            <img src={blog.img} alt={blog.id} className="blog-image" />
            
            {/* Dynamic Title */}
            <h3>{blog.title}</h3>

            {/* Dynamic Description */}
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
