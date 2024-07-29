
import React, { Suspense } from "react"
import UseHandleApi from "./use hook/useApi"
import RegularApiHandle from "./use hook/regularApiHandle"


function App() {


  return (

    <Suspense fallback={"loading..."}>
      <div>
        <UseHandleApi />
        {/* <RegularApiHandle/> */}
      </div>
    </Suspense>

  )
}

export default App
