import { useState, useCallback } from 'react'

const useInput = () => {
  const [values, setValues] = useState({})
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }, [])

  return [values, handleChange, setValues]
}

export default useInput
