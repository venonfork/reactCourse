import React from 'react'
import NewItem from './new_list_item';

const NewList = (props) =>{
    // console.log(props)
const items = props.news.map((item)=>{
    return (
        <NewItem key={item.id} item={item}/>
        )
})
    return (

        <div>{items}</div>
    )


}
export default NewList
