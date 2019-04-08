import React from 'react';
import '../css/styles.css' 



const Header = (props)=>{
    // state={
    //     keywords:'',
    //     tab1:[],
    //     title: 'The titre enter: ', 
    //     active: 'active'


    // }

    // inputChange = (event)=>{
    //     const value = event.target.value === '' ? 'non-active':'active'
    //     // iterer si la valeur est plus grand que 5
    //     // if (event.target.value.length >5){
    //     //     this.state.tab1.push(this.state.keyword) 
    //     //     console.log(this.state.tab1)
    //     // }
        
    //     this.setState({
    //         keywords: event.target.value,
    //         active: value
    //     })

        
    //     // console.log(this.state.keyword)
    //     //console.log(event.target.value)
    // }


    
        // console.log(this.props.keywords)
        return(
            // <header style={{background :`${this.state.Active ? 'blue': 'red'}`} }>
            // <header className={this.state.active }>
             <header>
                <h1 className="logo">LOGO</h1>
                <input type="text"  onChange={props.keywords}/>
                {/* <div>{this.state.title}</div> */}
                {/* <div>{this.state.keywords}</div> */}
            </header>
        )


}

export default Header;