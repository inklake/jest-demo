import { fetchData } from '../src/promise'

describe('promise module', () => {
  test('ts test promise 1', async () => {
    const data = await fetchData(1)
    expect(data).toStrictEqual({
      code: 200,
      msg: 'success',
      data: {
        id: 1,
        name: '测试商品',
      },
    })
  })

  test('ts test promise 2', async () => {
    const data = await fetchData(2)
    expect(data).toStrictEqual({
      code: 200,
      msg: 'not exist',
      data: null,
    })
  })

  test('ts test promise 3', async () => {
    try {
      return await fetchData(3)
    } catch (error) {
      expect(error).toBe('Param error')
    }
  })
})
