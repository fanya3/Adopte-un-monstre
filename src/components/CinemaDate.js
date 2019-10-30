import React from "react"
import './CinemaDate.css';
import axios from 'axios'




class CinemaDate extends React.Component{
    state={
        movie : [], 
    }

    getMovies = () => {
        const randomId=Math.floor(Math.random() * (81))
        axios.get(`https://hackathon-wild-hackoween.herokuapp.com/movies`)
        .then(response => response.data)
        .then(data => {console.log("test Api", data) || 
        this.setState({movie: data.movies[randomId]})
    })
         }

         componentDidMount(){
            this.getMovies()
         }

    render(){
        console.log(this.props.monster)
        return(
            
            <div className="cinema-ticket"> 
            <h3>{this.state.movie.title}</h3>
            <h3>{this.props.monster}</h3>
            <img className="movie" src={this.state.movie.posterUrl} alt={this.state.movie.title}></img>
            </div>

                
        )
    }
}
export default CinemaDate
