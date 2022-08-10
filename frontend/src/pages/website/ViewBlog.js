import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BlogCard from "../../components/BlogCard"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, getPosts, reset } from '../../features/blog/blogSlice';
import { useParams } from "react-router-dom"

import { useLocation, useNavigate } from "react-router-dom"

import './ViewBlog.css'

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
    const [imgUrl, setImgUrl] = useState('')
    const [content, setContent] = useState('')
    const [displayed, setDisplayed] = useState(false)
    
    const { showBlog, isLoading, isError, message, isSuccess } = useSelector(
        (state) => state.blogs
    )
    
    useEffect(() => {

        if(lang == null) {
            navigate('en')
            
        }

        if(id){
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

        if(isSuccess && !displayed){
            console.log('success')
            
            setImgUrl(showBlog.imageUrls)
            
            setTitle(lang === 'zh' ? showBlog.chineseTitle : showBlog.title)
            
            setContent(lang === 'en' ? showBlog.content : showBlog.chineseContent)

            setDisplayed(true)
            
        }
        return () =>{
            console.log('reset')
            dispatch(reset())
        }

    }, [showBlog, isLoading, isSuccess, isError, dispatch, displayed])

    if(lang === 'zh') {
        <>
            <Header lang={'zh'} currPath={location.pathname}/>
            <img className="blog-image-sample" src={imgUrl} />
            <p><br/></p>
            <h1>{title}</h1>
            <p><br/></p>
            <p>{content}</p>
            <Footer lang={lang}/>
        </>
    }

    return (
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <div className="view-blog-page">
                <img src={imgUrl} />
                <p><br/></p>
                <h1>{title}</h1>
                <p><br/></p>
                <p>{content}</p>
            </div>
            <Footer lang={lang}/>
        </>
        

    )

}
export default ViewBlog