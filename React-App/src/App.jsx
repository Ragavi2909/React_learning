
import './App.css'

import Navbar from './Navbar'; //imported the Navbar
import Course from './Course';
import Footer from './Footer';
import HTML from './assets/html.jpg'
import CSS from './assets/css.png'
import CSS from './assets/js.png'

function App() {
  return (
    <>
      
      <Course name="HTML" price ='$199' image={html}/>
      <Course name="CSS"  price ='$199' image={css}/>
      <Course name ="JS" price = '$299' image={js}/>
      
    </>
  );
}

export default App
