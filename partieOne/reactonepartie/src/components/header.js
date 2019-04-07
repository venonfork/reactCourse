import React, { Component } from 'react';
import '../css/styles.css' 



class Header extends Component{
    state={
        keyword:'',
        tab1:[],
        title: 'The titre enter: '


    }

    inputChange = (event)=>{
    //    iterer si la valeur est plus grand que 5
        // if (event.target.value.length >5){
        //     this.state.tab1.push(this.state.keyword) 
        //     console.log(this.state.tab1)
        // }
        
        this.setState({
        
            keyword: event.target.value
        
        })
        
        

        // console.log(this.state.keyword)
        
     

        //console.log(event.target.value)
    }


    render(){
        return(
            <header>
                <h1 className="logo">LOGO</h1>
                <input type="text"  onChange={this.inputChange}/>
                <div>{this.state.title}</div>
                <div>{this.state.keyword}</div>
            </header>
        )
    }

}

export default Header;