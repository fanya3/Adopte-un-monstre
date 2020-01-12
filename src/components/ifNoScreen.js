import React from "react"
import './ifNoScreen.css';
import video from '../assets/Video/videoFirst.mp4'
import {Link} from 'react-router-dom'
import audio from '../assets/Audio/adopt.mp3'



class ScreenNo extends React.Component{
    render(){
        return(
            <div>
                <audio autoPlay loop>
                    <source src={audio} type="audio/mp3"></source>
                </audio>
                <video autoPlay loop muted >
                    <source src={video} type="video/mp4"></source>
                </video>
                <div className="welcome">
                    <h1>WHAT A PITY !</h1>
                    <p>We had a great monster to introduce to you !</p>
                    <div className="choice-back">
                        <Link
                        to='/Elevator'
                        className="button"
                        type='button'>
                        Have you changed your mind ?
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}
export default ScreenNo;