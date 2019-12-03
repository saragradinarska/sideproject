import React, {useState} from 'react';
import './App.css';

let listShoppingCartItems = [
  {
    title:'Blinding Lights',
    image: 'https://img.discogs.com/dk-J_uHHespihzSK_HHGi9d-wT4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-14469023-1575156456-8941.jpeg.jpg',
    description: 'Released: 2019',
    link:  'https://google.com'
  },
  {
    title: 'Party Monster',
    image: 'https://i.pinimg.com/originals/ca/61/a5/ca61a53d7dbf76f1d5afde63b2a6e0c0.jpg',
    description: 'Released: 2016',

  },
  {
    title: 'Heartless',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/78/The_Weeknd_-_Heartless.png',
    description: 'Released 2019',
   
  },
  {
    title: 'Starboy',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81pX%2BM-8cuL._SL1400_.jpg',
    description: 'Released 2016',
  },
  {
    title: 'I Feel It Coming',
    image: 'https://i.pinimg.com/originals/7c/2b/fd/7c2bfd4cf6c4ec759c80886d7d83f8bd.jpg',
    description: 'Released 2016'
  }

]


function App() {

  return (
    <div className="App">
      <h1>The Weeknd</h1>
      <p>Singer,Songwriter and Record Producer</p>
      <SearchForm />
      <ShoppingCart />
      
     </div>
  );
}
  
  function Images(){
  return(
    <div className="image">
  </div>
  );
}
 function ShoppingCart() {

  const postsSequence = listShoppingCartItems.map((product) =>
    <Song title={product.title} image={product.image} description={product.description} releaseYear={product.releaseYear} link={product.link} />
  );

   return(
     <div className="cart">
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
      <label>
        Search The Weeknd Lyrics:
        <input type="text" name="song lyric" />
      </label>
      <input type="submit" value="Explore" />
    </form>
  );
  }
export default App;