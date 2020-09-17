import React from 'react';

const ThirdSec = (props) => {
    let { news, favFun, fav } = props;
    return (
        <>
            {news &&
                <div className="third">
                    <h2>{news.source.name}
                        <a className="star" onClick={() => { favFun(news.title) }}>{fav.includes(news.title) ? '⭐' : '✰'}</a>
                    </h2>
                    <h3>{news.description}</h3>
                    <h3>{news.content}</h3>
                    <a className="third3" href={news.url} target="_blank">
                        <h3>{news.title}</h3>
                    </a>
                </div>}
        </>
    )
}
export default ThirdSec;