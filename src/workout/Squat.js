import {useState} from 'react'
const Squat = props => {
    const [madeAmrap, setMadeAmrap] = useState({})
    return(
    <div className="workout-session session-squat">
        <h1>squat</h1>
        <table>
            <tr>
                <th>#</th>
                <th>scheme</th>
                <th>&#10003;</th>
            </tr>
            <tr>
                <td>1</td>
                <td>5 X {Math.round(props.squat * .75)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>3 X {Math.round(props.squat * .85)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>3</td>
                <td className="amrap-cell">1 X {Math.round(props.squat * .95)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>4</td>
                <td>3 X {Math.round(props.squat * .90)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>5</td>
                <td>3 X {Math.round(props.squat * .85)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>6</td>
                <td>3 X {Math.round(props.squat * .80)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>7</td>
                <td>5 X {Math.round(props.squat * .75)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>8</td>
                <td>5 X {Math.round(props.squat * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>9</td>
                <td>5 X {Math.round(props.squat * .65)}</td>
                <td><input type="checkbox"/></td>
            </tr>
        </table>
        <h1>deadlift</h1>
        <table>
            <tr>
                <th>#</th>
                <th>scheme</th>
                <th>&#10003;</th>
            </tr>
            <tr>
                <td>1</td>
                <td>5 X {Math.round(props.dead * .50)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>5 X {Math.round(props.dead * .60)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>3</td>
                <td>3 X {Math.round(props.dead * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>4</td>
                <td>5 X {Math.round(props.dead * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>5</td>
                <td>7 X {Math.round(props.dead * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>6</td>
                <td>4 X {Math.round(props.dead * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>7</td>
                <td>6 X {Math.round(props.dead * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>8</td>
                <td>8 X {Math.round(props.dead * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
        </table>
        <input type="checkbox"/> check if your AMRAP exceeded 3 repetitions
        <button className="workout-session-btn" onClick={()=> alert('make')}>make</button>
        <button className="workout-session-btn" onClick={()=> alert('fail')}>fail</button>
        <button className="workout-session-btn" onClick={() => props.close()}>cancel</button>
    </div>
    )
    
}

export default Squat