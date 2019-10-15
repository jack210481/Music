import axios from "axios"

export function createAction(options) {
  const { url, payload, method = 'get', type} = options
  return (dispatch) => {
    return axios.request({url: url, data: payload, method: method}).then((res) => {
      dispatch({ type, payload: res.data })
      return res.data
    })
  }
}
