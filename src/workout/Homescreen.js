const Homescreen = props => {
    return (
        <div className="workout-home">
            <h2>hey let's fuckin lift</h2>
            <div className="workout-rotation">
                <div onClick={() => props.renderWorkout("A")}>
                    <h3>A</h3>
                    <h3>{props.squat}</h3>
                    <h3>squat</h3>
                </div>
                <div onClick={() => props.renderWorkout("B")}>
                    <h3>B</h3>
                    <h3>{props.dead}</h3>
                    <h3>dead</h3>
                </div>
                <div onClick={() => props.renderWorkout("C")}>
                    <h3>C</h3>
                    <h3>{props.bench}</h3>
                    <h3>bench</h3>
                </div>
                <div onClick={() => props.renderWorkout("D")}>
                    <h3>D</h3>
                    <h3>{props.ohp}</h3>
                    <h3>ohp</h3>
                </div>
            </div>
            <h2>previous: {props.prevRotation} - {props.prevDate}</h2>
        </div>
    )
}

export default Homescreen