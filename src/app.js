import React from 'react';
import './app.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/home' component={Home} />
		<Route path='/about' component={About} />
		<Route path='/contact' component={Contact} />
	</Routes>
	</Router>
);
}

export default App;
