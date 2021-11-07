import TechSlider from './TechSlider'
const Home = () => {
    return(
        <div id='homepage'>
            <div
            id='welcome-group'>
                <div
                id='welcome-img'>
                </div>
                <div id='welcome-text-container'>
                    <p
                    id='welcome-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <div id='tech-container'>
                <h2>tech</h2>
                <TechSlider />
            </div>
        </div>
    )
}
export default Home