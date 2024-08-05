import { expect, test } from 'vitest'
import { sum } from './sum'


test('bare bones test should pass', () => {
    expect(sum(2, 2)).toBe(4)
  })