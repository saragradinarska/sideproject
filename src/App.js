
import React, {useState} from 'react';
import './App.css';

let listSongResultItems = [
  {
    title:'Blinding Lights',
    image: 'https://img.discogs.com/dk-J_uHHespihzSK_HHGi9d-wT4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-14469023-1575156456-8941.jpeg.jpg',
    description: 'Released: 2019',
    link:'https://genius.com/The-weeknd-blinding-lights-lyrics',
  },
  {
    title: 'Party Monster',
    image: 'https://i.pinimg.com/originals/ca/61/a5/ca61a53d7dbf76f1d5afde63b2a6e0c0.jpg',
    description: 'Released: 2016',
    link:'https://genius.com/The-weeknd-party-monster-lyrics',

  },
  {
    title: 'Heartless',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/78/The_Weeknd_-_Heartless.png',
    description: 'Released 2019',
    link:'https://genius.com/The-weeknd-heartless-lyrics',
  },
  {
    title: 'Starboy',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81pX%2BM-8cuL._SL1400_.jpg',
    description: 'Released 2016',
    link:'https://genius.com/The-weeknd-starboy-lyrics',
  },
  {
    title: 'I Feel It Coming',
    image: 'https://i.pinimg.com/originals/7c/2b/fd/7c2bfd4cf6c4ec759c80886d7d83f8bd.jpg',
    description: 'Released 2016',
    link:'https://genius.com/The-weeknd-i-feel-it-coming-lyrics',
  }

]


function App() {

  return (
    <div className="App">
      <h1>The Weeknd</h1>
      <p>Singer, Songwriter and Record Producer</p>
      <div className="Header">
        <input className="SearchBar" type='text' placeholder='Explore Tracks...' />
        Search The Weeknd Lyrics  
      </div>
      <SearchForm />
      <SongResults />
      
     </div>
  );
}
  
  function Images(){
  return(
    <div className="image">
  </div>
  );
}
 function SongResults() {

  const postsSequence = listSongResultItems.map((product) =>
    <Song title={product.title} image={product.image} description={product.description} releaseYear={product.releaseYear} link={product.link} />
  );

   return(
     <div className="lyric options">
      {postsSequence}
     </div>
   );
 }

function Song(props) {
  return(
    <div className="product">
      <div className="title">
        <p>{props.title}</p>
      </div>
      <img className="image" src={props.image}/>
      <div className= "description" >
        <p>{props.description}</p>
      </div>
      <div className= "releaseYear">
        <p>{props.releaseYear}</p>
      </div>
      <div className="link">
      <a href= {props.link} target="_blank">Lyrics</a>
      </div>
  </div>
)
  
}

function SearchForm() {
  return(
    <form>
      {/* Search The Weeknd Lyrics:   
        <input type="text" /> */}
     </form>
  );
  }
export default App;