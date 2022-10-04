import axios from 'axios'
import { getProductList } from '../src/product'

jest.mock('axios')

test('should fetch products failed', () => {
  const getError = new Error('network error')
  axios.get = jest.fn().mockRejectedValue(getError)

  return getProductList().catch((error) => expect(error).toBe(getError))
})

test('should fetch products', () => {
  const products = [{ name: 'product1' }]
  const res = { data: products }
  axios.get = jest.fn().mockResolvedValue(res)

  return getProductList().then((data) => expect(data).toEqual(products))
})
