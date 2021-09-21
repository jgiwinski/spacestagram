import './Post.scss'; 
import React, { useState} from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import rocket from './rocket.png'; 

export const Post = ({ id, title, date, image, desc, likeUnlikePhoto, liked}) => {
    const [isLiked, setIsLiked] = useState(false);

    const slashDate = date.replaceAll('-', '/')
    const formatDate = inputDate => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(inputDate);
        return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() ;
    }

    const ifBlankPhoto = currentImage => {
        console.log(currentImage)
        if(currentImage === undefined || null){
            return <img className='apod' src={rocket} alt={title}/>
        } else {
            return <img className='apod' src={image} alt={title}/>
        }
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
            {ifBlankPhoto(image)}
            <h2>{title}</h2>
            <p className='desc'>{desc}</p>
            <div className='title-date'>
            {isLiked&& <FaHeart data-cy='like' className='heart' size='40' onClick={() => changeHeart()}/>}
            {!isLiked && <FaRegHeart data-cy='unlike' className='heart' size='40' onClick={() => changeHeart()}/>}
                <h3>{formatDate(slashDate)}</h3>
            </div>
        </article>
    )
}
