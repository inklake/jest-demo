jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

import { timerGame } from '../src/timerGame'

test('waits 1 second before ending the game', () => {
  timerGame(() => {
    return 'timerGame'
  })

  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
})
