const OHP = props => {
    return(
        <div className="workout-session session-ohp">
        <h1>bench</h1>
        <table>
            <tr>
                <th>#</th>
                <th>scheme</th>
                <th>&#10003;</th>
            </tr>
            <tr>
                <td>1</td>
                <td>8 X {Math.round(props.bench * .65)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>6 X {Math.round(props.bench * .75)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>3</td>
                <td>4 X {Math.round(props.bench * .85)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>4</td>
                <td>4 X {Math.round(props.bench * .85)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>5</td>
                <td>4 X {Math.round(props.bench * .85)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>6</td>
                <td>5 X {Math.round(props.bench * .80)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>7</td>
                <td>6 X {Math.round(props.bench * .75)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>8</td>
                <td>7 X {Math.round(props.bench * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>9</td>
                <td>8 X {Math.round(props.bench * .65)}</td>
                <td><input type="checkbox"/></td>
            </tr>
        </table>
        <h1>ohp</h1>
        <table>
            <tr>
                <th>#</th>
                <th>scheme</th>
                <th>&#10003;</th>
            </tr>
            <tr>
                <td>1</td>
                <td>6 X {Math.round(props.ohp * .50)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>5 X {Math.round(props.ohp * .60)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>3</td>
                <td>3 X {Math.round(props.ohp * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>4</td>
                <td>5 X {Math.round(props.ohp * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>5</td>
                <td>7 X {Math.round(props.ohp * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>6</td>
                <td>4 X {Math.round(props.ohp * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>7</td>
                <td>6 X {Math.round(props.ohp * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
            <tr>
                <td>8</td>
                <td>8 X {Math.round(props.ohp * .70)}</td>
                <td><input type="checkbox"/></td>
            </tr>
        </table>
        <button className="workout-session-btn" onClick={()=> alert('make')}>make</button>
        <button className="workout-session-btn" onClick={()=> alert('fail')}>fail</button>
        <button className="workout-session-btn" onClick={() => props.close()}>cancel</button>
    </div>
    )
    
}

export default OHP