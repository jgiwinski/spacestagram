import './App.scss';
import React, { useState, useEffect } from 'react';
import { Post } from '../Post/Post'; 
import { getData } from '../../utilities'; 

  export const App = () => {

    const [posts, setPosts] = useState([])
    const [liked, setLiked] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
      getData()
      .then(response => setPosts(response))
      .catch(error => setError(error))
    },[])
  
  const displayContent = () => {
    return posts.map((post, i) => {
      return <Post 
        key={i}
        id={post.title}
        date={post.date}
        image={post.url}
        title={post.title}
        desc={post.explanation} 
        likeUnlikePhoto={likeUnlikePhoto}
      />
    })
  }
  
  const saveToLocal = () => {
    const toStore = JSON.stringify(this.state.liked)
    localStorage.setItem('likedPhotos', toStore)
  }
  
  const getFromLocal = () => {
    const getStore = localStorage.getItem('likedPhotos')
    const parsedStore = JSON.parse(getStore); 
    return parsedStore; 
  }
  
  const likeUnlikePhoto = async (e) => {
    e.preventDefault() 
    if(!this.state.liked.includes(e.target.id)){
       await this.setState({ liked: [...this.state.liked, e.target.id] });
       this.saveToLocal();
    } else {
      const updatedLiked = this.state.liked.filter(post => {
        return post !== e.target.id
      })
      this.setState({ liked: updatedLiked })
    }
  }

    return (
      <>
        <header>
          <div className='page-title'>
            <h1>SPACESTAGRAM</h1>
          </div>
        </header>
        <main>
          {displayContent()}
        </main>
      </>
    )
}
