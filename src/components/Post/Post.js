import './Post.scss'; 
import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

export const Post = ({ id, title, date, image, desc, likeUnlikePhoto, liked}) => {

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
                {liked.includes(title)&&<FaHeart id={id} onClick={e => likeUnlikePhoto(e)}/>}
                {!liked.includes(title)&&<FaRegHeart id={id}onClick={e => likeUnlikePhoto(e)}/>}
                <h3>{formatDate(slashDate)}</h3>
            </div>
        </article>
    )
}
