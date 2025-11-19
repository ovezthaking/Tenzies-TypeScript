import { nanoid } from "nanoid"

export type Dice = {
  value: number,
  isHeld: boolean,
  id: string,
  hold: (id:string) => void
}

export function generateAllNewDice(): Omit<Dice, "hold">[] {
    return new Array(10)
        .fill(0)
        .map(() => ({
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
    }))
}

