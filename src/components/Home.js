import {NavLink} from 'react-router-dom';
import TechSlider from './TechSlider';
import TechCloud from './TechCloud';
const Home = () => {
    const Link = () => {
        return(
            <NavLink to='/projects' className="projects-link">here</NavLink>
        )
    }
    return(
        <div id='homepage'>
            <div
            id='welcome-group'>
                <div id='welcome-img-container'>
                    <div
                    id='welcome-img'>
                    </div>
                </div>

                <div id='welcome-text-container'>
                    <p
                    id='welcome-text'>You're looking at a highly-motivated, self-taught developer looking for a breakthrough
                     opportunity as a professional software developer. Please regard this site as proof that I know how to play  
                    on computers. You are welcome to peruse a selection of the technologies I have studied thus far below. Check
                    out some of my projects {<Link/>} and feel free to contact me through any channel you prefer.</p>
                </div>
            </div>
            <div id='tech-container'>
                <TechSlider />
                <!-- <TechCloud /> -->
            </div>
        </div>
    )
}
export default Home
