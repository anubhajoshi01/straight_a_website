import { set } from "mongoose"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { createPost, getPostById, reset, updatePost } from "../../features/blog/blogSlice"
import './BlogInput.css'
import { deletePost } from '../../features/blog/blogSlice'
import Spinner from "../../components/Spinner"
import { checkLoggedIn } from "../../features/auth/authSlice"

function BlogInput(){

    const {id} = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {showBlog,isUpdated, isLoading, isError, isSuccess, message, isDeleted} = useSelector((state) => state.blogs)
    const {user} = useSelector((state) => state.auth)

    const [imageUrl, setImageUrl] = useState(null)
    const [title, setTitle] = useState('')
    const [imageUrlText, setImageUrlText] = useState('')
    const [chineseTitle, setChineseTitle] = useState('')
    const [chineseContent, setChineseContent] = useState('')
    const [content, setContent] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [fetchedPost, setFetchedPost] = useState(false)
    const [displayed, setDisplayed] = useState(false)


    const onSubmit = (e) => {
        if(!checkLoggedIn()){
            navigate('/login')
        }
        else{
            console.log('click')
            e.preventDefault()
            setSubmitted(true)
            try{
                if(id !== 'create'){
                    console.log('updating')
                    const allData = {id, data:{title, content, imageUrls:imageUrl,chineseTitle, chineseContent}}
                
                    try{
                         dispatch(updatePost(allData))
                     }
                    catch(e){
                        console.log(e)
                        navigate('/login')
                    
                    }
                }
                else{
                
                    try{
                        dispatch(createPost({title, content, imageUrls:imageUrl,   chineseContent,chineseTitle}))
                    }
                    catch(e){
                        console.log(e)
                        navigate('/login')
                    
                    }
                }
            
                navigate('/blog')

            }catch(e){
                console.log(e)
            }
        }
    }

    useEffect(() => {

        if(!checkLoggedIn()) {
            navigate('/login')
        }
        else {
            console.log('in')
            console.log('deleted ',isDeleted)

            if(id != 'create' && !fetchedPost){
                
                try{
                
                    dispatch(getPostById(id))
                    setFetchedPost(true)
                }
                catch(e){
                    console.log(e)
                    navigate('/login')
                    
                }
                
            }
        }

        if(isError){
            console.log('in is error')
            console.log(message)
        }
        if(isSuccess && submitted && !id){
            console.log('success submitted')
            dispatch(reset())
            navigate('/blog')
        }

        if(isUpdated){
            console.log('success update')
            dispatch(reset())
            navigate('/blog')
        }

        if(isSuccess && fetchedPost && !displayed && showBlog){
            console.log('success fetched')
           // console.log(blogShow)
            setImageUrl(showBlog.imageUrls)
            setTitle(showBlog.title)
            setImageUrlText(showBlog.imageUrls)
            setContent(showBlog.content)
            setChineseContent(showBlog.chineseContent)
            setChineseTitle(showBlog.chineseTitle)
            setDisplayed(true)
        }

        if(isDeleted){
            console.log('success delete')
            dispatch(reset())
            navigate('/blog')
        
        }

        if(isLoading){
            console.log('loading')
        
        }

       
    }, [user, showBlog, isLoading, isSuccess, isError, isDeleted, message, dispatch])

    const onFindImage = () => {
        if(!checkLoggedIn()){
            navigate('/login')
        }
        setImageUrl(imageUrlText)
    }

    if(isLoading && !fetchedPost) {
        
        return (<Spinner/>)
    }
   
    console.log(content)

    return (



        <>
        
        <div className="blog-input-container">
            <h1>Blog Post</h1>
            <div className="title-container">
                <h3> Title:</h3>
                <input type='text' id='title' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            </div>
            
            <div className="title-container">
                <h3> Chinese Title:</h3>
                <input type='text' id='chineseTitle' value={chineseTitle} onChange={(e) => {setChineseTitle(e.target.value)}}/>
            </div>

            <div className="image-text-container">
                <h3>Image Url:</h3>
                <input type='text' id='imagetext' value={imageUrlText} onChange={(e) => {setImageUrlText(e.target.value)}}/>
                <button className="blog-input-btn" onClick={onFindImage}> Find </button>
            </div>
            <div>
                <h2>Image found:</h2>
                <img className="blog-image-sample" src={imageUrl} />
            </div>
            <div className="content-container">
                <h2>Content:</h2>
                <textarea className='scrollable-text-box' value={content} name='content' onChange={(e) => setContent(e.target.value)}/>
            </div>
            <div className="content-container">
                <h2> Chinese Content:</h2>
                <textarea className='scrollable-text-box' value={chineseContent} name='chineseContent' onChange={(e) => setChineseContent(e.target.value)}/>
            </div>
            <ul className="blog-input-horizontal-ul">
                <button className="blog-input-btn" onClick={onSubmit}>Submit</button>
                <button className="blog-input-btn" onClick = {() =>{
                    if(!checkLoggedIn()){
                        navigate('/login')
                    }
                    else{
                        console.log(id)
                        if(id === 'create'){
                            navigate('/blog')
                        }
                        else{
                        console.log('on delete')
                        
                        try{
                            dispatch(deletePost(id))
                        }
                        catch(e){
                            console.log(e)
                            navigate('/login')
                            
                        }
                        }
                    }
                    
                  
                }}>Delete</button>
            </ul>
        </div>
        </>
    )
}

export default BlogInput