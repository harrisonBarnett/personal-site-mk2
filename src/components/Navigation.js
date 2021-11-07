import {NavLink} from 'react-router-dom'
const Navigation = () => {
    return(
        <ul id='navigation-bar'>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
        </ul>
    )
}
export default Navigation