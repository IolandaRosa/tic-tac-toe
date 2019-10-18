import React, {Component} from 'react';
import Board from './Board';

class Game extends Component{
	render(){

		return(
			<div className="game">
				<h1>TIC TAC TOE</h1>
				<div className= "game-board">
					<Board />
				</div>
			</div>
			);
	}
}

export default Game