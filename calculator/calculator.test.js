import {test, expect } from 'vitest';
import {calculate} from './calculator';

test ('basic maths', ()=> {
    expect(calculate('+',1,2 )).toBe (3)
    expect(calculate('+',193,7 )).toBe (200)
    expect(calculate('+',-5,2 )).toBe (-3)
    expect(calculate('+',-5,-10 )).toBe (-15)
    expect(calculate('+',0,0 )).toBe (0)
    expect(calculate('+',0,-5)).toBe (-5)
//subtraction
    expect(calculate('-',1,2 )).toBe (-1)
    expect(calculate('-',193,7 )).toBe (186)
    expect(calculate('-',-5,2 )).toBe (-7)
    expect(calculate('-',-5,-10 )).toBe (5)
    expect(calculate('-',0,0 )).toBe (0)
    expect(calculate('-',0,-5)).toBe (5)

//sq root
    expect(calculate('sq', 3, 44)).toBe (9); // should return 9, as the 44 is ignored
   
    expect(calculate('*', -6, -8)).toBe (48) // should return 48
    expect(calculate('/', 121, 11)).toBe (11) // should return 11
    expect(calculate('sq', 5)).toBe (25)// should return 25
    expect(calculate('sq', 3, 44)).toBe (9) // should return 9, as the 44 is ignored
    //expect(calculate('%', 124, 56).toBe) // should throw an errorsince '%' is not a supported operator
})

