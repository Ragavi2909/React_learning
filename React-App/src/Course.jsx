import HTML from './assets/html.jpg'
// import CSS from './assets/css.png'
// import JS from './assets/js.png'

const course1 = "HTML";

function Course(props){

    

    return(
        <div className="card">
            <img src={props.image} alt="" />

            <h3>{props.name}</h3> 
            <p>{props.price}</p>
            <span>{props.rating}</span>
        </div>
    );
}


// Course.defaultProps = {
//     image : HTML
//     rating = 5
// }

export default Course