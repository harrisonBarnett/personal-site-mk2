import Tilt from 'react-parallax-tilt'
import projectNames from '../static/ProjectInfo'
const ProjectGrid = () => {
    const mapped = projectNames.map(name => {
        return (
        <Tilt
        className='project-item'
        tiltReverse={true}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        >
            <h2>{name}</h2>
        </Tilt>
        ) 
    })
    return(
        <div id='projects-grid'>
            {mapped}
        </div>
    )
}
export default ProjectGrid