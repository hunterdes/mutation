import { createSlice } from '@reduxjs/toolkit'
import produce from 'immer'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    test: {}
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    test: (state, action) => {
      // case 1
      return produce(state, draft => {
        draft.test = action.payload.test

        return draft
      })

      // case 2
      /*return produce(state, draft => {
        draft.test = {...action.payload.test}

        return draft
      })*/

      // case 3 no mutate
      //state.test = {...action.payload.test}

      // case 4 mutate
      //state.test = action.payload.test
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, test } = counterSlice.actions

export default counterSlice.reducer