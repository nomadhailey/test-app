import { useState, useCallback } from 'react'
import { URL } from '../config'

const useAsync = ({ urlDetail, optionsData = {} }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const url = `${URL}${urlDetail}`

  const requestData = useCallback(async () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(optionsData),
    }
    setIsLoading(true)
    try {
      const res = await fetch(url, options)
      const result = await res.json()
      setResponse(result)
      return result
    } catch (error) {
      console.log('error:', error)
      alert('비밀번호를 확인해 주세요')
    } finally {
      setIsLoading(false)
    }
  }, [optionsData, url])

  return { isLoading, response, requestData }
}

export default useAsync
