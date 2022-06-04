import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTank } from './reducer/tank.js'


export default function Tank(props) {
  const {tank} = props

  const tankData = useSelector(state => {
    return state.tank.tank
  })
  const dispatch = useDispatch()

  console.log(tankData, tankData === tank)

  return (
    <div>
      <div>
        <button aria-label="Decrement value" onClick={() => dispatch(addTank({tank: tank}))}>
          tank
        </button>
      </div>
    </div>
  )
}