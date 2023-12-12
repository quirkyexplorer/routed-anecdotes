import { useState } from "react"

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const handleReset = () => {
    setValue('')
  } 

  return {
    type,
    value,
    onChange,
    handleReset
  }
}


export { useField }