import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogListCard from '../../components/BlogListCard'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './Blog.css'
import { getPosts, reset } from '../../features/blog/blogSlice'
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";
function Blog({ create }) {
    const { lang } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()


    console.log(`lang is ${lang}`)

    const { blogs, isLoading, isError, isSuccess, message } = useSelector((state) => state.blogs)
    const { user } = useSelector((state) => state.auth)

    const [pageNum, setPageNum] = useState(0)
    const [displayList, setDisplayList] = useState([])
    const [numTotalPages, setNumTotalPages] = useState(0);

    useEffect(() => {

        if (lang == null) {
            navigate('en')

        }

        dispatch(getPosts())

        if (isError) {
            console.log(message)
        }

        if(isLoading) {
            console.log('loading')    
        }

        if (!isLoading && isSuccess) {

            console.log("success")

            setDisplayList([])
            setNumTotalPages(Math.ceil(blogs.length / 3))

            let showFromIndex = pageNum * 3
            let append = []

            console.log(blogs)

            for (let i = showFromIndex; i < showFromIndex + 3 && i < blogs.length; i++) {
                //console.log(`${i} is ${blogs[i]}`)
                append.push(blogs[i])
                
                console.log(`type is ${typeof blogs[i].createdAt}`)
            }

            setDisplayList(append)
        }


    }, [pageNum, isLoading, isError, message, blogs, dispatch])

    const goToFirstPage = () => {
        setPageNum(0)
    }

    const goToLastPage = () => {
        setPageNum(numTotalPages - 1)
    }

    const nextPage = () => {
        if (pageNum < numTotalPages - 1) {
            setPageNum(pageNum + 1)
        }
    }

    const prevPage = () => {
        if (pageNum > 0) {
            setPageNum(pageNum - 1)
        }
    }

    const navToCreatePost = () => {
        navigate('../me/blog-input/create', { replace: true })
    }

    if(isLoading && !isSuccess){
        console.log(isSuccess)
        return (<Spinner/>)
    }

    else if (lang === 'zh') {
        return (
            <>
                <Header lang={'zh'} currPath={location.pathname} />
                <div className='blog-list-view'>
                    {
                        user ? <button className="create-post-btn" onClick={navToCreatePost}>Create</button> : null
                    }
                    <ul className="blog-list-show">
            
                            
               
                        {
                            displayList.map((item) => (
                                <li>

                                    <BlogListCard key={item._id} img={item.imageUrls} title={item.chineseTitle} content={item.chineseContent} id={item._id} lang={'zh'}/>

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
                            <div className="arrow">{`Page ${pageNum + 1} of ${numTotalPages}`}</div>
                        </li>
                        <li className="navigate-item-arrow">
                            <div className="arrow" onClick={nextPage}>{'>'}</div>
                        </li>
                        <li className="navigate-item-arrow">
                            <div className="arrow" onClick={goToLastPage}>{'>>'}</div>
                        </li>
                    </ul>

                </div>
                <Footer lang={'zh'}/>
            </>
        )
    }
    return (<>
        <Header lang={'en'} currPath={location.pathname} />
        <div className='blog-list-view'>
            {
                user ? <button className="create-post-btn" onClick={navToCreatePost}>Create</button> : null
            }
            <ul className="blog-list-show">
                {
                    displayList.map((item) => (
                        <li>

                            <BlogListCard key={item._id} img={item.imageUrls} title={item.title} content={item.content} id={item._id} lang={lang}/>

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
                    <div className="arrow">{`Page ${pageNum + 1} of ${numTotalPages}`}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={nextPage}>{'>'}</div>
                </li>
                <li className="navigate-item-arrow">
                    <div className="arrow" onClick={goToLastPage}>{'>>'}</div>
                </li>
            </ul>

        </div>
        <Footer />
    </> )
}

export default Blog