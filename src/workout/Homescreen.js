const Homescreen = props => {
    return (
        <div className="workout-home">
            <div className="workout-rotation">
                <div onClick={() => props.renderWorkout("A")}>
                    <h3>{props.squat}</h3>
                    <h3>squat</h3>
                </div>
                <div onClick={() => props.renderWorkout("B")}>
                    <h3>{props.dead}</h3>
                    <h3>dead</h3>
                </div>
                <div onClick={() => props.renderWorkout("C")}>
                    <h3>{props.bench}</h3>
                    <h3>bench</h3>
                </div>
                <div onClick={() => props.renderWorkout("D")}>
                    <h3>{props.ohp}</h3>
                    <h3>ohp</h3>
                </div>
            </div>
            

        </div>
    )
}

export default Homescreen