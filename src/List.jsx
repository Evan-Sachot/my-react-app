import React , { useState} from 'react';
function List(){
    const items = ['Objet',
         'objet2',
         'objet3']
    const list = items.map((items, index)=> <li key={index}>{items}</li>);
    return (
        <p>{list}</p>
    )
}
export default List;