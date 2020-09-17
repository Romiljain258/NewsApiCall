import React from 'react';

const Fav=(props)=>{
    let {name}=props;
    console.log('name',name);
    return(
        <>
        <h1>Bombay</h1>
        {/* {name.map(val=>
            <h1>{val.urlToImage}</h1>
            
          )} */}
          <h2>{name.content}</h2>
        </>
    )
}
export default Fav;