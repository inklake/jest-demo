import { fetchData, userLogin, loginHandler } from '../src/promise'

describe('promise module', () => {
  test('test promise 1', () => {
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

  test('test promise 2', () => {
    return fetchData(2).then((data) => {
      expect(data).toStrictEqual({
        code: 200,
        msg: 'not exist',
        data: null,
      })
    })
  })

  test('test promise 3', () => {
    return fetchData(3).catch((error) => {
      expect(error).toBe('Param error')
    })
  })

  test('userLogin', () => {
    Promise.all([userLogin(), fetchData(1)]).then((res) => {
      expect(res).toStrictEqual([
        { code: 200, msg: 'success', data: { id: 1, nickName: 'test' } },
        { code: 200, msg: 'success', data: { id: 1, name: '测试商品' } },
      ])
    })
  })

  test('loginHandler', () => {
    loginHandler(() => {
      fetchData(1).then((data) => {
        expect(data).toStrictEqual({
          code: 200,
          msg: 'success',
          data: {
            id: 1,
            name: '测试商品',
          },
        })
      })
    }, false)()

    loginHandler(() => {
      fetchData(2).then((data) => {
        expect(data).toStrictEqual({
          code: 200,
          msg: 'not exist',
          data: null,
        })
      })
    }, true)()
  })
})
