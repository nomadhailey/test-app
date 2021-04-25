import { useState, useCallback } from 'react'

const useInput = (initialState) => {
  const [values, setValues] = useState(initialState)
  const [valid, setValid] = useState(null)

  // const handleChange = useCallback(
  //   (e) => {
  //     const { name, value } = e.target

  //     setValues(values => ({
  //       ...values,
  //       [name]: value,
  //     }))
  //     if (name === 'password') {
  //       setValid(value.length >= 8 && value.length <= 15)
  //     }
  //   },
  //   [],
  // )

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target

      setValues({
        ...values,
        [name]: value,
      })
      if (name === 'password') {
        setValid(value.length >= 8 && value.length <= 15)
      }
    },
    [values],
  )
  return [values, handleChange, valid]
}

export default useInput
