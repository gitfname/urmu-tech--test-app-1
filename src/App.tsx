import { useEffect, useState } from "react"
import { retrieveLaunchParams, openPopup, isMiniAppSupported, isMiniAppMounted } from "@telegram-apps/sdk"

function App() {
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")

  useEffect(
    () => {
      console.log("is mounted : ", isMiniAppMounted(), "is supported :", isMiniAppSupported())
      const params = retrieveLaunchParams()
      setUsername(params.initData?.user?.username || "not found")
      setFirstName(params.initData?.user?.firstName || "not found")
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
      <p>first name : {firstName}</p>
      <p>username : {username}</p>
    </div>
  )
}

export default App