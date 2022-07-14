import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogListCard from '../../components/BlogListCard'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './Blog.css'
import {getPosts} from '../../features/blog/blogSlice'


function Blog() {

    /*const dispatch = useDispatch()

    dispatch(getPosts())

    const {blogs, isError, isSuccess, isLoading, message} = useSelector((state) => state.blogs)

    const [pageNum, setPageNum] = useState(0)
    const [displayList, setDisplayList] = useState([])
    const numTotalPages = Math.ceil(blogs.length/3)

    console.log(blogs[0])

    useEffect(
        () => {

            if(isSuccess){
                console.log('succeeded')
            }

            dispatch(getPosts())
            setDisplayList([])
            
            let showFromIndex = pageNum*3
            //console.log(`show from ${showFromIndex}`)
            let append = []
            for(let i = showFromIndex; i < showFromIndex+3 && i < blogs.length; i++){
                append.push(blogs[i])
                
            }
            setDisplayList(append)
            //console.log(displayList.length)
            
        },
        [pageNum, blogs, isSuccess]
    )*/

    const dispatch = useDispatch()

    const {blogs, isLoading, isError, isSuccess, message} = useSelector((state) => state.blogs)

    const [pageNum, setPageNum] = useState(0)
    const [displayList, setDisplayList] = useState([])
    const [numTotalPages, setNumTotalPages] = useState(0);

    useEffect(() => {
        dispatch(getPosts())
        
        if(isSuccess){
            console.log("success")

            setDisplayList([])
            setNumTotalPages(Math.ceil(blogs.length/3))

            let showFromIndex = pageNum*3
            let append = []

            for(let i = showFromIndex; i < showFromIndex+3 && i < blogs.length; i++){
                console.log(blogs[i])
                //append.push(blogs[i])
            }

            setDisplayList(append)
        }

    }, [pageNum, blogs, isError, isSuccess, message, isLoading])

    const goToFirstPage = () => {
        setPageNum(0)
    }

    const goToLastPage = () => {
        setPageNum(numTotalPages-1)
    }

    const nextPage = () => {
        if(pageNum < numTotalPages-1){
            setPageNum(pageNum+1)
        }
    }

    const prevPage = () => {
        if(pageNum > 0){
            setPageNum(pageNum-1)
        }
    }
    return <>
     <Header/>
        <div className='blog-list-view'>
            <ul className="blog-list-show">
                {
                    displayList.map((item) => (
                        <li>
                            <BlogListCard img={item.imageUrls} title={item.title} content={item.content}/>
                        </li>
                    ))
                }
            </ul>
            <ul className="navigate-horizontal">
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={goToFirstPage}>{'<<'}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={prevPage}>{'<'}</div>
                </li>
                <li className="navigate-item">
                    <div className="arrow">{`Page ${pageNum+1} of ${numTotalPages}`}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={nextPage}>{'>'}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={goToLastPage}>{'>>'}</div>
                </li>
            </ul>
            
        </div>
        <Footer/>
    </>
}

export default Blog