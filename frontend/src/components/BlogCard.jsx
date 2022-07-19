import React from 'react'



function BlogCard({ img,title,content }) {
  return (
    <div className="container">
      {/* <img className = 'img' src={img}> </img> */}
      <p>
        {img}
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