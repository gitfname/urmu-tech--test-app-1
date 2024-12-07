import { useEffect, useState } from "react"
import { retrieveLaunchParams, openPopup, isMiniAppSupported, isMiniAppMounted } from "@telegram-apps/sdk"

function App() {
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")

  useEffect(
    () => {
      console.log("is mounted : ", isMiniAppMounted(), "is supported :", isMiniAppSupported())
      const params = retrieveLaunchParams()
      setUsername(params.initData?.user?.username || "not found")
      setFirstName(params.initData?.user?.firstName || "not found")
      setPhotoUrl(params.initData?.user?.photoUrl || "not found")

      console.log("user :", params.initData?.user)

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

      <img
        alt=""
        src={photoUrl}
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid red",
          marginTop: "4px",
          marginLeft: "4px"
        }}
      />
    </div>
  )
}

export default App