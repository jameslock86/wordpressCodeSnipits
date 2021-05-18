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

        
        return(
            <div>
                Latitude:{this.state.latitude}
                <br/>
                longitude:{this.state.longitude}
                <br/>
                Error: {this.state.errorMessage}
                <SeasonDisplay/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));