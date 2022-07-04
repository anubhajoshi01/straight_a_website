import React from 'react'
import './CategoryViewCard.css'

const CategoryViewCard = ({imgUrl, title, content}) => {
  return (
    <div className='categoryview'>
        <img className='categoryimg' src={imgUrl}/>
        <h5 className='categorytitle'> {`|${title}`} </h5>
        <p className='categoryctn'> {content} </p>
        <p className='learnmore'> Learn more {'>'}`</p>
    </div>
  )
}

export default CategoryViewCard