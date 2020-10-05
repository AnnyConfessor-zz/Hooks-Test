import React, { useState } from 'react';

const [value, setValue] = useState(0)
const [message, setMessage] = useState('');
const onClickPlus = () => {
  if (value<10) {
    setValue(value+1);
    setMessage('')
  } else ('max!')
}

const onCliskMinus = () => {
  if (value>0) {
    setValue(value-1);
    setMessage('');
  } else {
    setMessage('min!')
  }
}

return {onClickPlus, onCliskMinus, value, message};