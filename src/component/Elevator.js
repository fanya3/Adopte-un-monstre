import React from "react"
import './Elevator.css';
import back from '../assets/img/elevator-opened.png'
import axios from 'axios'
import CinemaDate from '../components/CinemaDate'




class Elevator extends React.Component{
    state={
        monster : [], 
        isOpen : false 
    }


    getMonsters = () => {
        const randomId=Math.floor(Math.random() * (19))
        axios.get(`https://hackathon-wild-hackoween.herokuapp.com/monsters`)
        .then(response => response.data)
        .then(data => {console.log("test Api", data) || 
        this.setState({monster: data.monsters[randomId].picture})
        this.setState({isOpen : !this.state.isOpen})
    })
         }

         componentWillMount(){
            this.getMonsters()
         }

    render(){
        return(
            
            <div className="container"> 
            <img className="background" src={back}></img>
            <input type='button' className="elevatorButton" onClick={()=> this.getMonsters()}></input>
            <div className = "hideDoors">
                <div className="firstHide"></div>
                <div className="firstHide"></div>
            </div>
            <>
                { this.state.isOpen ?
                <>
                <div className= "doors">
                <div className="elm sliding-door left opened"></div>
                <div className="elm sliding-door right "></div>
                <img className="monsters_left" src={this.state.monster} ></img> 
                </div>
                <div className="description_left"> </div>
                </>
                    :
                <>
                <div className= "doors">
                <div className="elm sliding-door left"></div>
                <div className="elm sliding-door right opened"></div>
                <img className="monsters_right" src={this.state.monster} ></img>
                </div>
                <div className="description_right"> </div>
                </>
                } 
                
            </>     
            <input type='button' className="INLOVE" onClick={()=> this.getMonsters()}></input>

            <CinemaDate
            monster = {this.state.monster}/>
            </div>
                
        )
    }
}
export default Elevator
