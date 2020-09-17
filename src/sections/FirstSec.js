import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SecondSec from './SecondSec';
import ThirdSec from './ThirdSec';

const FirstSec = () => {
    let [sources, setSources] = useState([]);
    let [currNews, setCurrNews] = useState('');
    let [thirdSec, setThirdSec] = useState('');
    let [fav, setFav] = useState([""]);
    let [isActive, setIsActive] = useState(false);

    useEffect(() => {
        axios.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bca35e3e1e51486a8e226a8a9fa2c3e5')
            .then(json => {
                setIsActive(true);
                setSources(json.data.articles);
            })
            .catch(err => err);
    }, []);

    const callThirdSec = (e) => {
        setThirdSec(e);
    };

    const favFun = (e) => {
        if (!fav.includes(e)) {
            let arr = [...fav, e];
            setFav(arr);
        }
        else {
            let i = fav.indexOf(e);
            fav.splice(i, 1);
            let f=fav;
            setFav(...f);
        }
    };


    if (!isActive) {
        return <h1>Loading...</h1>
    }
    else {
        return (
            <>
                <div>
                    {sources.map((item, id) => (
                        <li key={id} className="source">
                            <a onClick={() => (setCurrNews(item), setThirdSec(''))}>{item.source.name}</a>
                        </li>
                    ))}
                </div>
                <SecondSec callThirdSec={callThirdSec} favFun={favFun} fav={fav} currNews={currNews} />
                <ThirdSec news={thirdSec} favFun={favFun} fav={fav} />
            </>
        );
    }
}
export default FirstSec;