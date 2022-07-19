import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BlogCard from "../../components/BlogCard"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, getPosts, reset } from '../../features/blog/blogSlice';




function ViewBlog({id}){
    const dispatch = useDispatch()
    const [viewBlog, setViewBlog] = useState('')
    const { blog, isLoading, isError, message, isSuccess } = useSelector(
        (state) => state.blogs
    )
    
    useEffect(() => {
        console.log('in')
        try {
            dispatch(getPostById(id))
            setViewBlog(blog)
        } catch (error) {
            console.log(error)
        }
        
        if(isError){
            console.log('in is error')
            console.log(message)
        }

        if(isLoading){
            console.log('loading')
        }

        if(isSuccess){
            console.log('success')
            
        }
        return () => {
            dispatch(reset())
        }
    }, [blog, isLoading, isSuccess, isError, dispatch])

    return (
        <>
        <Header />
            {/* <BlogCard img={viewBlog.imageUrls} content={viewBlog.content} title={viewBlog.title}/> */}
        <Footer />
        </>
        

    )

}
export default ViewBlog