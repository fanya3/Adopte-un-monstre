import React from "react"
import './CinemaDate.css';
import axios from 'axios'
import video from '../assets/Video/test_4.mov'
import Monster from '../assets/img/monster.jpg'
import Ticket from '../assets/img/téléchargement.png'
import Stamp from '../assets/img/Untitled-1.png'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return state  
  }

class CinemaDate extends React.Component{
    state={
        movie : [],
        isDisplayed : true
    }

    getMovies = () => {
        const randomId=Math.floor(Math.random() * (81))
        axios.get(`https://hackathon-wild-hackoween.herokuapp.com/movies`)
        .then(response => response.data)
        .then(data => {console.log("test Api", data) || 
        this.setState({movie: data.movies[randomId]})
    })
    
    }
    changeDisplay = () => {
        setTimeout(() => {
            this.setState({
            isDisplayed: !this.state.isDisplayed
          })
        }, 4000);
         }

         componentDidMount(){
            this.getMovies()
            this.changeDisplay()
         }

    render(){
        return(
        <>{this.state.isDisplayed ?
        <div className = "video_container">
            <video autoPlay muted className="video_shining">
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
        :
        <div className="ticket_container">
            <img className="stamp" src={Stamp}></img>
            <img className="cinema-ticket" src={Ticket}></img>
            <h1 className="ticket_title">Meet your date at the cinema following this ticket</h1>
            <div className="your_match">
                <h1 className="match_title">{this.props.monster.name}</h1>
                <img className="monster_img" src={this.props.monster.picture}></img>
            </div>
            <div className="your_date">
                <h1 className="match_title">{this.state.movie.title}</h1>
                <img className="monster_img" src={this.state.movie.posterUrl}></img>
            </div>
            
        </div>
        
        }
        </>  
             

                
        )
    } 
}
export default connect(mapStateToProps)(CinemaDate)
