import HTML from './assets/html.jpg'
import HTML from './assets/cs.png'
import HTML from './assets/js.png'

const course1 = "HTML";

function Course(props){

    

    return(
        <div className="card">
            {/* <img src={HTML} alt="" /> */}
            <img src={props.image} alt="" />
            {/* <h3>HTML</h3> */}
            <h3>{props.name}</h3> 
            {/* <p>This is code io's HTML course</p> */}
            <p>{props.price}</p>
        </div>
    );
}

export default Course