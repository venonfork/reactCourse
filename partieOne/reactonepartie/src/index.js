import React from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json'
import Header from './components/header'
import NewList from './components/news_list.js';


class App extends React.Component{
    state={
        news: JSON
    }
    render(){
        // console.log(JSON)
        return(
            <div>
                <Header/> 
                <NewList news={this.state.news}/>
            </div>
        )

    }
}


ReactDOM.render(<App />, document.getElementById('root'));

