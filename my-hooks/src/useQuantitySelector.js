import React, { useState } from 'react';

const maximo, minimo;

const increase = ( value, maximo ) => {
  return {
    valueIncreased: value < maximo ? value + 1 : value, 
    message: value < maximo ? "" : "É o valor maximo!"
  }
}

const decrease = ( value, minimo ) => {
  return {
    valueDecrease: value > minimo ? value - 1 : value,
    message: value > minimo? " " : "É o valor minimo!"
  }
}

const useQuantitySelector = () => {
  const [state, setState] = useState({
    value: 0,
    message: ''
  })

  const onClickIncrease = () => {
    setState(increase(state.value, 10))
  }

  const onCliskDecrease = () => {
    setState(decrease(state.value, 0))
  }

  return { onClickIncrease, onClickIncrease, state };
}

export default useQuantitySelector;