import React from 'react'
import {useSelector} from 'react-redux'
function Alert() {
    const errors=useSelector(state=>state.Reducererror)
  return (
    <div>
        {errors.map(e=>
            <span style={{color:"red"}}>
                {e.msg}
            </span>)}
    </div>
  )
}

export default Alert