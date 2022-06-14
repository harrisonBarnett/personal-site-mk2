import {useState, useEffect} from 'react'
import Homescreen from './Homescreen'
import Squat from './Squat'
import Dead from './Dead'
import Bench from './Bench'
import OHP from './OHP'

import db from '../firebase.config.js'

const Workout = () => {
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({})

    useEffect(() => {
        initializeData();
    }, [])
    
    // load data from backend firestore
    const initializeData = async () => {
       await db.collection('workout_data').get()
            .then(response => {
                response.forEach(el => {
                    setFormData({
                        squat: parseInt(el.data().squat),
                        dead: parseInt(el.data().dead),
                        bench: parseInt(el.data().bench),
                        ohp: parseInt(el.data().ohp),
                        prevDate: (el.data().prevDate),
                        prevRotation: (el.data().prevRotation),
                    })
                })
            })
            setLoading(false)
    }
    // kills the current session page
    const killCurrent = () => {
        const currentPage = document.querySelector('.session-active');
        if(currentPage != null) {
            currentPage.classList.toggle('session-active')
        }
    }
    // swaps between session screens
    const renderWorkout = rotation => {
        function setCurrent(name) {
            const toSet = document.querySelector(name)
            toSet.classList.toggle('session-active')
        }
        killCurrent()
        switch(rotation) {
            case "A":
                setCurrent(".session-squat")
                break;
            case "B":
                setCurrent(".session-dead")
                break;
            case "C":
                setCurrent(".session-bench")
                break;
            case "D":
                setCurrent(".session-ohp")
                break;
            default:
                break;
        }
    }
    // get current date
    const getDate = () => {
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1
        return month + '/' + day
    }
    // on fail
    const failSession = rotation => {
        killCurrent()
        let toSend = {
            squat: formData.squat,
            dead: formData.dead,
            bench: formData.bench,
            ohp: formData.ohp,
            prevDate: getDate(),
            prevRotation: rotation
        };
        setFormData(toSend)
        submitNumbers(toSend)
    }
    // on make
    const makeSession = async rotation => {
        let toSend = {
            squat: formData.squat,
            dead: formData.dead,
            bench: formData.bench,
            ohp: formData.ohp,
            prevDate: getDate(),
            prevRotation: rotation
        };
        killCurrent()
        switch(rotation) {
            case "A":
                toSend.squat += 5
                break;
            case "B":
               toSend.dead += 5
                break;
            case "C":
                toSend.bench += 5
                break;
            case "D":
                toSend.ohp += 5
                break;
            default:
                break;
        }
        console.log(toSend)
        setFormData(toSend)
        submitNumbers(toSend)
    }
    // submit all shits to the thing
    const submitNumbers = async obj => {
        await db.collection('workout_data')
            .doc('workout_data')
            .update({
            squat: obj.squat,
            dead: obj.dead,
            bench: obj.bench,
            ohp: obj.ohp,
            prevDate: obj.prevDate,
            prevRotation: obj.prevRotation
        })
    }

    const content = loading 
        ? <h1>loading...</h1> 
        : <Homescreen 
            squat={formData.squat} 
            dead={formData.dead} 
            bench={formData.bench} 
            ohp={formData.ohp} 
            prevRotation={formData.prevRotation} 
            prevDate={formData.prevDate}
            renderWorkout={renderWorkout}
            submit={submitNumbers}/>

    return (
        <div className="workout-app">
            {content}
            <Squat squat={formData.squat} 
            dead={formData.dead} 
            bench={formData.bench} 
            ohp={formData.ohp}
            submit={submitNumbers}
            make={makeSession}
            fail={failSession}
            close={killCurrent}/>
            <Dead squat={formData.squat} 
            dead={formData.dead} 
            bench={formData.bench} 
            ohp={formData.ohp}
            make={makeSession}
            fail={failSession}
            close={killCurrent}/>
            <Bench squat={formData.squat} 
            dead={formData.dead} 
            bench={formData.bench} 
            ohp={formData.ohp}
            make={makeSession}
            fail={failSession}
            close={killCurrent}/>
            <OHP squat={formData.squat} 
            dead={formData.dead} 
            bench={formData.bench} 
            ohp={formData.ohp}
            make={makeSession}
            fail={failSession}
            close={killCurrent}/>
        </div>
    )
}

export default Workout