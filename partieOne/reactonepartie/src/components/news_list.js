import React from 'react'

const NewList = (props) =>{
    // console.log(props)
const items = props.news.map((item)=>{
    return (<div>
        <h3>{item.title}</h3>
        <div>
            {item.feed}
        </div>
    </div>
             
        )
})
    return (

        <div>{items}</div>
    )


}
export default NewList