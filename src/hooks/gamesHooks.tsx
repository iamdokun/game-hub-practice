import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {

    const controller =new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {
        if (res.data.results) {
          setGames(res.data.results);
          return;
        }
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

      return () => controller.abort()
  }, []);
 
  return {games, error}
}

export default useGame