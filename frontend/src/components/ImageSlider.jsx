import React, {useState} from 'react'
import sliderimg1 from '../res/slider_img1.jpg'
import qrcode from '../res/qrcode.jpg'
import { borderRadius, color, fontSize } from '@mui/system';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isActive, setIsActive] = useState(true)
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)

    const leftArrowStyles = {
        position:'absolute',
        top: '50%',
        transform: 'translate(0, -50%',
        left: '32px',
        fontSize: '45px',
        color: 'black',
        zIndex: '1',
        cursor: 'pointer'
    }
    const rightArrowStyles = {
        position:'absolute',
        top: '50%',
        transform: 'translate(0, -50%',
        right: '32px',
        fontSize: '45px',
        color: 'black',
        zIndex: '1',
        cursor: 'pointer'
    }

    const dotContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }

    const dot1Style = {
        position:'absolute',
        color: isActive ? '#56009A': 'white',
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '70px',
        top:'76%',
        left:"49%"
    }

    const dot2Style = {
        position:'absolute',
        color: isActive1 ? '#56009A': 'white',
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '70px',
        top:'76%',
        left:"50%"
    }
    const dot3Style = {
        position:'absolute',
        color: isActive2 ? '#56009A': 'white',
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '70px',
        top:'76%',
        left:"51%"
    }
   


    const titleStyle = {
        position:'absolute',
        top:'30%',
        left: '45%',
        fontSize:'200%',
        fontWeight: '700',
        color: 'white'
    }

    const btnStyle = {
        position:'absolute',
        height: '40px',
        width: '90px',
        top: '85%',
        left: '47%',
        color: 'white',
        background: 'Transparent',
        border: 'solid',
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? 3 : currentIndex-1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex+1
        setCurrentIndex(newIndex)
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    }
    console.log(slides[currentIndex].img)

    const dot1 = () =>{
        setIsActive(true);
        setIsActive1(false);
        setIsActive2(false);
        setCurrentIndex(0)
        
    }
    const dot2 = () =>{
        setCurrentIndex(1)
        setIsActive1(true);
        setIsActive(false);
        setIsActive2(false);
    }

    const dot3 = () =>{
        setCurrentIndex(2)
        setIsActive2(true);
        setIsActive(false);
        setIsActive1(false);
    }

  return (
    <div style={{height:'70%', width:'100%' , position:'relative', display:'flex'}}>
        <div style={leftArrowStyles} onClick={goToPrevious}> {'<'} </div>
        <div style={rightArrowStyles} onClick={goToNext}> {'>'} </div>
        <div style={dot1Style} onClick={dot1} > {'.'} </div>
        <div style={dot2Style} onClick={dot2}> {'.'} </div>
        <div style={dot3Style} onClick={dot3}> {'.'} </div>
        
        <div style={titleStyle}> Title</div>
        <div className='rectangle' style={btnStyle}> Read More</div>
        <div style={{ width:'100%', height:'70%',display:'flex', justifyContent:'center'}}>
            <img src={slides[currentIndex].img} width='80%'></img>
        </div>
    </div>
  )
}

export default ImageSlider