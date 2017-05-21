export default function (state={}, action){
	console.log(' in this reducer');
	for(var i=0; i<10; i++){
		console.log( ' '); 
	}
	console.log(action);
	console.log(state);
	
	switch(action.type){
		case "USER_CLICKED_BLAH":

			return action.payload;
			break;
	}
	return state;
}
