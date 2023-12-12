import { useState } from "react"

const useValue = (newValue) => {
  const [value, setValue] = useState('old value')

  const handleValue = () => {
    setValue(newValue)
  }

  return {
    value, 
    handleValue
  }
}

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}


export { useValue, useField }