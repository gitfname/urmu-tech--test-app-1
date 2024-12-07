import { useEffect } from "react"
import { retrieveLaunchParams, isMiniAppSupported } from "@telegram-apps/sdk"

function App() {
  useEffect(
    () => {
      console.log("hello world")
      if (isMiniAppSupported()) {
        console.log("that's great to see you in telegram")
        console.log("params : ")
        console.log(retrieveLaunchParams())
      }
      else {
        console.log("dude your not in the telegram !!")
      }
    }, []
  )

  return (
    <div>App</div>
  )
}

export default App