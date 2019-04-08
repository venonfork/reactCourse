import React from 'react';
import ReactDOM from 'react-dom';

// On import le fichier pour pouvoir le traiter 
import JSON from './db.json'

// on importe les differents component que l' on va afficher grace  l'index.js
import Header from './components/header'
import NewList from './components/news_list.js';


// on lui donne le nom d'une class car elle ne fait pas que afficher elle traite des elements 
class App extends React.Component{
//     une state est comme une variable qui stock des choses 
    state={
        // news va stocker les fichiers ce qui permettre de pouvoir le traiter apres en l'appelant avec ca variable 
        news: JSON,
       // Ici resultFilter va stocker le resultat du filtre pourvoir l afficher apres 
        resultFilter: []
    }

// le role de cette fonction est de recuperer un evenement entre au clavier 
    getKeywords=(event)=>{
//         Nous avons besoin ici de stocker l'element entrer au clavier dans une variable pour pouvoir le traiter plus facilement 
        let keyword= event.target.value;
//         Nous allons creer une variable qui va nous permettre de recuperer le result de la fonction  filtre
        const resultFilter = this.state.news.filter((item)=>{
//             on lui demande de retourner le result du filtre 
            return item.title.indexOf(keyword) > -1
            
        })
        // console.log(resultFilter)
//         this.setState nous permette de placer dans l'element state la valeur de la variable resultFilter
//         grace au resultfilter: resultfilter 
        this.setState({
            resultFilter: resultFilter
        })

    }
//     ici nous avons le rendu dit render 
    render(){
        // console.log(JSON)
//         nous avons creer deux variable afin de ne pas devoir avoir this.state.resultFilter ou this.state.news
        let newsFilter = this.state.resultFilter
        let newsWhole = this.state.news 
        return(
//             On creer une div dans laquelle nous avons les elements a afficher 
            <div>
//             on appel le composant header a qui nous ajoutons une fonction qui recupere les caracteres tapez 
                <Header keywords={this.getKeywords}/> 
//  ici on affiche un titre 
                         <h4>
                             the news are: 
                         </h4>
//             fonction qui permet de gerer l'affichage selon les cas les de figures
                <NewList news={newsFilter.length === 0 ? newsWhole : newsFilter }>
                {/* <NewList news={this.state.resultFilter === this.state.resultFilter ? this.state.resultFilter : this.state.news  }> */}
                </NewList>
            </div>
        )

    }
}


ReactDOM.render(<App />, document.getElementById('root'));

