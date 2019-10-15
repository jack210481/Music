import {createAction} from '../utils/jRedux'
import {
  ADD,
  MINUS
} from '../constants/counter'


export const add = () => createAction({
  url: '/mockTest',
  type: ADD,
  method: 'post'
})

export const minus = () => {
  return {
    type: MINUS
  }
}

export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 1000)
  }
}
