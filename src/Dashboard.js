import React, { Component } from 'react';
import MovieCard from './MovieCard.js';

class Dashboard extends Component {
  render() {
    
    const { usersByMovie, movies, users } = this.props;
    
    const movieCards = Object.keys(movies).map(movieID => (
    	<MovieCard
      		key={movieID}
      		users={users}
      		usersWhoLikedMovie={usersByMovie[movieID]}
      		movieInfo={movies[movieID]}
      	/>
    ));
    
  	return (
    	<ul>{movieCards}</ul>
    )
  }
}

export default Dashboard;