// import HTML from './assets/html.jpg'
// // import CSS from './assets/css.png'
// // import JS from './assets/js.png'

// const course1 = "HTML";

import PropTypes from 'prop-types'
function Course(props){

    
    if(props.show==true){ //conditional rendering
        return(
        <div className="card">
            <img src={props.image} alt="" />

            <h3>{props.name}</h3> 
            <p>{props.price}</p>
            <span>{props.rating}</span>
        </div>
    );
    }
    else{
        return(
            <div className="card">Course Not Available</div>
        );
    }
    
}

//default props
// Course.defaultProps = {
//     image : HTML
//     rating = 5
// }

Course.propTypes = {
    name : PropTypes.string,
    rating : PropTypes.number,
    show : PropTypes.bool

}
export default Course