import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
  id: number;
  name: string
}

interface FetchGenresResponse {
  results: Genre[]
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    const controller =new AbortController();

    apiClient
      .get<FetchGenresResponse>("/genres", {signal: controller.signal})
      .then((res) => {
        if (res.data.results) {
          setGenres(res.data.results);
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
 
  return {genres, error, isLoading}
}

export default useGenres