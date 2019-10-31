import React from "react"
import './DatingFeature.css';
import video from '../assets/Video/videoFirst.mp4'
import {Link} from 'react-router-dom'
import audio from '../assets/Audio/adopt.mp3'

class DatingFeature extends React.Component{
    render(){
        return(
            <div>
                <video autoPlay loop muted >
                    <source src={video} type="video/mp4"></source>
                </video>
                <audio autoPlay loop>
                    <source src={audio} typ="audio/mp3"></source>
                </audio>
                <div className="welcome">
                <h1 className="text middle" data-text="adopt a monster">ADOPT A MONSTER</h1>
                    <p>Ready to try ?</p>
                    <div className="choice">
                        <Link 
                        to='/Elevator' 
                        className="button-welcome"
                        type='button'>
                        YES
                    </Link>
                    <Link
                        to='/ifNoScreen'
                        className="button-welcome"
                        type='button'>
                        NO
                    </Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default DatingFeature
