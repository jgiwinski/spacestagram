import './App.scss';
import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom'; 
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
        liked={liked}
      />
    })
  }
  
  // This save to local/persisting likes functionality does not quite work. I ended up running out of time to get it completely functional. For now I have a simple true/false function that gives the appearance that a user has liked the photo. 

  const saveToLocal = () => {
    const toStore = JSON.stringify(liked)
    localStorage.setItem('likedPhotos', toStore)
  }
  
  const getFromLocal = () => {
    const getStore = localStorage.getItem('likedPhotos')
    const parsedStore = JSON.parse(getStore); 
    return parsedStore; 
  }
  
  const likeUnlikePhoto = async (e) => {
    e.preventDefault() 
    if(!liked.includes(e.target.id)){
       await setLiked([...liked, e.target.id]);
       console.log(liked)
       saveToLocal();
    } else {
      const updatedLiked = liked.filter(post => {
        return post !== e.target.id
      })
      setLiked(updatedLiked)
    }
  }

  // End of save to local functionality ^^^^

    return (
      <>
        <header>
          <div className='page-title'>
            <h1>SPACESTAGRAM</h1>
          </div>
        </header>
        <Switch>
              <Route exact path="/" render={() => { 
                  return (
                    error ? 
                    <h1>Looks like there was an {error} error</h1> :
                    <main data-cy='main-content'>
                      {displayContent()}
                    </main>
                   ) } }/>
              <Route render={() => <Link to='/' className='lost-error'><h1> 404: Please click here to return to the home page</h1></Link>}/>
          </Switch>
      </>
    )
}

