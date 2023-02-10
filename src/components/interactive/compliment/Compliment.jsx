import "./styles.scss"

export const Compliment = ({item, id}) => {
  return (
    <div id={id} className="compliment">
      { item.text }
    </div>
  )
}
