import React, { Component } from 'react'
import ReactDOM from 'react-dom'



import SeasonDisplay from './SeasonDisplay'
    
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude:null,
            longitude:null,
            errorMessage:''
        }
        window.navigator.geolocation.getCurrentPosition(
            
            (position) => {
                this.setState({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                })
            }
            ,
            (error) => {
                this.setState({
                    errorMessage:error.message
                })
            }
            

        );
    
    }

    componentDidMount(){

    }
    
    render(){
        if(this.state.error && !this.state.latitude){
            return<div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude){
            return (
                <div>
                    Latitude:{this.state.latitude}
                    <br/>
                    longitude:{this.state.longitude}
                    <br/>
                </div>
            )
        }
    return <div>Loading!</div>;
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));