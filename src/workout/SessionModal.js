const MakeModal = props => {
    function handleClick() {
        if(props.made == false) {
            props.fail(props.rotation)
        } else {
            props.make(props.rotation)
        }
        props.submit()
        props.close()
    }
    return(
        <div className="workout-modal">
            <button onClick={() => handleClick() }>are you sure?</button>
        </div>
    )
}

export default MakeModal