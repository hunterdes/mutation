import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, addMoney } from './reducer/slice'


export default function Counter(props) {
  const {money} = props

  const count = useSelector(state => state.counter.value)
  const moneyData = useSelector(state => state.counter.money)
  const dispatch = useDispatch()

  // check whether produce make this object to a new one?
  console.log(moneyData === money, moneyData, money)

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
        <button aria-label="Decrement value" onClick={() => dispatch(addMoney({money: money}))}>
          Add money
        </button>
      </div>
    </div>
  )
}