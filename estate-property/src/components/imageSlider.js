import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons'

export default function ImageSlider({pictures}){
    const [currentIndex, setCurrentIndex] = useState(0);

    const goBack = () => {
        const isFirstPic = currentIndex === 0;
        const newIndex = isFirstPic ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goForward = () => {
        const isLastPic = currentIndex === pictures.length - 1;
        const newIndex = isLastPic ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToPic = picIndex => {
        setCurrentIndex(picIndex);
        const isCurrentPic = currentIndex === picIndex;
    }

    return (
        <div className='image-slider-container'>
            <div className='image-slider'
            style={{backgroundImage: `url('${pictures[currentIndex]}')`}}>
                <button className='slider-arrow-left slider-arrow' onClick={goBack}><FontAwesomeIcon icon={faArrowLeft}  /></button>
                <button className='slider-arrow-right slider-arrow' onClick={goForward}><FontAwesomeIcon icon={faArrowRight}  /></button>
            </div>

            <div className='circles-container'>
                {pictures.map((pic, picIndex) => (
                    <div key={picIndex}><FontAwesomeIcon icon={faCircle} className='image-slider-dot' onClick={()=> goToPic(picIndex)}/></div>
                ))}
            </div>

            
        </div>
    )
}