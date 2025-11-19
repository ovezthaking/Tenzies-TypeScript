import type { JSX } from "react"
import type { Dice } from "./components/utils"


export default function Die(props: Dice): JSX.Element {
    const styles: {backgroundColor:string} = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
        <button 
            style={styles}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
            
        >{props.value}</button>
    )
}