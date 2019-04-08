import React from 'react'
import '../css/styles.css' 

const NewItem = ({item})=>{
//    console.log(item.title)
    return (
      
        <div className="textjson">
            <h3 className="textjsontitre">{item.title}</h3>
            <div>
                 {item.feed}
            </div>
        </div> 
    )


}

export default NewItem

