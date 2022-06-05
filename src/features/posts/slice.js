import { createSlice } from "@reduxjs/toolkit"
import { createGeneralProps } from '../helpers/createGeneralProps'

const TAB = 'posts'
const props = {}

let initialState = {
  items: createGeneralProps(props),
}

const createCommonReducers = () => {
  return {
    add(state, { payload }) {
      const [ propName, data ] = payload
      console.log('payload', payload)

      state[propName].options.push(data) 
    },
  }
}

const additionalReducers = {
  /**
   * Переключение видимости списка
   * @param {any} state - состояние 
   * @param {object} payload - название ключа компонента, который невидим 
   */
  toggle(state, { payload: propName }) {
    state[propName].visible = !state[propName].visible
  }
}

export const slice = createSlice({
  name: TAB,
  initialState,
  reducers: {
    ...createCommonReducers(), 
    ...additionalReducers
  }
})

export const { actions } = slice
export default slice.reducer