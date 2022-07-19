import React from 'react'
import './BlogCard.css'
import '../res/slider_img1.jpg'


function BlogCard({ title, content, imageUrls }) {
  return (
    <div className="container">
      
      <img className='img' src={imageUrls} alt='w' /> 
      <h2 className='title'>
        {title}
      </h2>
      <div className='content-container'>
        <p className='content'>
          {content}
        </p>
      </div>
      
    </div>
  )
}

export default BlogCard