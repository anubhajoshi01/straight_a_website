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

        if(isSuccess){
            console.log('success')
            
            
        }
    }, [showBlog, isLoading, isSuccess, isError, dispatch])

    return (
        <>
        <Header />
        
        <Footer />
        </>
        

    )

}
export default ViewBlog