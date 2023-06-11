import {useState, useEffect} from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';


interface FetchResponse<T> {
    results: T[]
  }

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const controller = new AbortController();
    
        apiClient
          .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
          .then((res) => {
            if (res.data.results) {
                setData(res.data.results);
              setIsLoading(false)
              return;
            }
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setIsLoading(false)
          });
    
          return () => controller.abort()
          
      }, []);
 
 
      return {data, isLoading, error}
}

export default useData