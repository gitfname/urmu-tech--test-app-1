import { useEffect } from "react"
import { retrieveLaunchParams, openPopup, isMiniAppSupported, isMiniAppMounted } from "@telegram-apps/sdk"

function App() {

  useEffect(
    () => {
      console.log("is mounted : ", isMiniAppMounted(), "is supported :", isMiniAppSupported())
      console.log(retrieveLaunchParams())
    }, []
  )

  const handleOpenPopup = () => {
    openPopup({
      title: "the title",
      message: "hello world"
    })
  }

  return (
    <div style={{ color: "white" }}>
      <div>App - 4</div>
      <button onClick={handleOpenPopup}>
        open the popup
      </button>
    </div>
  )
}

export default App