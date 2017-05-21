import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
	render(){
		return (
			<div>
				<img src={this.props.user.thumbnail} />
				<h2>{this.props.user.description}</h2>
			
			</div>
		); 
	}
}

function mapStoP(state){

	return{
		user: state.activeUser
	}
}


export default connect(mapStoP)(UserDetail);  
