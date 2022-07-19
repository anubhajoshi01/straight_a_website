import React from 'react'



function BlogCard({ title, content, imageUrls }) {
  return (
    <div className="container">
      {/* { <img className = 'img' src={blog.imageUrls}> </img> } */}
      <p>
        {imageUrls}
      </p>
      <h5 className='title'>
        {title}
      </h5>
      <p className='content'>
        {content}
      </p>
    </div>
  )
}

export default BlogCard