import React from 'react';
import ReactDOM from 'react-dom';
import { slides } from '../Utils/slideconfig';
import {useState, useRef, useEffect} from 'react';


const Slides = (props) =>{
    const [slide, setslide] = useState(0);

    const handlenext = (props) =>{
        setslide(slide + 1);
    }
    const handlePrev = () =>{
        setslide(slide - 1);
    }
    const handlereset = () =>{
        setslide(0);
    }
    let slideKey = Object.keys(slides)[slide];

    return (
        <React.Fragment>
            <button onClick={handlenext}>Next</button>
            <button onClick={handlereset}>Reset</button>
            <button onClick={handlePrev}>Prev</button>
            <div>
                <h1>{slides[slideKey].title}</h1>
                <p>{slides[slideKey].text}</p>
            </div>
        </React.Fragment>
    )
}

export default Slides;