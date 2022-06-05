import { createSlice } from "@reduxjs/toolkit"
import { createGeneralProps } from '../helpers/createGeneralProps'

const TAB = 'users'
const props = {}

let initialState = {
  items: createGeneralProps(props),
}

const createCommonReducers = () => {
  return {
    add(state, { payload }) {
      const [ propName, data ] = payload

      state[propName].options.push(data) 
    },
    toggle(state, { payload: propName }) {
      state[propName].visible = !state[propName].visible
    }
  }
}

export const slice = createSlice({
  name: TAB,
  initialState,
  reducers: createCommonReducers(),
})

export default slice.reducer
