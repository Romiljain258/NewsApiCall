import React from 'react';

const SecondSec = (props) => {
    let { currNews, callThirdSec, favFun, fav } = props;
    return (<>
        {currNews &&
            <div>
                <h2>{currNews.source.name}</h2>
                <h3 className="heading" onClick={() => { callThirdSec(currNews) }}>{currNews.title}</h3>
                <img className="image" src={currNews.urlToImage} />
                <h3>{currNews.publishedAt}</h3>
                <a className="star" onClick={() => { favFun(currNews.title) }}>{fav.includes(currNews.title) ? '⭐' : '✰'}</a>
            </div>}
    </>
    )
}
export default SecondSec;