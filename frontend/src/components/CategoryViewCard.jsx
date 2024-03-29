import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CategoryViewCard.css'

const CategoryViewCard = ({imgUrl, title, content, navLink, msg}) => {
  const navigate = useNavigate()

  return (
    <div className='categoryview' onClick={()=> {navigate(navLink)}}>
        <img className='categoryimg' src={imgUrl}/>
        <h5 className='categorytitle'> {`|${title}`} </h5>
        <p className='categoryctn'> {content} </p>
        <p className='learnmore'> {msg} {'->'}</p>
    </div>
  )
}

export default CategoryViewCard