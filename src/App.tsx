import { useEffect } from "react"
import { retrieveLaunchParams, isMiniAppSupported } from "@telegram-apps/sdk"

function App() {
  useEffect(
    () => {
      setTimeout(() => {
        console.log("hello world")
        if (isMiniAppSupported()) {
          console.log("that's great to see you in telegram")
          console.log("params : ")
          console.log(retrieveLaunchParams())
        }
        else {
          console.log("dude your not in the telegram !!")
        }
      }, 4000);
    }, []
  )

  return (
    <div>App - 2</div>
  )
}

export default App