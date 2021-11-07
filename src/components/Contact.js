import Github from '../static/images/tech-images/github-logo.png'
import LinkedIn from '../static/images/tech-images/linkedin-logo.png'
import CodePen from '../static/images/tech-images/codepen-logo.png'
const Contact = () => {
    return(
        <ul id='contact-container'>
            <li
            className='contact-group'>
                <img 
                className='contact-group-img'
                src={Github}></img>
            </li>
            <li
            className='contact-group'>
                <img 
                className='contact-group-img'
                src={LinkedIn}></img>
            </li>
            <li
            className='contact-group'>
                <img 
                className='contact-group-img'
                src={CodePen}></img>
            </li>
        </ul>
    )
}
export default Contact