import React from 'react';

export class Create extends React.Component {



    constructor() {
    // Binds the data from the Array into variables
        super();
        this.OnChangeMovieTitle=this.OnChangeMovieTitle.bind(this);
        this.OnChangeMovieYear=this.OnChangeMovieYear.bind(this);
        this.OnChangeMoviePoster=this.OnChangeMoviePoster.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

        this.state = {
            Title:'',
            Year:'',
            Poster:'',


        }
        

    }
    //Alert to say the movies were added 
    handleSubmit(event) {
        alert("Movie title " + this.state.Title + " "
        + "Movie year " + this.state.Year + " "
        +"Movie Poster " + this.state.Poster + " added!");
    }

    //Method that contains variables that stores the movie title
    OnChangeMovieTitle(event) {
        this.setState({
            Title:event.target.value
        })
    }
    //Method that contains variables that stores the movie year
    OnChangeMovieYear(event) {
        this.setState({
            Year:event.target.value
        })
    }
    //Method that contains variables that stores the movie url for the poster
    OnChangeMoviePoster(event) {
        this.setState({
            Poster:event.target.value
        })
    }



    render() {

        return (
            <div className="create">
                <h1>This Create is in another component </h1>
            {/* Button to submit entered information  */}
                <form onSubmit={this.handleSubmit}>
                <div className="Title">
                    <label>Add Movie Title:</label>
                    {/* Input for the movie title */}
                    <input type='text'
                    //Stores the movie title
                        value={this.state.Title}
                        onChange={this.OnChangeMovieTitle}>
                    </input>
                </div>

                
                <div className="Year">
                    <label>Add Movie Year:</label>
                    <input type='text'
                    // Input for the movie year 
                    //Stores the movie Year
                        value={this.state.Year}
                        onChange={this.OnChangeMovieYear}>
                    </input>
                </div>

                
                <div className="Poster">
                    <label>Add Movie Poster URL:</label>
                    <input type='text'
                    //Input for the movie poster URL
                    //Stores the movie url
                        value={this.state.Poster}
                        onChange={this.OnChangeMoviePoster}>
                    </input>
                </div>

                <div>
                    <input type="submit">
                    </input>
                </div>
                </form>
            </div>

        );


    }


}
