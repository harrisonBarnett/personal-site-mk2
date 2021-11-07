import Tilt from 'react-parallax-tilt'
import projectInfo from '../static/ProjectInfo'
const ProjectGrid = () => {
    const mapped = projectInfo.map(info => {
        return (
        <Tilt
        className='project-item'
        tiltReverse={true}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        >
            <div className='project-item-title'>
                <h2>{info.title}</h2>
                <div className='project-item-links'>
                    <a href={info.repoLink}>repo</a>
                    <p>|</p>
                    <a href={info.liveLink}>live</a>
                </div>
            </div>
            
            <div 
            className='project-item-header-img'
            style={{backgroundImage: `url(${info.headerImg})`}}>
            </div>

            <div className='project-item-mid'>
                <div
                className='project-item-accent-img'
                style={{backgroundImage: `url(${info.accentImg})`}}
                >
                </div>
                <div
                className='project-item-lists'>
                    <ul className='project-item-list-left'>
                        {info.stack.map(el => {
                            return <li key={el}>{el}</li>
                        })}
                    </ul>
                    <ul className='project-item-list-right'>
                        {info.skills.map(el => {
                            return <li key={el}>{el}</li>
                        })}
                    </ul>
                </div>
            </div>
            
            <p className='project-item-description'>{info.description}</p>
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