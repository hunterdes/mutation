import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, test } from './slice'


export default function Counter(props) {
  const {globalData} = props

  const count = useSelector(state => state.counter.value)
  const data = useSelector(state => state.counter.test)
  const dispatch = useDispatch()

  // check whether produce make this object to a new one?
  console.log(data === globalData, data, globalData)

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(test({test: globalData}))}>
          test
        </button>
        {data?.a}{data?.b}
      </div>
    </div>
  )
}