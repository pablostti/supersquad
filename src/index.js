import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


/* Redux */
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/* Reducers */
import rootReducer from './reducers'; // Characters

/* Actions */
import { addCharacterById } from './actions'; // Actions creators 

/* Unique Store */
const store = createStore(rootReducer);
console.log('store.getState()', store.getState());
 
// Event Listener that fires whenever the store get updated
store.subscribe(() => console.log('store', store.getState()));

// Fire an action
store.dispatch(addCharacterById(5));

ReactDOM.render(
	//Set up store 
	<Provider store={store}>
		<App />
	</Provider>
		, document.getElementById('root'))
