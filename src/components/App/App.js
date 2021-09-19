import './App.css';
import React, { Component } from 'react';
import { Post } from '../Post/Post'; 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      posts: [],
      favorites: this.getFromLocal() || [],
      error: '',
    }
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
      <header>
       <h1>SPACESTAGRAM</h1>
      </header>
    )
  }

}

export default App;
