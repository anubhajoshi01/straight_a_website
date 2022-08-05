import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderMenu from './components/HeaderMenu'
import Footer from './components/Footer';
import sliderImg1 from './res/slider_img1.jpg'
import sliderImg2 from './res/slider_img2.jpg'
import sliderImg3 from './res/slider_img3.jpg'
import sliderImg4 from './res/slider_img4.jpg'
import ImageSlider from './components/ImageSlider';
import Form from './components/Form';
import CategoryViewCard from './components/CategoryViewCard';
import Login from './pages/admin-portal/Login';
import Admin from './pages/admin-portal/Admin';
import Blog from './pages/website/Blog'
import BlogListCard from './components/BlogListCard';
import Home from './pages/website/Home';
import ViewForms from './pages/admin-portal/ViewForms';
import BlogInput from './pages/admin-portal/BlogInput';
import ViewBlog from './pages/website/ViewBlog';
import OurStory from './pages/website/about-pages/OurStory'
import OurTeam from './pages/website/about-pages/OurTeam';
import TeamProfile from './pages/website/about-pages/TeamProfile';
import Main from './pages/website/Main';
import CaseStudies from './pages/website/about-pages/CaseStudies';
import OurReviews from './pages/website/about-pages/OurReviews';
import OurPartners from './pages/website/about-pages/OurPartners';
import ProBono from './pages/website/about-pages/ProBono';
import GradeAdmission6to8 from './pages/website/private-counseling-pages/GradeAdmission6to8';
import GradeAdmission8to11 from './pages/website/private-counseling-pages/GradeAdmission8to11';
import CollegeAdmission from './pages/website/private-counseling-pages/CollegeAdmission';
import CollegeTransfer from './pages/website/private-counseling-pages/CollegeTransfer';
import PrivateCounselingCategory from './pages/website/private-counseling-pages/PrivateCounselingCategory';
import EliteServiceCategory from './pages/website/elite-services/EliteServiceCategory'
import ResourceCategory from './pages/website/resources/ResourceCategory';
import EliteTestPrep from './pages/website/elite-services/EliteTestPrep';
import ElitePrivateTutoring from './pages/website/elite-services/ElitePrivateTutoring'
import SummerIntern from './pages/website/elite-services/SummerIntern'
import CareerCounseling from './pages/website/elite-services/CareerCounseling'


const slides = [
  {img: 'https://static.wixstatic.com/media/03c5c59e7e2748159fa0d753985f1052.jpg/v1/fill/w_1895,h_1032,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/03c5c59e7e2748159fa0d753985f1052.jpg', title:'img1'},
  {img: 'https://static.wixstatic.com/media/11062b_db30375d3d824082b985816b60724829~mv2.jpg/v1/fill/w_1895,h_1032,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_db30375d3d824082b985816b60724829~mv2.jpg', title:'img2'},
  {img: 'https://static.wixstatic.com/media/11062b_afd18fe1238c454b9ecd4bdd01555bab~mv2.jpg/v1/fill/w_1895,h_1032,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_afd18fe1238c454b9ecd4bdd01555bab~mv2.jpg', title:'img3'},
  {img: 'https://static.wixstatic.com/media/11062b_db30375d3d824082b985816b60724829~mv2.jpg/v1/fill/w_1895,h_1032,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_db30375d3d824082b985816b60724829~mv2.jpg', title:'img4'},

]

const imgUrlCategoryViewDefault = 'https://static.wixstatic.com/media/11062b_e639c688221445f396084300eaccf184~mv2.jpeg/v1/crop/x_910,y_0,w_3748,h_3712/fill/w_467,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Back%20to%20School%20with%20Mask.jpeg'
const defaultContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'



function App() {
  console.log("Hello")
  //for blog input: remove id prop here, this is for testing, must be connected to list view later
  return (
    <>
      <div>
      <Router>

            <Routes>
              //temporary form for dev purposes
              <Route path='/' element={<Main/>}/>
              <Route path='/:lang' element={<Main/>}/>
              <Route path='login' element={<Login/>} />
              <Route path='blog' element={<Blog/>}/>
              <Route path='blog/:lang' element={<Blog/>}/>
              <Route path='view-blog/:id' element={<ViewBlog/>} />
              <Route path='me' element={<Admin/>}>
                <Route path='view-forms' element={<ViewForms/>}/>
                <Route path='blog-input/:id' element={<BlogInput create={false}/>}/> 
                <Route path='blog-input' element={<BlogInput create={true}/>}/>
              </Route>
              <Route path='our-story' element={<OurStory/>}/>
              <Route path='our-team' element={<OurTeam/>}/>
              <Route path='our-team/:id'  element={<TeamProfile/>}/>
              <Route path='case-studies' element={<CaseStudies/>}/>
              <Route path='testimonials' element={<OurReviews/>}/>
              <Route path='our-partners' element={<OurPartners/>}/>
              <Route path='pro-bono' element={<ProBono/>}/>

              <Route path='private-counseling' element={<PrivateCounselingCategory/>}/>
              <Route path='6-8-grade-admission' element={<GradeAdmission6to8/>}/>
              <Route path='8-11-grade-admission' element={<GradeAdmission8to11/>}/>
              <Route path='college-admission' element={<CollegeAdmission/>}/>
              <Route path='college-transfer' element={<CollegeTransfer/>}/>

              <Route path='elite-services' element={<EliteServiceCategory/>}/>
              <Route path='elite-test-prep' element={<EliteTestPrep/>}/>
              <Route path='elite-private-tutoring' element={<ElitePrivateTutoring/>}/>
              <Route path='elite-private-tutoring/:lang' element={<ElitePrivateTutoring/>}/>
              <Route path='summer-intern' element={<SummerIntern/>}/>
              <Route path='summer-intern/:lang' element={<SummerIntern/>}/>
              <Route path='career-counseling' element={<CareerCounseling/>}/>
              <Route path='career-counseling/:lang' element={<CareerCounseling/>}/>
              
              <Route path='resources' element={<ResourceCategory/>}/>

            </Routes>
      </Router>
      </div>
    
    </>
  );
}

export default App;
