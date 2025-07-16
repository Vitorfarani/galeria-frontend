import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export interface ArtistDetail {
  id: number;
  nome: string;
  biografia: string;
  dataNascimento: string;
  obras: {
    id: number;
    titulo: string;
    urlImagem: string;
  }[];
}

export function useArtistDetail(id: number) {
  return useQuery<ArtistDetail, Error>({
    queryKey: ["artista", id],
    queryFn: async () => {
      const { data } = await api.get<ArtistDetail>(`/artistas/${id}`);
      return data;
    },
  });
}
