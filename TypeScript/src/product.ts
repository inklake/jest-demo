import axios from 'axios'

export const getProductList = () => {
  return axios.get('product.json').then((res) => res.data)
}
