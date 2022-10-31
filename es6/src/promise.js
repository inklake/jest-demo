export const userLogin = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        msg: 'success',
        data: {
          id: 1,
          nickName: 'test',
        },
      })
    }, 200)
  })

export const fetchData = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
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
    }, 200)
  })

export const loginCheck = () => {
  return false
}

const handleLoginFinish = (login) => {
  loginAction.list.forEach((item) => {
    if (item.needLogin && !login) {
      return
    }

    item.fn()
  })
  loginAction.list = []
}

const loginAction = {
  running: false,
  list: [],
}

export const loginHandler = (fn, needLogin = false) => {
  return function () {
    if (loginCheck()) {
      fn.apply(this, arguments)
      return
    }

    loginAction.list.push({
      string: fn.toString(),
      fn: fn.bind(this, ...arguments),
      needLogin,
    })

    if (loginAction.running) {
      return
    }

    loginAction.running = true

    const handleLogin = async () => {
      const res = await userLogin().catch(console.log)

      handleLoginFinish(res?.data?.id)

      loginAction.running = false
    }

    handleLogin()
  }
}
