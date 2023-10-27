import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import SingleView from './SingleView';




function App() {

    return (
		
      	<div className="App">
      
		<Header></Header>

			<Routes>

				<Route path='' element = {<Home></Home>}>  </Route > 

				<Route path='detailsView/:id' element = { <SingleView></SingleView> }>  </Route >

			</Routes> 

		<Footer></Footer>

    	</div>
		
  	);

}

export default App;
