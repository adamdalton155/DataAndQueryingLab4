import React from 'react';
import { Movies } from './movies'; //Imports component movies

export class Read extends React.Component {

    //Variable
    state = {

      //Array for API
       movies: [
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZtgwNzY1MTUwNTM@._V1_SC300.jpg"         
            },

            {
                "Title": "Charlie Wilson's War", "Year": "2007",
                "imdbID": "tt0472062",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYw0TU3MD4._V1_SX300.jpg"
            },
            
            {
                "Title": "Avengers: Infinity War", "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            }

            ]
    };


  render() {
    return (
      <div >
        <h1>This is the readcomponent</h1>
        {/* Variable movies stores the information from the API */}
        <Movies movies={this.state.movies}></Movies> 
      </div>
    );
  }
}

