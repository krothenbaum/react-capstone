import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fun} from '../actions/index';


class UserList extends Component{

	createList() {
		console.log('in create list')
		console.log(this)
		return this.props.users.map((user) => {
			console.log(user)
			return ( 
				<li 
				onClick={()=> this.props.fun(user)} 
				
				
				key={user.id}> {user.first} {user.last} <i> {user.age} </i></li>					
			)
		})
	}

	render(){
			console.log(this)
		
		return (
			<ul>

				{ this.createList() }

			</ul>		
		); 
	}
}


function mapsssStateToProps(state){
	console.log('map state to props') 
	console.log(state)
	return {
		users:state.users
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({fun: fun}, dispatch)
		
}

//export default UserList;
export default connect(mapsssStateToProps, matchDispatchToProps)(UserList);

