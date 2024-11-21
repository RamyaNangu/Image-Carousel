import { useState,useEffect } from "react"
import {imagesList} from './contants'

const ImageSlider = () => {
    const [activeImageIndex,setActiveImageIndex] = useState(0)

    const handleNextButton = () =>{
        const index = activeImageIndex + 1 
        if(index > imagesList.length-1){
            setActiveImageIndex(0)
            return
        }
        setActiveImageIndex(index)

    }

    const handlePreviousButton = () => {
        let index = activeImageIndex - 1
        if(index < 0){
            setActiveImageIndex(imagesList.length - 1)
            return
        }
        setActiveImageIndex(index)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            handleNextButton()
        },5000)

        return ()=>{
            clearTimeout(timer)
        }
    },[activeImageIndex])

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div><h1 className="text-xl font-bold m-3">Images Carousel</h1></div>
            <div className="flex justify-center items-center">
            <button className="font-bold mx-3" onClick={handlePreviousButton}>Previous</button>
            {imagesList.map((url,index)=><img key={index} src={url}  className={'w-[500px] bg-cover ' + (index===activeImageIndex ? "block":"hidden")} alt="carousel-image"/>)}
           
           <button className="font-bold mx-3" onClick={handleNextButton}>Next</button>
           </div>
        </div>
    )
}

export default ImageSlider