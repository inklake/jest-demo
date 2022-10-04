import { fetchData } from '../src/promise'

describe('promise module', () => {
  test('ts test promise 1', () => {
    return fetchData(1).then((data) => {
      expect(data).toStrictEqual({
        code: 200,
        msg: 'success',
        data: {
          id: 1,
          name: '测试商品',
        },
      })
    })
  })

  test('ts test promise 2', () => {
    return fetchData(2).then((data) => {
      expect(data).toStrictEqual({
        code: 200,
        msg: 'not exist',
        data: null,
      })
    })
  })

  test('ts test promise 3', () => {
    return fetchData(3).catch((error) => {
      expect(error).toBe('Param error')
    })
  })
})
