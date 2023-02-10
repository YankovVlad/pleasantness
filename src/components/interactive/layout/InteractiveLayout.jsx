import "./styles.scss"
import { Compliment } from "../compliment/Compliment";
import { useState } from "react";
import api from "../../../api/api.js";
import { getRandomInt } from "../../../helpers/random.js";


export const InteractiveLayout = () => {
  const [compliment, setCompliment] = useState({ id: '0', text: 'Здравствуй. Хочу тебе кое что сказать...' })
  const [loading, setLoading] = useState(false)
  
  const data = api.getCompliments()
  
  const getCompliment = () => {
    return data[getRandomInt(0, data.length)]
  }
  const changeCompliment = () => {
    if (loading) return
    setLoading(true)
    const item = document.getElementById('compliment')
    item.classList.add('hidden')
    setTimeout(() => {
      setCompliment((prevState) => {
        const nextCompliment = getCompliment()
        if (prevState.id === nextCompliment.id) {
          return data.filter(item => item.id !==nextCompliment.id)[0]
        } else return nextCompliment
      })
      item.classList.remove('hidden')
      setLoading(false)
    }, 1010)
  }
  return (
    <div className="i-layout">
      <div className="i-layout__body" onClick={changeCompliment}>
        <Compliment id="compliment" item={ compliment } />
      </div>
    </div>
  )
}