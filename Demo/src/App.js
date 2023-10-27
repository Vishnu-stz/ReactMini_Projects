
import './App.css';
import Comp from './Comp';
import Head from './Head';
import Counter from './Counter';
import { useState } from 'react';



function App() {

	var [data1 , setData] = useState("Vishnu") 
	var [data2 , setData] = useState("D") 



	return (

   		<div className="App">

			{/* <Head></Head> */}

			<Counter share1 = {data1} share2 = {data2} />

			{/* <Counter > </Counter> */}

			{/* <p> My First React App  </p> */}

			{/* <Comp></Comp> */}
			     
    	</div>
	);

}

export default App;
