import React, { Component } from 'react';
import CharacterList from './components/CharacterList/CharacterList';
import HeroList from './components/HeroList/HeroList';
import SquadStats from './components/SquadStats/SquadStats';
import './styles/index.css';

class App extends Component {

	render(){
		return (
			<div className="App">
				<h2>SuperSquad</h2>
				 <div className="row">

				    <div className="col">
				      <CharacterList />
				    </div>

				    <div className="col">
				      <HeroList />
				    </div>

				    <div className="col">
				      <SquadStats />
				    </div>

				  </div>

				
			</div>
		)
	}
}

export default App;