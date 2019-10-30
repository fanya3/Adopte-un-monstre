import React from "react"
import './Elevator.css';
import back from '../assets/img/elevator-opened.png'
import axios from 'axios'




class Elevator extends React.Component{
    state={
        monster : [], 
        isOpen : false 
    }

    openDoors(){
        
        console.log(this.state.isOpen)
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
            <input type='button' className="elevatorButton" onClick={()=> this.getMonsters()}></input>
            <div className = "hideDoors">
                <div className="firstHide"></div>
                <div className="firstHide"></div>
            </div>
                 <div className= "doors">
                    { this.state.isOpen ?
                    <div>
                    <div className="elm sliding-door left opened"></div>
                    <div className="elm sliding-door right "></div>
                    <img className="monsters_left" src={this.state.monster} ></img>
                    </div>
                    :
                    <div> 
                    <div className="elm sliding-door left"></div>
                    <div className="elm sliding-door right opened"></div>
                    <img className="monsters_right" src={this.state.monster} ></img>
                    </div>
                    } 
                </div>
                <img className="background" src={back}></img>     
                
            </div>

                
        )
    }
}
export default Elevator
