// Code Keypad Component Here

function Keypad (){
    const handleChange= (event) =>{
        console.log ("Entering password...")
    }
    return (
        <div>
            <input onChange={handleChange} type="password"/> 
        </div>
    )
}

export default Keypad;