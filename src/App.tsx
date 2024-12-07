import { useEffect, useState } from "react"
import { retrieveLaunchParams, openPopup, init } from "@telegram-apps/sdk"

function App() {
  const [isMiniApp, _] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    () => {
      init()
      
      setTimeout(() => {
        console.log("hello world")
        console.log("retrieve params : ", retrieveLaunchParams)

        // setMiniAppHeaderColor("")
        console.log("openPopup", openPopup)

        openPopup?.({
          title: "hello world",
          message: "hello world and all guys"
        })

        setIsLoading(false)
      }, 5000);
    }, []
  )

  return (
    <div style={{ color: "white" }}>
      <div>App - 3</div>
      <p>is loading : {isLoading + ""}</p>
      <p>is mini app : {isMiniApp + ""}</p>
    </div>
  )
}

export default App