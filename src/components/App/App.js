import './App.scss';
import React, { Component } from 'react';
import { Post } from '../Post/Post'; 
import { getData } from '../../utilities'; 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      posts: [],
      liked: [],
      error: '',
    }
  }

  // this.getFromLocal() ||

  componentDidMount() {
    getData()
      .then(response => this.setState({posts: response}))
      .catch(error => this.setState({error: error}))
  }
  
  displayContent = () => {
    return this.state.posts.map((post, i) => {
      return <Post 
        key={i}
        id={post.title}
        date={post.date}
        image={post.url}
        title={post.title}
        desc={post.explanation} 
        likeUnlikePhoto={this.likeUnlikePhoto}
      />
    })
  }
  
  // ---- saving favorites to local ----
  saveToLocal = () => {
    const toStore = JSON.stringify(this.state.liked)
    localStorage.setItem('likedPhotos', toStore)
  }
  
  getFromLocal = () => {
    const getStore = localStorage.getItem('likedPhotos')
    const parsedStore = JSON.parse(getStore); 
    return parsedStore; 
  }
  
  likeUnlikePhoto = async (e) => {
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

  render() {
    return (
      <>
        <header>
          <div className='page-title'>
            <h1>SPACESTAGRAM</h1>
          </div>
        </header>
        <main>
          {this.displayContent()}
        </main>
      </>
    )
  }

}

export default App;
