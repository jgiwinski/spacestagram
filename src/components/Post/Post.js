import './Post.scss'; 
import React from 'react';

export const Post = ({ id, title, date, image, desc, likeUnlikePhoto}) => {
    return (
        <article>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{desc}</p>
            <h2>{id}</h2>
            <button id={id} onClick={e => likeUnlikePhoto(e)}>LIKE</button>
        </article>
    )
}