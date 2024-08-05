import { expect, test } from 'vitest'
import { calculateRoundResult, generateComputerMove, calculateNewScores, gameLoop, DRAW } from './app'


//calculateRoundResult - you should have a test for each permutation of valid inputs and assert that it returns the correct value
test('bare bones test should pass', () => {
   expect(calculateRoundResult ("rock", "rock")).toStrictEqual({
    outcome: "draw",
    message: "Both players chose rock. It's a draw.",
})
   expect(calculateRoundResult ("rock", "paper")).toStrictEqual({
    outcome: "loss",
    message: "Player chose rock and computer chose paper. Computer wins.",
})
  })