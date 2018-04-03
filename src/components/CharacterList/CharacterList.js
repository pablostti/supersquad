import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux'; // access the data from our store (connect with our redux state)
//import { bindActionCreators } from 'redux'; // access actions creators

// first action creator
import { addCharacterById } from '../../actions';  


class CharacterList extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {


	  };
	}


	render() {
		
		//console.log('this.props', this.props); // mapStateToProps / mapDispatchToProps

		return (
			<div>
				<h4>Characters</h4>
				<ul className="list-group">
					{
						this.props.characters.map(character =>{
							return (
								<li key={character.id} className="list-group-item">
									<div className="list-item">	
										{character.name}
									</div>
									<div
									className="list-item right-button"
									onClick={() => this.props.addCharacterById(character.id)}>
									+
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		);
	}

}


// state store as props.
const mapStateToProps = (state) =>{
	return {
		characters: state.characters
	};
}


// bind Actions creators into the props of this component: we can active reducers & update the store.
/*const mapDispatchToProps = (dispatch) =>{  
	return bindActionCreators({ addCharacterById }, dispatch); // ({ lists of action creators to bind }, dispatch function)

}*/


export default connect(mapStateToProps, {addCharacterById})(CharacterList);