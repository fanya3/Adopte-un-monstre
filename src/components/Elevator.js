import React from "react"
import './Elevator.css';
import back from '../assets/img/elevator-opened-ok.png'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return state  
  }

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
        this.setState({monster: data.monsters[randomId]})
        this.setState({isOpen : !this.state.isOpen})
    })
         }
         _userArray() {
            const action = { type : "USER_LOADED", value : this.state.monster}
            this.props.dispatch(action)
        }

         componentDidMount(){
            this.getMonsters()
         }
         
    

    render(){
        console.log('je montre state global', this.props)
        return(
            
            <div className="container"> 
                <img className="background" src={back}></img>
                <div className="text-intro">
                    <input type='button' className="elevatorButton" onClick={()=> this.getMonsters()} value="NEXT"></input>
                    <h3> Click on the button to find your soul mate!</h3>
                </div>

                <div className = "hideDoors">
                    <div className="firstHide"></div>
                    <div className="firstHide"></div>
                </div>
                <div className = "hideBackground">
                    <div className="BgHide"></div>
                    <div className="BgHide"></div>
                </div>
                
                <>
                    { this.state.isOpen ?
                    <>
                    <div className= "doors">
                        <div className="elm sliding-door left opened"></div>
                        <div className="elm sliding-door right "></div>
                        <img className="monsters_left" src={this.state.monster.picture} ></img> 
                    </div>
                    <div className="description_left">
                        <p>Your potential soulmate:</p>
                        <h1>{this.state.monster.name}</h1>
                        <div className="sexAppeal">
                            <h3>His level of sex appeal :</h3> 
                            <h1>{this.state.monster.level}</h1>
                        </div>
                        <div className="sexAppeal">
                            <h3>Here, you will understand why he's the one for you :</h3>
                            <p>{this.state.monster.description}</p>
                        </div>
                        <Link 
                            onClick = {() => this._userArray()}
                            to='/CinemaDate' 
                            className="button-match"
                            type='button'>
                                IN LOVE?
                        </Link>
                    </div>
                    </>
                        :
                    <>
                    <div className= "doors">
                        <div className="elm sliding-door left"></div>
                        <div className="elm sliding-door right opened"></div>
                        <img className="monsters_right" src={this.state.monster.picture} ></img>
                    </div>
                    <div className="description_right">
                    <p>Your potential soulmate:</p>
                        <h1>{this.state.monster.name}</h1>
                        <div className="sexAppeal">
                            <h3>His level of sex appeal :</h3> 
                            <h1>{this.state.monster.level}</h1>
                        </div>
                        <div className="sexAppeal">
                            <h3>Here, you will understand why he's the one for you :</h3>
                            <p>{this.state.monster.description}</p>
                        </div>
                        <Link 
                            onClick = {() => this._userArray()}
                            to='/CinemaDate' 
                            className="button-match"
                            type='button'>
                                IN LOVE?
                        </Link>
                    </div>
                    </>
                    } 
                    
                </>     
                
                    

            </div>
                
        )
    }
}
export default connect(mapStateToProps)(Elevator);
