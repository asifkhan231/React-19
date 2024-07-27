import React from 'react'
import {useFormStatus} from "react-dom"

export default function UseFormStatus() {
    const {pending} = useFormStatus()
  return (
    <div>
     <button type="submit" disabled={pending}>
        {pending ? "Logging in..." : "Login"}
      </button>
    </div>
  )
}
