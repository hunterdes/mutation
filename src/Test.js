import React from 'react'

var i = 0;
function Test(props) {
  const {x} = props
  i++

  return (
    <div>{i}</div>
  );
}

export default Test;