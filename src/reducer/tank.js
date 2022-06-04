export default function tank(state = {}, action) {
  switch (action.type) {
    case 'Add_Tank':
      /// without recreate new object
      //return {...state, tank: action.payload.tank};

      // recreate new object
      return {...state, tank: {...action.payload.tank}}
    default:
      return state;
  }
}

export function addTank(data) {
  return {
    type: 'Add_Tank',
    payload: data
  }
};
