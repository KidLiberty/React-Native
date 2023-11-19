import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import axios from 'axios'

const useFetch = (endpoint: string, query: { query: string, page: number, num_pages: number }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': '4534a4a6f7mshe08c53dc22e36dap160f33jsncd4a49f58de9',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };


  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)
      setData(response.data.data)
      // console.log(response.data.data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setError(error as string)
      Alert.alert('There was an error processing the request.')
    } finally {

    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = (): void => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetch