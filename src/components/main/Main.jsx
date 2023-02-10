import "./styles.scss"
import { EffectLayout } from "../effect/layout/EffectLayout";
import { InteractiveLayout } from "../interactive/layout/InteractiveLayout";

export const Main = () => {
  return (
    <div className="main">
     <InteractiveLayout />
     <EffectLayout />
    </div>
  )
}