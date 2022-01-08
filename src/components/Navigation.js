import {NavLink} from 'react-router-dom'
const Navigation = () => {
    return(
        <ul id='navbar'>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
    )
}
export default Navigation