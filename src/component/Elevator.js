import React from "react"
import './Elevator.css';
import back from '../assets/img/elevator-opened.png'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'



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

         componentDidMount(){
            this.getMonsters()
         }
    inlove = () => {
        const monster = this.state.monster;
        monster.push('/CinemaDate')
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
            
            
            <input  className="inLove" type="button" onClick={()=> this.inlove()}/>

            </div>
                
        )
    }
}
export default withRouter(Elevator)
