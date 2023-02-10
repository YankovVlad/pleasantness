import "./styles.scss"
import { EffectItem } from "../item/EffectItem";
import { useEffect, useState } from "react";
import { Effect } from "../../../models/effect.js";
import { getRandomInt } from "../../../helpers/random.js";

export const EffectLayout = () => {
  
  const maxEffects = 40
  
  const [effects, setEffects] = useState([])
  let savedEffect = []
  
  
  const generateEffect = () => {
    const params = {
      x: getRandomInt(0, window.screen.availWidth),
      y: getRandomInt(0, window.screen.availHeight),
      size: getRandomInt(50, 140),
      id: getRandomInt(1, 100000),
      lifetime: getRandomInt(2000, 40000)
    }
    savedEffect.push(
      new Effect({
        x: params.x,
        y: params.y,
        size: params.size,
        id: params.id
      })
    )
    setEffects([...savedEffect])
    setTimeout(() => {
      document.getElementById(params.id).classList.remove('visible')
      setTimeout(() => {
        savedEffect = [...savedEffect.filter(item => item.id !== params.id)]
        setEffects(savedEffect)
      }, 510)
     
    },params.lifetime)
    
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (savedEffect.length < maxEffects) {
        generateEffect(maxEffects)
      }
    }, 200)
    return () => clearInterval(interval);
  }, [])
  
  return (
    <div className="effect-layout">
      { effects.map(item => {
        return (
          <EffectItem size={ item.size } x={ item.x } y={ item.y } key={ item.id } id={item.id} />
        )
      }) }}
    
    </div>
  )
}