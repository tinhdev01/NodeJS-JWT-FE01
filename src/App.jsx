import axios from "./util/axios.customize"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    const fetchHelloWord = async () => {
      const res = await axios.get(`/v1/api`)
      console.log(">>Check res :", res)
    }
    fetchHelloWord();
  }, [])
  return (
    <>
      Hello Word
    </>
  )
}

export default App
