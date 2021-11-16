import axios from 'axios'

export const getProducts = async () => {
  const url = 'https://front-test-api.herokuapp.com/api/product'

  try {
    const response = await axios.get(url)
    const isResponseOk = response.data.length !== 0

    if (isResponseOk) {
      return response
    } else {
      console.log('error')
    }
  } catch (error) {
    console.log(error)
  }
}
