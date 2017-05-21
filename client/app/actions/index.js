export const fun = function(user){
	console.log('clicked on user ' +user.first)

	return {
		type: "USER_CLICKED_BLAH",
		payload: user 
	} 
}


