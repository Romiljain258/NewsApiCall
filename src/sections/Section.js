import React from 'react';
import FirstSec from './FirstSec';
import SecondSec from './SecondSec';
import ThirdSec from './ThirdSec';


const Section =()=>{
        return (
            <div>
                   <h1>Watch your favourite news</h1>             
            <div className="box">  
                    <FirstSec />
                    <SecondSec/>
                    <ThirdSec />
            </div>
            </div>
        )
}
export default Section;