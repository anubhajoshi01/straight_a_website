import Header from "../../components/Header"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from "./Blog"
import Footer from "../../components/Footer"
import ImageSlider from "../../components/ImageSlider"
import CategoryViewCard from "../../components/CategoryViewCard"
import BlogListCard from "../../components/BlogListCard"
import Form from "../../components/Form"

  
  const imgUrlCategoryViewDefault = 'https://static.wixstatic.com/media/11062b_e639c688221445f396084300eaccf184~mv2.jpeg/v1/crop/x_910,y_0,w_3748,h_3712/fill/w_467,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Back%20to%20School%20with%20Mask.jpeg'
  const defaultContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  
  

function Home() {
    return (
        <>
        <Header/>
        <div style={{display:'flex', flexDirection:'column'}}>
           
            
            <ul style={{display:'flex', flexDirection:'row'}}>
              <li><CategoryViewCard imgUrl={imgUrlCategoryViewDefault} title={'TITLE'} content={defaultContent}/></li>
              <li><CategoryViewCard imgUrl={imgUrlCategoryViewDefault} title={'TITLE'} content={defaultContent}/></li>
              <li><CategoryViewCard imgUrl={imgUrlCategoryViewDefault} title={'TITLE'} content={defaultContent}/></li>
              <li><CategoryViewCard imgUrl={imgUrlCategoryViewDefault} title={'TITLE'} content={defaultContent}/></li>
            </ul>
            <BlogListCard img={'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'} 
            title={'This is the Title'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}

          />
          <Form />
          <Footer/>
          
        </div>
        </>
    )
}

export default Home