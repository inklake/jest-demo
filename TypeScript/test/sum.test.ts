import { describe, expect, test } from '@jest/globals'
import { sum } from '../src/sum'

describe('sum module', () => {
  test('ts test sum', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
