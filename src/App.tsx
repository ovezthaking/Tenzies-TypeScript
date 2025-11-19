import { useState, useRef, useEffect } from "react"
import Die from "./Die"
import { generateAllNewDice } from "./components/utils"
import type { Dice } from "./components/utils"
import Confetti from "react-confetti"
import type { JSX } from "react"

type DiceNoFn = Omit<Dice, "hold">

export default function App() {
    const [dice, setDice] = useState<DiceNoFn[]>(() => generateAllNewDice())
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    const gameWon: boolean = dice.every((die:DiceNoFn):boolean => die.isHeld) &&
        dice.every((die:DiceNoFn):boolean => die.value === dice[0].value)
        
    useEffect(() => {
        if (gameWon) {
            buttonRef.current?.focus()
        }
    }, [gameWon])
    
    function rollDice(): void {
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            ))
        } else {
            setDice(generateAllNewDice())
        }
    }

    function hold(id: string): void {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    const diceElements:JSX.Element[] = dice.map((dieObj:DiceNoFn):JSX.Element => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ))

    return (
        <main>
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}