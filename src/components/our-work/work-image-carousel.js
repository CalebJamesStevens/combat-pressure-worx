import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function WorkImageCarousel() {
    const after1 = require('../../before-and-after-pics/after1.jpeg') 
    const before1 = require('../../before-and-after-pics/before1.jpeg') 
    const [workPics, setWorkPics] = useState(new Array())
    const [currentPicSet, setCurrentPicSet] = useState(0)
    
    useEffect(() => {
        setWorkPics([
        [after1, before1]
        ])
    }, [])


    return (
        <>
        <div className="work-image-carousel-container">
            <FaChevronLeft  className='carousel-sliders react-icon clickable' style={{'--icon-size': '4'}}></FaChevronLeft>
            <div className="work-images-container">
                <ReactCompareSlider
                    className='work-after-pic'
                    itemOne={<img className='work-after-pic' src={workPics[currentPicSet][0]}/>}
                    itemTwo={<img className='work-after-pic' src={workPics[currentPicSet][1]}/>}
                />
            </div>
            <FaChevronRight  className='carousel-sliders react-icon clickable' style={{'--icon-size': '4'}}></FaChevronRight>
        </div>
        </>
    )
}

export default WorkImageCarousel