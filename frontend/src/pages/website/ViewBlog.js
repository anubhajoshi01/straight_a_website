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
    const [viewBlog, setViewBlog] = useState(null)
    const { blog, isLoading, isError, message, isSuccess } = useSelector(
        (state) => state.blogs
    )
    
    useEffect(() => {
        if(id){
            dispatch(getPostById(id))
            console.log(blog)
            setViewBlog(blog)
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
            dispatch(reset())
            
        }
    }, [blog, isLoading, isSuccess, isError, dispatch])

    return (
        <>
        <Header />
            {/* { <BlogCard img={viewBlog.imageUrls} content={viewBlog.content} title={viewBlog.title}/> } */}
        <Footer />
        </>
        

    )

}
export default ViewBlog