/************************************/
/* Actions will modify our reducers */
/************************************/

// First Action type 
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';


// Actions creators (functions that return an 'action')
export function addCharacterById(id){

	//define action object with a type property set to (Id)
	const action = {
		type: ADD_CHARACTER,
		id // id : id
	}

	return action;
}


export function removeCharacterById(id){
	const action = {
		type: REMOVE_CHARACTER,
		id
	}

	return action;
}

