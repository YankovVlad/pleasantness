import "./styles.scss"
import { useEffect } from "react";

export const EffectItem = ({ size, x, y, id }) => {
  
  const showElement = () => {
    const item = document.getElementById(id)
    item.classList.add('visible')
    item.style.top = `${item.style.top.split('px')[0] - 50}px`
    
  }
  
  useEffect(() => {
    setTimeout(() => {
      showElement()
    }, 100)
  }, [])
  return (
    <div id={id} style = { { width: size + 'px', height: size + 'px', top: y + 'px', left: x + 'px' } } className="effect"></div>
  )
}