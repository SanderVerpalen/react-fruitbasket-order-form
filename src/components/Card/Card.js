import * as React from 'react';
import './card.css';

function Card({
                  children,
                  imgClassName,
                  img,
                  alt,
                  head,

              }) {
    return (
        <div className="card">
            <img className={imgClassName} src={img} alt={alt}/>
            <h2>{head}</h2>
            {children}
        </div>
    );
}

export default Card;