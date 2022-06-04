import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/slice.js'
import tankReducer from './reducer/tank.js'

export default configureStore({
  reducer: {
    counter: counterReducer,
    tank: tankReducer
  }
})