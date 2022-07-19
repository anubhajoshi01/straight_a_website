import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BlogCard from "../../components/BlogCard"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, getPosts, reset } from '../../features/blog/blogSlice';
import { useParams } from "react-router-dom"



function ViewBlog(){
    const {id} = useParams()
    //console.log(id)
    const dispatch = useDispatch()
    const [viewBlog, setViewBlog] = useState('')
    const [title, setTitle] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [content, setContent] = useState('')
    
    const { showBlog, isLoading, isError, message, isSuccess } = useSelector(
        (state) => state.blogs
    )
    
    useEffect(() => {
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

        if(isSuccess ){
            console.log('success')
            
            setImgUrl(showBlog.imageUrls)
            
            setTitle(showBlog.title)
            
            setContent(showBlog.content)
            
        }
        return () =>{
            dispatch(reset())
        }

    }, [showBlog, isLoading, isSuccess, isError, dispatch])

    return (
        <>
        <Header />
            <BlogCard title={title} content={content} imageUrls={imgUrl}/>
            
        <Footer />
        </>
        

    )

}
export default ViewBlog