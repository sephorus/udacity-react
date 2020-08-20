import React, { Component } from 'react';

class UserList extends Component {
	render() {
    	const { usersWhoLikedMovie, users } = this.props;
      
      	if (!usersWhoLikedMovie || usersWhoLikedMovie.length === 0) {
        	return (
            	<p>None of the current users liked this movie</p>
            )
        } else {
        	const items = usersWhoLikedMovie.map(userID => (
            	<li key={userID}>
        			<p>{users[userID].name}</p>
      			</li>
            ))
          
        	return (
            	<ul>{items}</ul>
            )
        }
      
    }
}

export default UserList;