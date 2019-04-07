import React from 'react'

const NewItem = ({item})=>{
   
    return (
      
        <div>
            <h3>{item.title}</h3>
            <div>
                 {item.feed}
            </div>
        </div> 
    )


}

export default NewItem

