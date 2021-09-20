import './Post.scss'; 
import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

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
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className='title-date'>
                <FaHeart />
                <FaRegHeart />
                <button id={id} onClick={e => likeUnlikePhoto(e)}>LIKE</button>
                <h3>{formatDate(slashDate)}</h3>
            </div>
        </article>
    )
}

// {isLiked&& <AiFillHeart size='30' onClick={() => userInput()}>


// {!isLiked && <AiOutlineHeart className='outlineHeart' data-cy='outlineHeart' size='25' onClick={() => userInput()}></AiOutlineHeart>}