import { React } from "useQuantitySelector";

const QuantitySelector = () => {
  const { onClickPlus, onClickMinus, value, message } = useQuantitySelector();
  return(
    <div className="quantity-selector">
      <button onClick={onClickMinus} className="button">-</button>
      <div className="number">{value}</div>
      <button onClick={onClickPlus}>+</button>
    <div className="message">{message}</div>
    </div>
  )
}

export default QuantitySelector;