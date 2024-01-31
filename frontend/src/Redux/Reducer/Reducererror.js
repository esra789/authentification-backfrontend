import { ALERTERROR, CLEARERROR } from "../Actiontype/ActiontypeError"

const initialState = []

export const Reducererror= (state = initialState, { type, payload }) => {
  switch (type) {

  case ALERTERROR:
    return [ ...state,payload ]
    case CLEARERROR:
        return state.filter(e=>e.id!==payload)
  default:
    return state
  }
}
