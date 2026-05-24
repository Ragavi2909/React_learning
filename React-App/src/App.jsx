
import './App.css'

import Navbar from './Navbar'; //imported the Navbar
import Course from './Course';
import Footer from './Footer';
import HTML from './assets/html.jpg'
import CSS from './assets/css.png'
import JS from './assets/js.png'

function App() {
  return (
    <>
      
      <Course name="HTML" price ='$199' image={HTML} rating={5}/>
      <Course name="CSS"  price ='$199' image={CSS} rating={5}/>
      <Course name ="JS" price = '$299' image={JS} rating={4}/>
      
    </>
  );
}

export default App
