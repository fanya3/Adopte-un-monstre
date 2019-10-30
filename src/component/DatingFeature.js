import React from "react"
import './DatingFeature.css';
import video from '../assets/Video/videoFirst.mp4'

class DatingFeature extends React.Component{
    render(){
        return(
            <div>
                <video autoPlay loop muted >
                    <source src={video} type="video/mp4"></source>
                </video>
                <div className="welcome">
                    <h1>ADOPT A MONSTER</h1>
                    <p>Ready to try ?</p>
                    <input 
                        className="button"
                        type='button'
                        value='YES'
                    />
                    <input 
                        className="button"
                        type='button'
                        value='NO'
                    />
                </div>

            </div>
        )
    }
}
export default DatingFeature
