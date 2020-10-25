import React from 'react';
import {MovieItem} from "./movieItem";

export class Movies extends React.Component{

    render(){
        // Used to iterate the Array and return the data
        return this.props.movies.map((movie)=>{
            return <MovieItem movie = {movie}></MovieItem>

        } )

    }


}