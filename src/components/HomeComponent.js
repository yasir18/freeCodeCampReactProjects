import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h2>Select the project</h2>
			<ul class="list-group">
				{/* <li class="list-group-item disabled">
					<Link to="/">Home </Link>
				</li> */}
				<li class="list-group-item">
					<Link to="/randomQuoteGenerator">
						Random Quote Generator
					</Link>
				</li>
				<li class="list-group-item">
					<Link to="/markdownPreviewer">Markdown Previewer</Link>
				</li>
				<li class="list-group-item">
					<Link to="/drumMachine">Drum Machine</Link>
				</li>
				<li class="list-group-item">
					<Link to="/calculator">Calculator</Link>
				</li>
				<li class="list-group-item">
					<Link to="/PomodoroClock">Pomodoro Clock</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
