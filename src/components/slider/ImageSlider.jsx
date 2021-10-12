import React, {useState} from 'react'
import Card from '../cards/Card';
import { SliderData } from './SliderData';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import "./slider.css";

const ImageSlider = () => {

    const [current, setCurrent] = useState(1);
    const [currentNext, setCurrentNext] = useState(current + 1);

    const nextSlide = () => {
        if(current === 3 && currentNext === 4) { // End of the slide, user clicks next arrow
            setCurrent(0);
            setCurrentNext(1);
        }
        else {
            setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
            setCurrentNext(currentNext === SliderData.length - 1 ? 0 : currentNext + 1);
        }
    }

    const prevSlide = () => {
        if(current === 0 && currentNext === 1) { // Start of the slider, user clicks prev arrow
            setCurrent(3);
            setCurrentNext(4);
        }
        else {
            setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
            setCurrentNext(currentNext === 0 ? SliderData.length - 1 : currentNext - 1);
        }
    }

    if(!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <AiOutlineArrowLeft className="icon left-arrow" onClick={prevSlide}/>
            {
                SliderData.map((SliderData, index) => {
                    return  <div className={index === current ? 'slide active first' : 'slide inactive' && index === currentNext ? 'slide active second' : 'slide inactive'} key={index}>
                                {(index === current && (<Card {...SliderData}/>)) || (index === currentNext && (<Card {...SliderData}/>))}
                            </div>
                })
            }
            <AiOutlineArrowRight className="icon right-arrow" onClick={nextSlide}/>
        </section>
    )
}

export default ImageSlider
