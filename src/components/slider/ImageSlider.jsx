import React, {useState} from 'react'
import Card from '../cards/Card';
import { SliderData } from './SliderData';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import "./slider.css";

const ImageSlider = () => {

    const [current, setCurrent] = useState(0);
    const [currentNext, setCurrentNext] = useState(current + 1);

    const nextSlide = () => {
        if(current === 2 && current.Next === 3) {
            setCurrent(3);
            setCurrentNext(0);
        }
        else {
            setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
            setCurrentNext(currentNext === SliderData.length - 1 ? 0 : currentNext + 1);
        }
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
        setCurrentNext(currentNext === 0 ? SliderData.length - 1 : currentNext - 1);
    }

    console.log('current: ' + current);
    console.log('currentNext: ' + currentNext);

    if(!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }


    
    return (
        <section className="slider">
            <AiOutlineArrowLeft className="icon left-arrow" onClick={prevSlide}/>
            {
                SliderData.map((SliderData, index) => {
                    return  <div className={index === current ? 'slide active first' : 'slide' && index === currentNext ? 'slide active second' : 'slide'} key={index}>
                                {(index === current && (<Card /*key={SliderData.id}*/ {...SliderData}/>)) || (index === currentNext && (<Card {...SliderData}/>))}
                            </div>
                })
            }
            <AiOutlineArrowRight className="icon right-arrow" onClick={nextSlide}/>
        </section>
    )
}

export default ImageSlider
