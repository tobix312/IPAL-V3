import React from "react";
import "./Slider.css"
import { useInView } from "react-intersection-observer";



const Slider = ({imageScr, title, subTitle, flipped}) => {
    
    const {ref, inView } = useInView({
        threshold: 0.4,
    });

    const renderContent = () => {
        if (!flipped) {
            return (
            <>
                <img src={imageScr} alt="Study" className="slider_image"/>
                <div className = "slider_content">
                    <h1 className="slider_title">{title}</h1>
                    <p>{subTitle}</p>
                </div>
            </>
            )
        }
        else {
            return (
                <>
                <div className="slider">
                    <img src={imageScr} alt="Meeting" className="slider_image"/>
                    <div className = "slider_content">
                        <h1 className="slider_title">{title}</h1>
                        <p>{subTitle}</p>
                    </div>
                </div>
                </>
           );
        }
    };
    return <div className={inView ? "slider slider_zoom" : "slider"}ref={ref}>
        {renderContent()}</div>;
};
 
export default Slider