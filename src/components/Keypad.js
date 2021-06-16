// Code Keypad Component Here

function Keypad() {

    function Input(event){
        event.preventDefault()
        console.log('Entering password...')
    }

    return(
        <div>
            <input
                type="password"
                name="password"
                onChange={Input}
                placeholder="password"
            />

            <button name="filter" onChange={Input}>
                submit
            </button>
        </div>
    )
}

export default Keypad;