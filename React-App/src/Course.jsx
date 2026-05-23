

const course1 = "HTML";

function Course(){

    const styles = {
        backgroundColor : "green",
    }

    return(
        <div style={styles}>
            <img src="" alt="" />
            {/* <h3>HTML</h3> */}
            <h3>{course1}</h3> 
            <p>This is code io's HTML course</p>
        </div>
    );
}

export default Course