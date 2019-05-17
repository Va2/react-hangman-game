import React, { Component } from 'react';

// Assets (css, img, font)
import './App.css';

// Components
import Keyboard from './components/Keyboard';
import GuessWord from './components/GuessWord';
import Title from './components/Title';
import AttemptsCounter from './components/AttemptsCounter';

class App extends Component {
	render() {
		return (
			<div className="App container mt-5">
				<Title />

				<div className="row">
					{/* LEFT COLUMN */}
					<div className="col-md-6">
						<GuessWord />

						<Keyboard />
					</div>

					{/* RIGHT COLUMN */}
					<AttemptsCounter /> {/* .col-md-6 */}
				</div>
			</div>
		);
	}
}

export default App;
