import React from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json'

import Header from './components/header'
import NewList from './components/news_list.js';


class App extends React.Component{
    state={
        news: JSON,
        resultFilter: []
    }

    getKeywords=(event)=>{
        let keyword= event.target.value;
        const resultFilter = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
            
        })
        // console.log(resultFilter)
        this.setState({
            resultFilter: resultFilter
        })

    }
    render(){
        // console.log(JSON)
        let newsFilter = this.state.resultFilter
        let newsWhole = this.state.news 
        return(
            <div>
                <Header keywords={this.getKeywords}/> 

                         <h4>
                             the news are: 
                         </h4>
                <NewList news={newsFilter.length === 0 ? newsWhole : newsFilter }>
                {/* <NewList news={this.state.resultFilter === this.state.resultFilter ? this.state.resultFilter : this.state.news  }> */}
                </NewList>
            </div>
        )

    }
}


ReactDOM.render(<App />, document.getElementById('root'));

