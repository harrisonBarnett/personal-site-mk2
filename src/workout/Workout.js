import {useState, useEffect} from 'react'
import Homescreen from './Homescreen'
import Squat from './Squat'
import Dead from './Dead'
import Bench from './Bench'
import OHP from './OHP'

const Workout = () => {
    const [squat, setSquat] = useState({})
    const [dead, setDead] = useState({})
    const [bench, setBench] = useState({})
    const [ohp, setOhp] = useState({})
    const [prevRotation, setPrevRotation] = useState({})
    const [prevDate, setPrevDate] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        initializeData();
    })

    async function initializeData() {
        await fetch("https://sunbear-blog-api.herokuapp.com/workout")
            .then(response => response.json())
            .then(data => {
                data=data[0]
                setSquat(parseInt(data.Squat))
                setDead(parseInt(data.Dead))
                setBench(parseInt(data.Bench))
                setOhp(parseInt(data.OHP))
                setPrevRotation(data.PrevRotation)
                setPrevDate(data.PrevDate)
                setLoading(false)
            })
    }
    function killCurrent() {
        const currentPage = document.querySelector('.session-active');
        if(currentPage != null) {
            currentPage.classList.toggle('session-active')
        }
    }
    function renderWorkout(rotation) {
        function setCurrent(name) {
            const toSet = document.querySelector(name)
            toSet.classList.toggle('session-active')
        }
        switch(rotation) {
            case "A":
                killCurrent()
                setCurrent(".session-squat")
                break;
            case "B":
                killCurrent()
                setCurrent(".session-dead")
                break;
            case "C":
                killCurrent()
                setCurrent(".session-bench")
                break;
            case "D":
                killCurrent()
                setCurrent(".session-ohp")
                break;
            default:
                break;
        }
    }

    const content = loading 
        ? <h1>loading...</h1> 
        : <Homescreen 
            squat={squat} 
            dead={dead} 
            bench={bench} 
            ohp={ohp} 
            prevRotation={prevRotation} 
            prevDate={prevDate}
            renderWorkout={renderWorkout}/>

    return (
        <div className="workout-app">
            <Squat squat={squat} 
            dead={dead} 
            bench={bench} 
            ohp={ohp}
            close={killCurrent}/>
            <Dead squat={squat} 
            dead={dead} 
            bench={bench} 
            ohp={ohp}
            close={killCurrent}/>
            <Bench squat={squat} 
            dead={dead} 
            bench={bench} 
            ohp={ohp}
            close={killCurrent}/>
            <OHP squat={squat} 
            dead={dead} 
            bench={bench} 
            ohp={ohp}
            close={killCurrent}/>
            {content}
        </div>
    )
}

export default Workout