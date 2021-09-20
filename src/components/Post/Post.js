import './Post.scss'; 
import React from 'react';

export const Post = ({ id, title, date, image, desc, likeUnlikePhoto}) => {

    const slashDate = date.replaceAll('-', '/')
    const formatDate = inputDate => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(inputDate);
        return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() ;
    }

    return (
        <article>
            <img className='apod' src={image} alt={title}/>
            <div className='title-date'>
                <h2>{title}</h2>
                <h3>{formatDate(slashDate)}</h3>
            </div>
            <p>{desc}</p>
            <button id={id} onClick={e => likeUnlikePhoto(e)}>LIKE</button>
        </article>
    )
}