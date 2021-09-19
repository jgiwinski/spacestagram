import './App.css';
import React, { Component } from 'react';
import { Post } from '../Post/Post'; 
import { getData } from '../../utilities'; 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      posts: [],
      favorites: this.getFromLocal() || [],
      error: '',
    }
  }

  componentDidMount() {
    getData()
      .then(response => this.setState({posts: response}))
      .catch(error => this.setState({error: error}))
  }

  displayContent = () => {
    return this.state.posts.map(post => {
      return <Post 
        id={post.date}
        date={post.date}
        image={post.url}
        title={post.title}
        desc={post.explanation} 
      />
    })
  }

  // ---- saving favorites to local ----
  saveToLocal = () => {
    const toStore = JSON.stringify(this.state.favorites)
    localStorage.setItem('savedPhotos', toStore)
  }

  getFromLocal = () => {
    const getStore = localStorage.getItem('savedPhotos')
    const parsedStore = JSON.parse(getStore); 
    return parsedStore; 
  }

  render() {
    return (
      <>
        <header>
        <h1>SPACESTAGRAM</h1>
        </header>
        <main>
          {this.displayContent()}
        </main>
      </>
    )
  }

}

export default App;
