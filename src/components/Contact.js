import Github from '../static/images/tech-images/github-logo.png'
import LinkedIn from '../static/images/tech-images/linkedin-logo.png'
import CodePen from '../static/images/tech-images/codepen-logo.png'
const Contact = () => {
    return(
        <ul id='contact-container'>
            <li>
                <a href='https://github.com/harrisonBarnett' target='_blank'>
                    <img 
                    className='contact-group-img'
                    src={Github}
                    alt="github logo"></img>
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/harrison-barnett-sc/' target='_blank'>
                    <img 
                    className='contact-group-img'
                    src={LinkedIn}
                    alt="linkedin logo"></img>
                </a>
            </li>
            <li>
                <a href='https://codepen.io/harrisonbarnett' target='_blank'>
                    <img 
                    className='contact-group-img'
                    src={CodePen}
                    alt="codepen logo"></img>
                </a>
            </li>
            <li>
                <a href='https://www.google.com/search?q=sun+bear' target='_blank'>
                    <div 
                    className='contact-group-img'
                    id='sunbear'></div>
                </a>
            </li>
        </ul>
    )
}
export default Contact