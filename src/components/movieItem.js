import React from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {

    render() {
        return (
            <div>
                {/* Card that displays the titles of the films from API using bootstrap */}
                <Card>     
                    {/* This displays the title */}
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* This displays the image of the poster */}
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {/* This displays the year movie releases */}
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }


}