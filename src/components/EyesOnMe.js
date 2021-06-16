// Code EyesOnMe Component Here

function EyesOnMe() {
    function Button(event) {
        event.preventDefault()
    }
    function onFocus(e) {
        if (e.currentTarget === e.target) {
            console.log('Good!');
          }
    }
    function onBlur(e) {
        if (e.currentTarget === e.target) {
            console.log('Hey! Eyes on me!');
          }
    }
    return (
        <div>
            <button onClick={Button} onFocus={onFocus} onBlur={onBlur} >
                Eyes on me
            </button>
        </div>
    )
}

export default EyesOnMe;