import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export interface Artist {
  id: number;
  nome: string;
}

export function useArtists() {
  return useQuery<Artist[], Error>({
    queryKey: ["artistas"],
    queryFn: async () => {
      const { data } = await api.get<Artist[]>("/artistas");
      return data;
    },
  });
}
