import { useEffect, useState } from "react"
import { retrieveLaunchParams, openPopup, isMiniAppSupported, isMiniAppMounted, openTelegramLink, initDataUser, initData, initDataChat, parseInitData } from "@telegram-apps/sdk"
import { useLaunchParams } from "@telegram-apps/sdk-react"

function App() {
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const lp = useLaunchParams()

  useEffect(
    () => {
      console.log("---------------- lp ----------------")
      console.log(lp)
      console.log("END ---------------- lp ---------------- END")
    }, [lp]
  )

  useEffect(
    () => {
      console.log("is mounted : ", isMiniAppMounted(), "is supported :", isMiniAppSupported())
      const params = retrieveLaunchParams()
      console.log("parsed : ", parseInitData(params.initDataRaw))
      setUsername(params.initData?.user?.username || "not found")
      setFirstName(params.initData?.user?.firstName || "not found")
      setPhotoUrl(params.initData?.user?.photoUrl || "not found")

      console.log("user :", params.initData?.user)

      console.log("iniDataUSer :", initDataUser())

      console.log("initData.user()", initData.user())

      console.log("initDataChat()", initDataChat())

    }, []
  )

  const handleOpenPopup = () => {
    openPopup({
      title: "the title",
      message: "hello world"
    })
  }

  const handleOpenLink = () => {
    openTelegramLink("https://t.me/arash_zarandi")
  }

  return (
    <div style={{ color: "white" }}>
      <div>App - 6</div>
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

      <button onClick={handleOpenLink}>
        open jahanzar
      </button>
    </div>
  )
}

export default App