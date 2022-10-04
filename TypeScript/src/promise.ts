interface IFproduct {
  id: number
  name: string
}

interface IFresult {
  code: number
  msg: string
  data: IFproduct | null
}

export const fetchData = (id?: number) =>
  new Promise<IFresult>((resolve, reject) => {
    if (id === 1) {
      resolve({
        code: 200,
        msg: 'success',
        data: {
          id: 1,
          name: '测试商品',
        },
      })
      return
    }

    if (id === 2) {
      resolve({
        code: 200,
        msg: 'not exist',
        data: null,
      })
      return
    }

    reject('Param error')
  })
