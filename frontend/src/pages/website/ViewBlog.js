import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BlogCard from "../../components/BlogCard"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, getPosts, reset } from '../../features/blog/blogSlice';
import { useParams } from "react-router-dom"

import { useLocation, useNavigate } from "react-router-dom"

import './ViewBlog.css'
import Spinner from "../../components/Spinner";

function ViewBlog(){

    

    const {id, lang} = useParams()
    console.log(`blog id ${id}`)

    const location = useLocation()
    console.log(location.pathname)
    const navigate = useNavigate()

    console.log(`lang ${lang}`)
    //console.log(id)
    const dispatch = useDispatch()
    const [viewBlog, setViewBlog] = useState('')
    const [title, setTitle] = useState('')
    const [titleZh, setTitleZh] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [content, setContent] = useState('')
    const [contentZh, setContentZh] = useState('')
    const [displayed, setDisplayed] = useState(false)
  
    
    const { showBlog, isLoading, isError, message, isSuccess } = useSelector(
        (state) => state.blogs
    )
    
    useEffect(() => {
        console.log('success', isSuccess)
        console.log('displayed ', displayed)
        console.log('blog to show ', showBlog)

        if(lang == null) {
            navigate('en')
            
        }

        if(id && !displayed){
            dispatch(getPostById(id))
            console.log(showBlog)
        }
            
        if(isError){
            console.log('in is error')
            console.log(message)
        }

        if(isLoading){
            console.log('loading')
        }

        if(isSuccess && !displayed && showBlog){
            console.log('success')
            console.log(showBlog)
            
            setImgUrl(showBlog.imageUrls)
            
            setTitle(showBlog.title)
            setTitleZh(showBlog.chineseTitle)
            setContent(showBlog.content)
            setContentZh(showBlog.chineseContent)
            setDisplayed(true)
            
        }

        return () => {
            dispatch(reset())
        }
      

    }, [showBlog, isLoading, isSuccess, isError, dispatch, displayed])

    if(isLoading || !displayed) {
        console.log('return is loading')
        console.log(showBlog)
        return (
            <Spinner/>
        )
    }

    else if(lang === 'zh') {
        console.log('is zh')
        return (
            <>
            <Header lang={'zh'} currPath={location.pathname}/>
            <div className="view-blog-page">
                <img src={imgUrl} />
                <p><br/></p>
                <h1>{titleZh}</h1>
                <p><br/></p>
                <textarea readOnly style={{border:'none', padding:'20px', borderRadius:'10px', backgroundColor:'#e4d5f5', width:'100%', font:'caption', overflowY:'-moz-hidden-unscrollable', resize:'none', wordWrap:'break-word'}} value={contentZh}/>
            </div>
            <Footer lang={lang}/>
        </>
        )
    }

    console.log('is en')

    return (
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <div className="view-blog-page">
                <img src={imgUrl} />
                <p><br/></p>
                <h1>{title}</h1>
                <p><br/></p>
                <textarea readOnly style={{border:'none', padding:'20px', borderRadius:'10px', backgroundColor:'#e4d5f5', width:'100%', height:'1000px', font:'caption', overflowY:'-moz-hidden-unscrollable', resize:'none', wordWrap:'break-word'}} value={content}/>
            </div>
            <Footer lang={lang}/>
        </>
        

    )

}
export default ViewBlog