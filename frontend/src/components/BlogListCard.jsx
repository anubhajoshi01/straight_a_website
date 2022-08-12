import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './BlogListCard.css'

const BlogListCard = ({img, title, content, id, lang}) => {
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    const onClick = () => {
       // navigate('/')
       if(user){
            navigate(`../me/blog-input/${id}`, {replace:true})
       }
       else{
            navigate(`../../view-blog/${id}/${lang}`, {replace:true})
       }
    }


  return (
    <div className='blog-list-card-container' onClick={onClick}>
        <ul className='blog-listviewcard-horizontal'>
            <li>
                <img className='blog-list-card-img' src={img}/>
            </li>
            <li>
                <div className='blog-card-content-container'>
                <ul className='blog-listviewcard-vertical'>
                    <h5 className='blog-card-title'> {`|${title}`} </h5>
                    <p className='blog-card-content'> {content.length <= 350 ? content : content.substring(0,450)+'..'}</p>
                    {/* <p className='blog-card-content'> {content.length <= 450 ? content : content.substring(0,450)}</p> */}
                    <p className='blog-card-learnmore'>Learn more {'>'}</p>
                </ul>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default BlogListCard