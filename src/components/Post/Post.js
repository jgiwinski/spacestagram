import './Post.scss'; 
import React from 'react';

export const Post = ({ id, title, date, image, desc }) => {
    return (
        <article>
            <img id={id} src={image} alt='apod'/>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{desc}</p>
            <button>LIKE</button>
        </article>
    )
}