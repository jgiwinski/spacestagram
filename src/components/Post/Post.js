import './Post.scss'; 
import React, { useState} from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const Post = ({ id, title, date, image, desc, likeUnlikePhoto, liked}) => {
    const [isLiked, setIsLiked] = useState(false);

    const slashDate = date.replaceAll('-', '/')
    const formatDate = inputDate => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(inputDate);
        return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() ;
    }
    
    const changeHeart = () => {
        if (isLiked) {
            setIsLiked(false);
          } else {
            setIsLiked(true);
          }
    }

    return (
        <article>
            <img className='apod' src={image} alt={title}/>
            <h2>{title}</h2>
            <p className='desc'>{desc}</p>
            <div className='title-date'>
            {isLiked&& <FaHeart className='heart' size='40' onClick={() => changeHeart()}/>}
            {!isLiked && <FaRegHeart className='heart' size='40' onClick={() => changeHeart()}/>}
                <h3>{formatDate(slashDate)}</h3>
            </div>
        </article>
    )
}
