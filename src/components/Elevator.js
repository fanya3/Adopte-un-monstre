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
        setTimeout(() => {
            this.setState({monster: data.monsters[randomId]})
        }, 600);
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
            
            <div className="elevator-container"> 
                <img className="elevator-background" src={back}></img>
                <div className="text-intro">
                    <input type='button' className="elevatorButton" onClick={()=> this.getMonsters()} value="NEXT"></input>
                    <h3> Click on the button to find your soul mate!</h3>
                </div>

                <div className = "elevator-hideDoors">
                    <div className="elevator-firstHide"></div>
                    <div className="elevator-firstHide"></div>
                </div>
                <div className = "elevator-hideBackground">
                    <div className="elevator-BgHide"></div>
                    <div className="elevator-BgHide"></div>
                </div>
                
                <>
                    { this.state.isOpen ?
                    <>
                    <div className= "elevator-doors">
                        <div className="elm sliding-door left opened"></div>
                        <div className="elm sliding-door right "></div>
                        <img className="elevator-monsters-left" src={this.state.monster.picture} ></img> 
                    </div>
                    <div className="elevator-description-left">
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
                    <div className= "elevator-doors">
                        <div className="elm sliding-door left"></div>
                        <div className="elm sliding-door right opened"></div>
                        <img className="elevator-monsters-right" src={this.state.monster.picture} ></img>
                    </div>
                    <div className="elevator-description-right">
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
